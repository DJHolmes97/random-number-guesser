"use client"
import { ChangeEvent } from "react"
import "./main.css"

type ChatInputProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
  status?: string
}

const Icon = () => {
  return (
    <div className="chat-input-icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

const Status = ({ message }: { message: string }) => {
  return (
    <div className="chat-input-status" data-testid="chat-input-status">
      <Icon />
      {message}
    </div>
  )
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
          data-testid="chat-input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSubmit()
            }
          }}
        />
        <button
          className="chat-input-button"
          data-testid="chat-input-button"
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
