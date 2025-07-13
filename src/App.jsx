import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Swal from 'sweetalert2'
import Players from "./components/Players/Players";


function App() {
  const [credits, setCredits] = useState(0);
  const claimCredit = () => {
    console.log("Button Pressed")
    setCredits(credits + 600000);
    Swal.fire({

      text: 'You are adding coin',
      confirmButtonText: 'ok'
    })
    
  }
  const handleChoosePlayer = (price) => {
    console.log("I am adding this", price)
    setCredits(credits - price)
    if (credits <= 0) {
      Swal.fire({
        text: 'You have not enough coin',
        confirmButtonText: 'ok'
      })
    }
    else{
      Swal.fire({
      text: 'You are adding player',
      confirmButtonText: 'ok'
    })
    }
  }

  return (
    <div className="max-w-7xl mx-auto mt-3">
      <Navbar credits={credits}></Navbar>
      <Banner claimCredit={claimCredit}></Banner>
      <Players handleChoosePlayer={handleChoosePlayer}></Players>
    </div>
  )
}

export default App
