import { Follow } from "./content/Follow"
import { Footer } from "./content/Footer"
import { Header } from "./content/Header"
import {Health} from "./content/Health"
import { Home } from "./content/Home"
import { Join } from "./content/Join"
import { List } from "./content/List"
import { Routine } from "./content/Routine"


function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
      <List/>
      <Health/>
      <Routine/>
      <Follow/>
      <Join/>
      <Footer/>

      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  )
}

export default App
