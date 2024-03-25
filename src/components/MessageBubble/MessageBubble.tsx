import "./main.css"

type MessageBubbleProps = {
  message: string
  isPlayers: boolean
  isLoading: boolean
}
const MessageBubble = ({
  message,
  isPlayers,
  isLoading,
}: MessageBubbleProps) => {
  return (
    <div className={`message-bubble ${isPlayers ? "player" : "opponent"}`}>
      {!isLoading ? (
        message
      ) : (
        <svg height="20" width="40">
          <circle className="dot" cx="10" cy="10" r="3" />
          <circle className="dot" cx="20" cy="10" r="3" />
          <circle className="dot" cx="30" cy="10" r="3" />
        </svg>
      )}
    </div>
  )
}

export default MessageBubble
