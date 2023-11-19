
import './App.css'
import Agent from './components/Agent'
import Feature from './components/Feature'
import Footer from './components/Footer'
import GrowBigger from './components/GrowBigger'
import Header from './components/Header'
import Manage from './components/Manage'
import Works from './components/Works'

function App() {
  

  return (
    <>
     <div className='bg-feature' style={{width: '100%', overflow: 'hidden'}}>
      <Header />
      <Feature />
      <GrowBigger />
      <Works />
      <Agent />
      <Manage />
      <Footer />
     </div>
    </>
  )
}

export default App
