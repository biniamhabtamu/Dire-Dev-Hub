import React, { useEffect, useState, useRef } from "react";
import { auth, db } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { Button } from "@/components/ui/button";

const Chat = () => {
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!user) return;

    // Query messages collection ordered by timestamp ascending
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "asc")
    );

    // Subscribe to realtime updates
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push({ id: doc.id, ...doc.data() });
      });
      setMessages(msgs);
      scrollToBottom();
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, [user]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sendMessage = async () => {
    if (!messageInput.trim() || !user) return;

    const isCode = messageInput.startsWith("/code");
    const content = isCode ? messageInput.replace("/code", "").trim() : messageInput;

    try {
      // Save message to Firestore (persistent)
      await addDoc(collection(db, "messages"), {
        senderId: user.uid,
        senderName: user.displayName || user.email,
        content,
        isCode,
        createdAt: serverTimestamp(),
      });
      setMessageInput("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  if (!user) {
    return <div className="p-6 text-center">Please login to see the chat.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-8 flex flex-col h-[600px]">
      <h2 className="text-2xl font-bold mb-4">Chat Room</h2>

      {/* Messages container */}
      <div className="flex-1 overflow-y-auto p-4 border rounded bg-gray-50 space-y-4">
        {messages.map((msg) => {
          const isOwnMessage = msg.senderId === user.uid;
          return (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[75%] ${
                isOwnMessage ? "ml-auto items-end" : "mr-auto items-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg ${
                  isOwnMessage
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-300 text-gray-900 rounded-bl-none"
                } whitespace-pre-wrap`}
              >
                {msg.isCode ? (
                  <pre className="font-mono bg-blue-800 bg-opacity-30 p-2 rounded">
                    {msg.content}
                  </pre>
                ) : (
                  <span>{msg.content}</span>
                )}
              </div>
              <div className="text-xs mt-1 text-gray-500 select-none">
                {isOwnMessage ? "You" : msg.senderName} •{" "}
                {msg.createdAt?.toDate
                  ? msg.createdAt.toDate().toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                  : "..."}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input and send */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Type your message (use /code for code block)..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-grow border rounded px-3 py-2"
        />
        <Button onClick={sendMessage} disabled={!messageInput.trim()}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;
