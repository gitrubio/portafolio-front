import { useState, useEffect } from "react";
import Portfolio from "./app/components/Portfolio";
import Header from "./app/components/Header";

function App() {
  const [theme, setTheme] = useState('theme-light')
  const [count, setCount] = useState(1)
  
  const changeTheme = () => {
    setTheme(theme === 'theme-light' ? 'theme-dark' : 'theme-light')
    setCount(count + 1)
  }
  
  return (<>
    <Header changeTheme={changeTheme} theme={theme}/>
    <Portfolio key={count} theme={theme}/>  
  </>)
}

export default App;
