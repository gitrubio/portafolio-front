import { useState, useEffect } from "react";
import Portfolio from "./app/components/Portfolio";
import Header from "./app/components/Header";

function App() {
  const [theme, settheme] = useState('theme-light')
  const changeTheme = () => {
    settheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light')
  }
  return (<>
    <Header changeTheme={changeTheme} theme={theme}/>
    <Portfolio theme={theme}/>  
  </>)
}

export default App;
