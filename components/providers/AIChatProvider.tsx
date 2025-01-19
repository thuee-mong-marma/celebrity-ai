'use client'

import { createContext, useContext, useState } from "react";
import { useChat } from "ai/react";
import { Message } from "ai/react";

type AIChatContextType = {
  messages: Message[];
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  appendMessage: (message: Message) => void;
};

const AIChatContext = createContext<AIChatContextType | undefined>(undefined);

export const AIChatProvider = ({ children }: { children: React.ReactNode }) => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, append: appendMessage } = useChat({
    api: "/api/chat",
    onFinish: (message) => {
      console.log('message generated', message);
    }
  });

  return (
    <AIChatContext.Provider
      value={{ messages, input, handleInputChange, handleSubmit, isLoading, appendMessage }}
    >
      {children}
    </AIChatContext.Provider>
  );
};

export const useAIChat = () => {
  const context = useContext(AIChatContext);
  if (!context) throw new Error("useAIChat must be used within AIChatProvider");
  return context;
};
