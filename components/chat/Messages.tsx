"use client";

import { useEffect, useState, useRef } from "react";
import { Message } from "ai";
import { ArrowDown } from "lucide-react";
import { isElementVisible } from "@/lib/utils";
import { useAIChat } from "@/components/providers/AIChatProvider";


const ChatMessages = () => {
  const { messages } = useAIChat();

  return (
    <div
      className="relative flex-1 overflow-y-auto px-4 pt-14 text-white flex flex-col gap-4"
      // ref={containerRef}
    >
      {messages.map((m) => (
        <>
          {m.role === "user" ? (
            <p key={m.id} data-message-id={m.id} className="whitespace-pre-wrap max-w-[75%] self-end bg-gray-700 rounded-lg p-2" data-role="user">
              {m.content}
            </p>
          ) : (
            <p key={m.id} data-message-id={m.id} className="whitespace-pre-wrap max-w-[80%] bg-purple-200 text-black rounded-lg p-2" data-role={m.role}>
              {m.content}
            </p>
          )}
        </>
      ))}
      {/* <div ref={messagesEndRef} /> */}
      {/* {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-0 bg-gray-700 text-white rounded-full shadow-lg hover:bg-purple/80 transition-all"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      )} */}
    </div>
  );
};

export default ChatMessages;
