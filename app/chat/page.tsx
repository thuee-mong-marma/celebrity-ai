"use client";

import { useEffect } from "react";
import ChatMessages from "@/components/chat/Messages";
import ChatHeader from "@/components/chat/Header";
import ChatInput from "@/components/chat/ChatInput";
import { useAIChat } from "@/components/providers/AIChatProvider";

export default function Chat() {
  const { messages, appendMessage } = useAIChat();

  useEffect(() => {
    if (!messages.length) {
      appendMessage({
        role: "assistant",
        content: "Introduce yourself to the user.",
        id: "1",
      });
    }
  }, [messages.length, appendMessage]);

  return (
    <div className="flex flex-col h-dvh">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
