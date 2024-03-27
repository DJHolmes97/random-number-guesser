"use client"
import { ChangeEvent } from "react"
import "./main.css"

type ChatInputProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
  status?: string
}

const Status = ({ message }: { message: string }) => {
  return <div className="chat-input-status">{message}</div>
}

const ChatInput = ({ value, onChange, onSubmit, status }: ChatInputProps) => {
  return (
    <div className="chat-input-wrapper">
      {status && <Status message={status} />}
      <div className="chat-input-inner-wrapper">
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
    </div>
  )
}

export default ChatInput
