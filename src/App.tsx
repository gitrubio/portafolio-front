import { useState } from "react";
import './app.css'
import Portfolio from "./app/components/Portfolio";
import Header from "./app/components/Header";
import { THEME } from "./app/constants/constants";

function App() {
  const [theme, setTheme] = useState(THEME.LIGHT)
  const changeTheme = () => {
    setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)
  
  }
  
  return (<>
    <Header changeTheme={changeTheme} theme={theme}/>
    <Portfolio theme={theme}/>  
  </>)
}

export default App;
