import "./App.css"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Promise from "./components/Promise"
import Gallery from "./components/Gallery"
import Testimonials from "./components/Testimonials"
import LoyaltyProgram from "./components/LoyaltyProgram"
import Contact from "./components/Contact"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Menu />
        <Promise />
        <Gallery />
        <Testimonials />
        <LoyaltyProgram />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App

