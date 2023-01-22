import { useEffect, useState } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './App.css'
import RoutesContainer from './routes/routes'


function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <div>
      <RoutesContainer />
    </div>
  )
}

export default App
