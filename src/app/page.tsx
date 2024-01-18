"use client"

import { ChatProvider } from "@/contexts/ChatContext"
import Initial from "./initial";

export default function Home() {
  return (
      <ChatProvider>
        <Initial />
      </ChatProvider>
  )
}
