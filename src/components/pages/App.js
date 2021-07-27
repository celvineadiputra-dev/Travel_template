import Home from "./Home"
import Navbar from "../ui/organisms/navbar"
import '../../assets/scss/styles.scss'
import "../../assets/scss/_home.scss"
function App() {
  return (
    <>
      <div className="bg-decore">
        <Navbar/>
        <Home/>
      </div>
    </>
  );
}

export default App;
