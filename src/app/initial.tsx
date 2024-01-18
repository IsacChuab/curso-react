"use client"

import { ChatBot } from "@/components/ChatBot"
import { StartChat } from "@/components/StartChat"
import { useChat } from "@/contexts/ChatContext"

export default function Initial() {
  const chatCtx = useChat();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="mb-5 font-bold text-3xl">Chat Simples</h1>
        {chatCtx?.user === '' && 
          <StartChat />
        }

        {chatCtx?.user !== '' && 
          <ChatBot />
        }
    </div>
  )
}
