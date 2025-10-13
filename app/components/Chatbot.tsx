"use client"
import { ChatOllama } from "@langchain/ollama"
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { TbMessageChatbotFilled } from "react-icons/tb";
import React, { useState } from 'react'

type MSG = {role: string, mes: string}

const llm = new ChatOllama({
    model: "llama3.1",
    temperature: 0
})
const memory = new BufferMemory({returnMessages: true})

const chain = new ConversationChain({llm,memory})

function Chatbot() {
    const [toggle, setToggle] = useState(false)
    const [inputRef, setInputRef] = useState("")
    const [messages, setMessages] = useState<MSG[]>([])
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        setMessages(prev => [...prev, {role: "Axner", mes: inputRef}])
        const res = await chain.call({input: inputRef})
        setMessages(prev => [...prev, {role: "Assistant", mes: res.response}])
        
    }

    console.log(messages)
  return (
    <>
        {toggle && 
        <section className= " bg-green-100 fixed bottom-0 right-0 mb-15 mr-15 w-[300px] h-[500px] border-2 border-gray-500 rounded z-50">
            {messages.map((e,i) => <><p>{e.role}</p><p>{e.mes}</p></>)}
            <form onSubmit={handleSubmit} action="">
                <input onChange={(event) => setInputRef(event.target.value)} type="text"className="border" />
                <button type="submit">ask</button>
            </form>
        </section>
        }

        {toggle && <div onClick={() => setToggle(false)} className="inset-0 z-40 bg-[#00002027] fixed "></div> }

        <button onClick={() => setToggle(prev => !prev)} className='pointer fixed bottom-0 right-0 mb-5 mr-5 '>
                <TbMessageChatbotFilled size={"40px"} />
        </button>
        
    </>
  )
}

export default Chatbot