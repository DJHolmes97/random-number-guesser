import GameContainer from "@/containers/GameContainer/GameContainer"
import { useEffect, useState } from "react"

export default function Home() {
  return (
    <main className="flex flex-grow flex-shrink-0 flex-col items-center md:p-24 p-2">
      <GameContainer />
    </main>
  )
}
