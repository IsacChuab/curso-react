import { chatReducer } from "@/reducers/chatReducer";
import { Message } from "@/types/Message";
import { ReactNode, createContext, useContext, useReducer, useState } from "react";

type ChatContext = {
    user: string;
    setUser: (user: string) => void;
    chat: Array<Message>;
    setMessages: (user: string, message: string) => void;
}

export const ChatContext = createContext<ChatContext>({} as ChatContext);

export const ChatProvider = ({children}: { children: ReactNode } ) => {
    const [chat, dispatch] = useReducer(chatReducer, [] as Message[]);
    const [user, setUser] = useState("");

    const setMessages = (user: string, message: string) => {
        dispatch({
            type: 'add',
            payload: {
                user: user,
                text: message
            }
        });
    }

    return (
        <ChatContext.Provider value={{ chat, setMessages, user, setUser }}>{children}</ChatContext.Provider>
    );
}

export const useChat = () => useContext(ChatContext);