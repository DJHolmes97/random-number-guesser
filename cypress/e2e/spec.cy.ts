describe("The home page", () => {
  it("succesfully loads", () => {
    cy.visit("/")
  })
})

const recursiveWinningGuessFunction = (minRange: number, maxRange: number) => {
  let guess = minRange + Math.round((maxRange - minRange) / 2)
  cy.wait(1000)
  cy.get('input[data-testid="chat-input"]').type(String(guess))
  cy.get('button[data-testid="chat-input-button"]')
    .trigger("mouseover")
    .trigger("click")

  cy.wait(2000)

  cy.get('div[data-testid="computer-message"]')
    .last()
    .invoke("text")
    .then((text) => {
      // Normalize text to handle different capitalizations
      const normalizedText = text.toLowerCase()

      // Check if the text includes either of the expected messages
      if (normalizedText.includes("you are correct!")) {
        // If the message is as expected, then the test implicitly passes.
        // Log a message for clarity in test output.
        cy.log("Game won! " + text)
      } else if (normalizedText.includes("you have run out of guesses.")) {
        throw new Error("Unexpected game loss!")
      } else {
        if (normalizedText.includes("higher")) {
          recursiveWinningGuessFunction(guess, maxRange)
        } else {
          if (minRange === 0 && guess === 1) {
            recursiveWinningGuessFunction(minRange, minRange)
          }
          recursiveWinningGuessFunction(minRange, guess)
        }
      }
    })
}

const recursiveLosingGuessFunction = (guess: number) => {
  cy.wait(1000)
  cy.get('input[data-testid="chat-input"]').type(String(guess))
  cy.get('button[data-testid="chat-input-button"]')
    .trigger("mouseover")
    .trigger("click")

  cy.wait(2000)

  cy.get('div[data-testid="computer-message"]')
    .last()
    .invoke("text")
    .then((text) => {
      // Normalize text to handle different capitalizations
      const normalizedText = text.toLowerCase()

      // Check if the text includes either of the expected messages
      if (normalizedText.includes("you are correct!")) {
        cy.get('input[data-testid="chat-input"]').type("restart")
        cy.get('button[data-testid="chat-input-button"]')
          .trigger("mouseover")
          .trigger("click")

        cy.wait(2000)
        recursiveLosingGuessFunction(guess)
      } else if (normalizedText.includes("you have run out of guesses")) {
        cy.log("Successfully ran out of guesses!")
      } else {
        if (normalizedText.includes("higher")) {
          recursiveLosingGuessFunction(guess - 1)
        } else {
          recursiveLosingGuessFunction(guess + 1)
        }
      }
    })
}

describe("Game actions", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.reload()
    cy.wait(1000)
    cy.get('input[data-testid="chat-input"]').type(String(50))
    cy.get('button[data-testid="chat-input-button"]')
      .trigger("mouseover")
      .trigger("click")

    cy.wait(2000)
  })
  it("lets user make a guess", () => {
    // Check the computer's response message for specific text
    cy.get('div[data-testid="computer-message"]')
      .last()
      .invoke("text")
      .then((text) => {
        // Normalize text to handle different capitalizations
        const normalizedText = text.toLowerCase()

        // Check if the text includes either of the expected messages
        if (
          normalizedText.includes("you are correct!") ||
          normalizedText.includes("the answer is higher") ||
          normalizedText.includes("the answer is lower")
        ) {
          // If the message is as expected, then the test implicitly passes.
          // Log a message for clarity in test output.
          cy.log("Received expected response: " + text)
        } else {
          // If none of the expected messages are found, force the test to fail.
          throw new Error("Unexpected response message: " + text)
        }
      })
  })
  it("lets user restart", () => {
    cy.get('input[data-testid="chat-input"]').type("restart")
    cy.get('button[data-testid="chat-input-button"]')
      .trigger("mouseover")
      .trigger("click")
    // Check the computer's response message for specific text
    cy.get('div[data-testid="computer-message"]')
      .last()
      .invoke("text")
      .then((text) => {
        // Normalize text to handle different capitalizations
        const normalizedText = text.toLowerCase()

        // Check if the text includes either of the expected messages
        if (normalizedText.includes("what is your first guess?")) {
          // If the message is as expected, then the test implicitly passes.
          // Log a message for clarity in test output.
          cy.log("Received expected response: " + text)
        } else {
          // If none of the expected messages are found, force the test to fail.
          throw new Error("Unexpected response message: " + text)
        }
      })
  })
  it("handles users inputting outside range", () => {
    cy.get('input[data-testid="chat-input"]').type("999")
    cy.get('button[data-testid="chat-input-button"]')
      .trigger("mouseover")
      .trigger("click")
    // Check the computer's response message for specific text
    cy.get('div[data-testid="chat-input-status"]')
      .invoke("text")
      .then((text) => {
        // Normalize text to handle different capitalizations
        const normalizedText = text.toLowerCase()

        // Check if the text includes either of the expected messages
        if (
          normalizedText.includes(
            "that guess is outside the allowed range. make a guess between 0 and 100 to continue."
          )
        ) {
          // If the message is as expected, then the test implicitly passes.
          // Log a message for clarity in test output.
          cy.log("Received expected response: " + text)
        } else {
          // If none of the expected messages are found, force the test to fail.
          throw new Error("Unexpected response message: " + text)
        }
      })
  })
})

describe("Full gameplay", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.reload()
    cy.wait(1000)
  })
  it("Game winning example", () => {
    recursiveWinningGuessFunction(0, 100)
  })
  it("Game losing example", () => {
    recursiveLosingGuessFunction(50)
  })
})
