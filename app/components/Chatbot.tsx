"use client"
import { useChat } from "@ai-sdk/react"
import { TbMessageChatbotFilled } from "react-icons/tb";
import React, { useState, useEffect } from 'react'

function Chatbot() {
    const [toggle, setToggle] = useState(false)
    const [input, setInputRef] = useState("")
    const {messages, sendMessage} = useChat()
   

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        sendMessage({text: input})
        setInputRef("")
    }

    useEffect(() => {
  console.log("Messages:", messages);
}, [messages]);
    
  return (
    <>
        {toggle && 
        <section className= " bg-green-100 fixed bottom-0 right-0 mb-15 mr-15 w-[300px] h-[400px] border-2 border-gray-500 rounded-md z-50 overflow-scroll">
            {messages.map((message) => (
                <section key={message.id} className="">
                    {message.role === "user" ? "User: ": "AI:"}
                    {message.parts.map((part, i) => {
                        switch (part.type) {
                            case "text":
                                return <div key={`${message.id}-${i}`}>{part.text}</div>
                        }
                    })}
                </section>
            ))}
            <form onSubmit={handleSubmit} action="">
                <input onChange={(event) => setInputRef(event.currentTarget.value)} value={input} type="text"className="border" />
                <button type="submit">ask</button>
            </form>
        </section>
        }

        {toggle && <div onClick={() => setToggle(false)} className="inset-0 z-40 bg-[#00002027] fixed "></div> }

        <button onClick={() => setToggle(prev => !prev)} className='pointer fixed bottom-0 right-0 mb-5 mr-3 '>
                <TbMessageChatbotFilled color="white" size={"40px"} />
        </button>
        
    </>
  )
}

export default Chatbot