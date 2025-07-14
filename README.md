# Random Number Guessing Game 🎯

A modern, interactive number guessing game built with Next.js and React. This portfolio project demonstrates full-stack development skills through a chat-style interface where players attempt to guess a computer-generated number within a limited number of attempts.

## 🎮 Game Overview

The computer thinks of a random number between 0 and 100, and you have 10 attempts to guess it correctly. The game provides helpful feedback using temperature-based hints:

- **🔥 Boiling Hot**: Very close to the answer
- **🌡️ Hot**: Getting close
- **☀️ Warm**: On the right track
- **❄️ Cold**: Getting further away
- **🧊 Freezing**: Very far from the answer

Additionally, the game tells you whether your guess is higher or lower than the target number.

## 🚀 Features

- **Interactive Chat Interface**: Clean, modern chat-style UI for game interactions
- **Real-time Feedback**: Immediate responses with helpful hints
- **Temperature-based Hints**: Intuitive feedback system using hot/cold metaphors
- **Dark/Light Theme Toggle**: User preference for visual comfort
- **Input Validation**: Ensures guesses are within valid range and format
- **Game Commands**: 
  - `help` - Get assistance during gameplay
  - `restart` - Start a new game at any time
- **Responsive Design**: Works seamlessly across desktop and mobile devices
- **Smooth Animations**: Loading indicators and smooth scrolling

## 🛠️ Technologies Used

### Frontend Framework
- **Next.js 14** - React framework with App Router for modern web development
- **React 18** - Component-based UI library with hooks
- **TypeScript** - Type-safe JavaScript for better development experience

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Custom CSS** - Component-specific styling for enhanced design
- **CSS Variables** - Dynamic theming system

### Development Tools
- **ESLint** - Code linting for consistent code quality
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

### Testing
- **Jest** - JavaScript testing framework
- **React Testing Library** - Testing utilities for React components
- **Cypress** - End-to-end testing framework
- **@testing-library/jest-dom** - Custom Jest matchers for DOM testing

### Build Tools
- **SWC** - Fast TypeScript/JavaScript compiler
- **Babel** - JavaScript transpilation with multiple presets

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page component
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── Button/            # Generic button component
│   ├── ChatInput/         # Game input interface
│   ├── Header/            # Application header
│   ├── MessageBubble/     # Chat message display
│   └── ThemeSwitch/       # Dark/light theme toggle
└── containers/
    └── GameContainer/     # Main game logic and state management
```

## 🎯 Key Implementation Details

### Game Logic
- **Smart Feedback System**: Calculates distance from target and provides temperature-based hints
- **State Management**: Uses React hooks for game state, user input, and UI states
- **Input Validation**: Comprehensive validation for user inputs and game commands
- **Auto-scrolling**: Automatically scrolls to latest messages for better UX

### UI/UX Features
- **Loading States**: Visual feedback during computer responses
- **Status Messages**: Clear error and help messages
- **Responsive Chat Interface**: Mobile-friendly design
- **Theme System**: CSS custom properties for seamless theme switching

### Testing Strategy
- **Unit Tests**: Component testing with React Testing Library
- **E2E Tests**: Full game flow testing with Cypress
- **Test Coverage**: Comprehensive testing of game logic and user interactions

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/random-number-guesser.git
   cd random-number-guesser
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

### Run Unit Tests
```bash
npm test
```

### Run E2E Tests
```bash
# Run Cypress tests
npm run e2e

# Run Cypress with UI
npm run e2e:watch
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## 🎮 How to Play

1. **Start the Game**: The computer will think of a number between 0 and 100
2. **Make Your Guess**: Type a number and press Enter or click Send
3. **Follow the Hints**: Use the temperature feedback and direction hints
4. **Win the Game**: Guess the correct number within 10 attempts
5. **Play Again**: Type `restart` to start a new game

### Commands
- **Number (0-100)**: Make a guess
- **`help`**: Get game status and instructions
- **`restart`**: Start a new game

## 🎨 Design Decisions

- **Chat Interface**: Chosen for intuitive, conversational gameplay experience
- **Temperature Metaphors**: Makes feedback more engaging and intuitive
- **Component Architecture**: Modular design for maintainability and reusability
- **TypeScript**: Ensures type safety and better developer experience
- **CSS Custom Properties**: Enables dynamic theming without JavaScript

## 📈 Future Enhancements

- [ ] Difficulty levels (different ranges and attempt limits)
- [ ] Score tracking and leaderboards
- [ ] Multiplayer support
- [ ] Sound effects and animations
- [ ] Game statistics and analytics
- [ ] Progressive Web App (PWA) features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ as a portfolio project demonstrating modern React/Next.js development practices.**