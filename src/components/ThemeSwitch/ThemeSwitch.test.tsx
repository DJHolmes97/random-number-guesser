import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import ThemeSwitch from "./ThemeSwitch"

describe("ThemeSwitch Component", () => {
  test("renders without crashing", () => {
    render(<ThemeSwitch isDarkMode={false} onSwitchMode={() => {}} />)
    expect(screen.getByRole("checkbox")).toBeInTheDocument()
  })

  test("renders correct default state", () => {
    const { rerender } = render(
      <ThemeSwitch isDarkMode={false} onSwitchMode={() => {}} />
    )
    expect(screen.getByRole("checkbox")).not.toBeChecked()

    rerender(<ThemeSwitch isDarkMode={true} onSwitchMode={() => {}} />)
    expect(screen.getByRole("checkbox")).toBeChecked()
  })

  test("calls onSwitchMode with correct argument when toggled", () => {
    const mockOnSwitchMode = jest.fn()
    render(<ThemeSwitch isDarkMode={false} onSwitchMode={mockOnSwitchMode} />)

    fireEvent.click(screen.getByRole("checkbox"))
    expect(mockOnSwitchMode).toHaveBeenCalledWith(true)
  })

  test("displays correct SVG based on isDarkMode", () => {
    const { rerender } = render(
      <ThemeSwitch isDarkMode={true} onSwitchMode={() => {}} />
    )
    expect(screen.getByTestId("moon-svg")).toBeInTheDocument()

    rerender(<ThemeSwitch isDarkMode={false} onSwitchMode={() => {}} />)
    expect(screen.getByTestId("sun-svg")).toBeInTheDocument()
  })
})
