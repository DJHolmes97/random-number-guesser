"use client"
import { useState } from "react"
import "./main.css"
import { ChatInput, MessageBubble } from "@/components"

const GameContainer = () => {
  const [messages, setMessages] = useState([
    {
      message:
        "I am thinking of a number between 1 and 100. You have 5 attempts to get it correct.",
      isPlayers: false,
    },
    {
      message: "What is your first guess?",
      isPlayers: false,
    },
    {
      message: "100",
      isPlayers: true,
    },
  ])
  const [answer, setAnswer] = useState(Math.floor(Math.random() * 100) + 1)
  const [userInput, setUserInput] = useState("")
  const [guesses, setGuesses] = useState(5)
  return (
    <div className="game-container-wrapper">
      <div className="messages-wrapper">
        {messages.map((message, index) => (
          <MessageBubble
            key={index}
            message={message.message}
            isPlayers={message.isPlayers}
          />
        ))}
      </div>
      <div className="input-wrapper">
        <ChatInput value={userInput} onChange={() => {}} onSubmit={() => {}} />
      </div>
    </div>
  )
}

export default GameContainer
