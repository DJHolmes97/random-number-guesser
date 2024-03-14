"use client"
import { ChangeEvent } from "react"
import "./main.css"

type ChatInputProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
}

const ChatInput = ({ value, onChange, onSubmit }: ChatInputProps) => {
  return (
    <div className="chat-input-wrapper">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="chat-input"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit()
          }
        }}
      />
      <button
        className="chat-input-button"
        onClick={() => {
          onSubmit()
        }}
      >
        Send
      </button>
    </div>
  )
}

export default ChatInput
