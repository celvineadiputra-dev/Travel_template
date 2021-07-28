import React, {useEffect, useState} from "react"
import Home from "./Home"
import '../../assets/scss/styles.scss'
function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000)
  }, [])

  return (
    <>
      {
        isLoading ? <div>LOADING</div> : <Home/>
      }
    </>
  );
}

export default App;
