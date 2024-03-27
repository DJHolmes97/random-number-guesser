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
const INITIAL_MESSAGES = [
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
]
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
  console.log("guesses", guesses)
  console.log("hasGuessesLeft", guesses.length < TOTAL_GUESSES)
  return guesses.length < TOTAL_GUESSES
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

const isGuessInsideRange = (guess: number) => {
  if (guess >= MIN_RANGE && guess <= MAX_RANGE) {
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

const getNewRandomNumber = () => {
  return Math.floor(Math.random() * (MAX_RANGE - MIN_RANGE + 1)) + MIN_RANGE
}

const hasUserWon = (messages: Message[], answer: number) => {
  let userHasWon = false
  messages.forEach((message) => {
    if (Number(message.message) === answer) {
      console.log("message", message.message)
      console.log("answer", answer)
      console.log(Number(message.message) === answer)
      userHasWon = true
    }
  })
  return userHasWon
}

const GameContainer = () => {
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [answer, setAnswer] = useState(getNewRandomNumber())
  const [userInput, setUserInput] = useState("")
  const [computerInputLoading, setComputerInputLoading] = useState(false)
  const [status, setStatus] = useState<string | undefined>(undefined)

  const handleChangeInput = (value: string) => {
    setUserInput(value)
  }

  useEffect(() => {
    setTimeout(() => {
      if (computerInputLoading) {
        setComputerInputLoading(false)
      }
    }, 1000)
  }, [computerInputLoading])

  useEffect(() => {
    setComputerInputLoading(true)
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
          message: `You are correct! ${userInput} was the number I was thinking of! Type 'restart' to start a new game.`,
          isPlayers: false,
          isGuess: false,
        }
        setMessages((prev) => [...prev, newMessage])
      } else if (!hasGuessesLeft(messages)) {
        const newMessage = {
          message: `You have run out of guesses! The answer was ${answer}! To start a new game type 'restart'`,
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
    } else if (
      mostRecentMessage.isPlayers &&
      mostRecentMessage.message === "help"
    ) {
      if (hasUserWon(messages, answer)) {
        const newMessage = {
          message: `It seems that you have won the game! Congratulations! Please type 'restart' to start a new game.`,
          isPlayers: false,
          isGuess: false,
        }
        setMessages((prev) => [...prev, newMessage])
      } else if (hasGuessesLeft(messages)) {
        const newMessage = {
          message: `You still have guesses left in this game. If you would like to start a new game type 'restart'.`,
          isPlayers: false,
          isGuess: false,
        }
        setMessages((prev) => [...prev, newMessage])
      } else {
        const newMessage = {
          message: `Unfortunately you have run out of guesses. To start a new game type 'restart'.`,
          isPlayers: false,
          isGuess: false,
        }
        setMessages((prev) => [...prev, newMessage])
      }
    }
  }, [messages])

  const handleSubmit = () => {
    if (!computerInputLoading) {
      if (
        isInteger(userInput) &&
        hasGuessesLeft(messages) &&
        !hasUserWon(messages, answer) &&
        isGuessInsideRange(Number(userInput))
      ) {
        const newMessage = {
          message: userInput,
          isPlayers: true,
          isGuess: true,
        }
        setMessages((prev) => [...prev, newMessage])
        setUserInput("")
        setStatus(undefined)
      } else if (userInput.toLowerCase() === "restart") {
        setUserInput("")
        setMessages(INITIAL_MESSAGES)
        setAnswer(getNewRandomNumber())
        setStatus(undefined)
      } else if (userInput.toLowerCase() === "help") {
        const newMessage = {
          message: userInput,
          isPlayers: true,
          isGuess: false,
        }
        setMessages((prev) => [...prev, newMessage])
        setUserInput("")
        setStatus(undefined)
      } else if (
        isInteger(userInput) &&
        (hasUserWon(messages, answer) || !hasGuessesLeft(messages))
      ) {
        setStatus(
          `The game has ended. You can't make anymore guesses. Type 'restart' to start a new game`
        )
      } else if (
        !isGuessInsideRange(Number(userInput)) &&
        isInteger(userInput)
      ) {
        setStatus(
          `That guess is outside the allowed range. Make a guess between ${MIN_RANGE} and ${MAX_RANGE} to continue.`
        )
      } else {
        setStatus(
          `Command not recognised. Type 'help' for help on how to play the game.`
        )
      }
    }
  }

  return (
    <div className="game-container-wrapper">
      <div className="messages-wrapper">
        {messages.map((message, index) => {
          return (
            <MessageBubble
              key={index}
              message={message.message}
              isPlayers={message.isPlayers}
              isLoading={
                index === messages.length - 1 &&
                !message.isPlayers &&
                computerInputLoading
              }
            />
          )
        })}
      </div>
      <div className="input-wrapper">
        <ChatInput
          value={userInput}
          onChange={({ target: { value } }) => handleChangeInput(value)}
          onSubmit={() => handleSubmit()}
          status={status}
        />
      </div>
    </div>
  )
}

export default GameContainer
