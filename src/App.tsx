import { useState } from "react";
import './app.css'
import Portfolio from "./app/components/Portfolio";
import Header from "./app/components/Header";

function App() {
  const [theme, setTheme] = useState('theme-light')
  const changeTheme = () => {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light')
  
  }
  
  return (<>
    <Header changeTheme={changeTheme} theme={theme}/>
    <Portfolio theme={theme}/>  
  </>)
}

export default App;
