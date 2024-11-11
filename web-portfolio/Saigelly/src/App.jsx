import { Routes, Route, Link } from 'react-router-dom'

import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import HomePage from "./pages/HomePage"
import Portfolio from "./pages/Portfolio.jsx";
import Skills from "./pages/Skills.jsx";
import Contacts from "./pages/Contacts.jsx";





function App() {


  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
