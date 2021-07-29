import React, {useEffect, useState} from "react"
import Home from "./Home"
import '../../assets/scss/styles.scss'

import TravelLoading from "../../assets/icon/travel_loading.gif"

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  return (
    <>
      {
        isLoading ? <div className="loadingScreen">
          <img src={TravelLoading} alt="loading"/>
        </div> : <Home/>
      }
    </>
  );
}

export default App;
