import "./main.css"

type MessageBubbleProps = {
  message: string
  isPlayers: boolean
}
const MessageBubble = ({ message, isPlayers }: MessageBubbleProps) => {
  return (
    <div className={`message-bubble ${isPlayers ? "player" : "opponent"}`}>
      {message}
    </div>
  )
}

export default MessageBubble
