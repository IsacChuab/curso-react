import { useChat } from "@/contexts/ChatContext";
import { useState } from "react";

export const StartChat = () => {
    const chatCtx = useChat();
    const [userChat, setUserChat] = useState('')

    const handleUserName = () => {
        if (userChat === '') return;

        chatCtx?.setUser(userChat);
    }

    return (
        <div>
            <h2 className="font-semibold mb-3 text-lg">
                Qual o seu nome?
            </h2>
            <div>
                <input 
                    className="bg-transparent border rounded-md border-slate-400 text-xl h-10 p-2"
                    onChange={e => setUserChat(e.target.value)}
                    onKeyDown={e => {if(e.key === 'Enter') handleUserName()}}
                />
                <button 
                    className="bg-transparent border rounded-md border-slate-400 h-10 ml-3 p-2 font-semibold"
                    onClick={handleUserName}
                >
                    Iniciar Chat
                </button>
            </div>
        </div>
    );
}