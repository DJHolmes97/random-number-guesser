import { ChangeEvent } from "react"
import "./main.css"

type ChatInputProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
}

const ChatInput = ({ value, onChange, onSubmit }: ChatInputProps) => {
  return (
    <div className="chat-input">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      <button>Send</button>
    </div>
  )
}

export default ChatInput
