import { useState, useEffect } from "react"
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"
import Footer from "./components/Footer"


function App() {

  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  function handleThemeSwitch () {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
    <Nav theme={theme} handleThemeSwitch={handleThemeSwitch}/>
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default App
