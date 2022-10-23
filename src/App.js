import logo from './logo.svg';
import './App.css';
import useAnimation from "./useAnimation"
import { useEffect } from "react"

function App() {
  const { Animation: F, animation, startFadeIn, startFadeOut } = useAnimation()
  
  useEffect(() => {
    let i, j

    i = setTimeout(() => {
        startFadeIn()
    }, 3000)

    return () => {
        clearTimeout(i)
    }
  }, []) 

  return (
    <pre>
    <F anim={animation}>
    <div>
      hello
    </div>
    </F >
    <button onClick={startFadeOut}>Fade</button>
    </pre>
  );
}

export default App;
