import clsx from "clsx"
import "./main.css"

type ButtonProps = {
  label?: string
  children?: string
  variant?: "primary" | "secondary"
}

const Button = ({ label, children, variant = "primary" }: ButtonProps) => {
  if (!label && !children) {
    throw new Error("Button must have a label or children")
  }

  return (
    <button
      className={clsx("button-component", `button-component--${variant}`)}
    >
      {label || children}
    </button>
  )
}

export default Button
