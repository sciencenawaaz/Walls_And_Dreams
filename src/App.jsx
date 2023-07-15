
import {BrowserRouter, Route,Routes } from "react-router-dom";
import  {HomePage ,About ,Contact ,Projects }  from "./pages";




function App() {

    return (
    <BrowserRouter>
    <Routes>
        <Route path = "/" element= { <HomePage/> }  />
        <Route path = "/about" element= { <About/> }  />
        <Route path = "/projects" element = {<Projects/>  } />
        <Route path = "/contact" element = { <Contact /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
