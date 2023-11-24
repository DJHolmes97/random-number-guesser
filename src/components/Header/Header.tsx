import { ThemeSwitch } from ".."
import "./main.css"

const Header = () => {
  return (
    <header className="header-component">
      <div className="header-component__wrapper">
        <h3 className="header-component__header">
          Random Number Guessing Game
        </h3>
        <ThemeSwitch />
      </div>
    </header>
  )
}

export default Header
