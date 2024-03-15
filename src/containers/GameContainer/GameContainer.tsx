"use client"
import { useEffect, useState } from "react"
import "./main.css"
import { ChatInput, MessageBubble } from "@/components"

type Message = {
  message: string
  isPlayers: boolean
  isGuess: boolean
}

const TOTAL_GUESSES = 10
const MIN_RANGE = 0
const MAX_RANGE = 100
const RANGE_GAP = MAX_RANGE - MIN_RANGE
const isInteger = (value: string) => {
  const pattern = /^-?\d+$/
  return pattern.test(value)
}

const countGuesses = (messages: Message[]) => {
  const guesses = messages.filter((obj) => obj.isGuess === true)
  return guesses.length <= TOTAL_GUESSES
}

const countGuessesLeft = (messages: Message[]) => {
  const guesses = messages.filter((obj) => obj.isGuess === true)
  return TOTAL_GUESSES - guesses.length
}

const hasGuessesLeft = (messages: Message[]) => {
  const guesses = messages.filter((obj) => obj.isGuess === true)
  return guesses.length <= TOTAL_GUESSES
}

const generateDiffValue = (firstValue: number, secondValue: number) => {
  console.log(firstValue, secondValue)
  if (secondValue > firstValue) {
    return secondValue - firstValue
  } else {
    return firstValue - secondValue
  }
}

const isGuessHigherThanAnswer = (guess: number, answer: number) => {
  if (guess > answer) {
    return true
  } else {
    return false
  }
}

const getBoilingHotValue = () => {
  return Math.round(0.1 * RANGE_GAP)
}

const getHotValue = () => {
  return Math.round(0.3 * RANGE_GAP)
}

const getWarmValue = () => {
  return Math.round(0.5 * RANGE_GAP)
}

const getColdValue = () => {
  return Math.round(0.7 * RANGE_GAP)
}

const GameContainer = () => {
  const [messages, setMessages] = useState([
    {
      message: `I am thinking of a number between ${MIN_RANGE} and ${MAX_RANGE}. You have ${TOTAL_GUESSES} attempts to get it correct.`,
      isPlayers: false,
      isGuess: false,
    },
    {
      message: "What is your first guess?",
      isPlayers: false,
      isGuess: false,
    },
  ])
  const [answer, setAnswer] = useState(
    Math.floor(Math.random() * (MAX_RANGE - MIN_RANGE + 1)) + MIN_RANGE
  )
  const [userInput, setUserInput] = useState("")

  const handleChangeInput = (value: string) => {
    setUserInput(value)
  }

  useEffect(() => {
    const mostRecentMessage = messages[messages.length - 1]
    const diff = generateDiffValue(Number(mostRecentMessage.message), answer)
    const directionHelpMessage = isGuessHigherThanAnswer(
      Number(mostRecentMessage.message),
      answer
    )
      ? "lower"
      : "higher"
    if (mostRecentMessage.isPlayers && mostRecentMessage.isGuess) {
      if (diff === 0) {
        const newMessage = {
          message: `You are correct! ${userInput} was the number I was thinking of!`,
          isPlayers: false,
          isGuess: false,
        }
        setMessages((prev) => [...prev, newMessage])
      } else if (diff < getBoilingHotValue()) {
        const newMessage = {
          message: `Ooooh! Almost there. You are boiling hot! You have ${countGuessesLeft(
            messages
          )} guesses left. The answer is ${directionHelpMessage} than your guess.`,
          isPlayers: false,
          isGuess: false,
        }
        setMessages((prev) => [...prev, newMessage])
      } else if (diff < getHotValue()) {
        const newMessage = {
          message: `Getting close! You are feeling hot! You have ${countGuessesLeft(
            messages
          )} guesses left. The answer is ${directionHelpMessage} than your guess.`,
          isPlayers: false,
          isGuess: false,
        }
        setMessages((prev) => [...prev, newMessage])
      } else if (diff < getWarmValue()) {
        const newMessage = {
          message: `Getting warmer! You have ${countGuessesLeft(
            messages
          )} guesses left. The answer is ${directionHelpMessage} than your guess.`,
          isPlayers: false,
          isGuess: false,
        }
        setMessages((prev) => [...prev, newMessage])
      } else if (diff < getColdValue()) {
        const newMessage = {
          message: `Brrrr. It's getting cold! You have ${countGuessesLeft(
            messages
          )} guesses left. The answer is ${directionHelpMessage} than your guess.`,
          isPlayers: false,
          isGuess: false,
        }
        setMessages((prev) => [...prev, newMessage])
      } else {
        const newMessage = {
          message: `Better put on a jacket! It's freezing out! You have ${countGuessesLeft(
            messages
          )} guesses left. The answer is ${directionHelpMessage} than your guess.`,
          isPlayers: false,
          isGuess: false,
        }
        setMessages((prev) => [...prev, newMessage])
      }
    }
  }, [messages])

  const handleSubmit = () => {
    console.log("Submitted")
    if (isInteger(userInput) && hasGuessesLeft(messages)) {
      const newMessage = {
        message: userInput,
        isPlayers: true,
        isGuess: true,
      }
      setMessages((prev) => [...prev, newMessage])
      setUserInput("")
    }
  }

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
        <ChatInput
          value={userInput}
          onChange={({ target: { value } }) => handleChangeInput(value)}
          onSubmit={() => handleSubmit()}
        />
      </div>
    </div>
  )
}

export default GameContainer
