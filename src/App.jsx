import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience , Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from "./components"
function App() {
  

  return (
   <BrowserRouter>
   <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat">
          <Navbar />
          <Hero/>

        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Contact/>
        <div className="relative z-0">
            
            
        </div>
   </div>
   </BrowserRouter>
  )
}

export default App
