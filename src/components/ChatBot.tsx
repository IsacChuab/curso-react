import { useChat } from "@/contexts/ChatContext";
import { useState } from "react";

export const ChatBot = () => {
    const chatCtx = useChat();
    const [userMessage, setUserMessage] = useState('');
    const [botMessage, setBotMessage] = useState('');

    const handleSendMessage = (user: string) => {
        if (user === 'bot') {
            chatCtx?.setMessages(user, botMessage);
        } else {
            chatCtx?.setMessages(user, userMessage);
        }
        setUserMessage('');
        setBotMessage('');
    }

    return (
        <div className='flex flex-col border border-white bg-transparent rounded-md w-2/5 h-2/4 justify-between'>
            <div className="flex flex-col h-full overflow-auto">
                {chatCtx?.chat.map((item: any, i: number) => (
                    <div key={i} className={`bg-slate-700 p-2 w-fit rounded-lg border m-3 max-w-64 h-fit ${item.user !== 'bot' && 'self-end'}`}>
                        <div>
                            {item.user}
                        </div>
                        <div>
                            {item.message}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex flex-col">
                <input
                    className="border-t bg-transparent p-3" 
                    placeholder={`${chatCtx?.user}, digite uma mensagem (e aperte enter)`}
                    onKeyDown={e => {if(e.key === 'Enter') handleSendMessage(chatCtx.user)}}
                    onChange={e => setUserMessage(e.target.value)}
                    value={userMessage}
                />
                <input
                    className="border-t bg-transparent p-3" 
                    placeholder="bot, digite uma mensagem (e aperte enter)" 
                    onKeyDown={e => {if(e.key === 'Enter') handleSendMessage('bot')}}
                    onChange={e => setBotMessage(e.target.value)}
                    value={botMessage}
                />        
            </div>
        </div>
    );
}