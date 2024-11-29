import { ThemeProvider, ThemeContext } from "./Context/ThemeContext"
import { useContext } from "react"

function AppTheme() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export function Home() {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
  return (
    <div style={{background: isDarkMode ? 'black' : 'white'}}>
        <button onClick={toggleTheme}>Cambiar Tema</button>
        <h1>{isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}</h1>
        <ThemeToggler />    

    </div>
  )
}

const ThemeToggler = () => {
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    return <button onClick={toggleTheme}>{isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}</button>
}

export default AppTheme