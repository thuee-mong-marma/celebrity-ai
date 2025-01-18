"use client";

import { useEffect } from "react";
import { usePersona } from "@/hooks/usePersona";
import { useChat } from "ai/react";
import { personas } from "@/data/personaData";
import Textarea from "@/components/Textarea";
import ChatMessages from "@/components/ChatMessages";
import { SendHorizontal } from "lucide-react";

export default function Chat() {
  const { currentPersona } = usePersona();

  const { messages, input, handleInputChange, handleSubmit, append  } = useChat({
    api: "/api/chat",
    body: {
      persona: currentPersona,
      personality: personas[currentPersona].personality,
    },
  });

  useEffect(() => {
    if (!messages.length) {
      console.log('messages', messages)
      append({ role: "assistant", content: "Introduce yourself to the user.", id: "1" });
    }
  }, [messages.length, append, messages]);

  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-center p-2 border-b border-gray-300">
        <h1 className="text-xl font-bold text-purple">
          Therapy session with {currentPersona.split(" ")[0]}
        </h1>
      </header>
      <ChatMessages messages={messages} />
      <div className="w-full max-w-4xl p-2">
        <form onSubmit={handleSubmit} className="relative">
          <Textarea
            value={input}
            placeholder="Write your message here..."
            onChange={handleInputChange}
            rows={2}
          />
          <button
            type="submit"
            className="bg-transparent text-black rounded absolute right-2 top-[50%] -translate-y-[50%]"
          >
            <SendHorizontal className="w-6 h-6 text-white" />
          </button>
        </form>
        <p className="text-xs text-purple text-center leading-6 mt-2">
          <span className="text-danger">Disclaimer: </span>
          This advice provided by the AI is purely for amusement and should
          not be considered as professional advice.
        </p>
      </div>
    </div>
  );
}
