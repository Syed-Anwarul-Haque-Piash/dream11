import { useState } from "react"
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Swal from 'sweetalert2'


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

  return (
    <div className="max-w-7xl mx-auto mt-3">
      <Navbar credits={credits}></Navbar>
      <Banner claimCredit={claimCredit}></Banner>
    </div>
  )
}

export default App
