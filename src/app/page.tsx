import { Header } from "@/components"
import GameContainer from "@/containers/GameContainer/GameContainer"

export default function Home() {
  return (
    <main className="flex flex-grow flex-shrink-0 h-full flex-col items-center md:px-24 px-2">
      <Header />
      <GameContainer />
    </main>
  )
}
