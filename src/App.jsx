
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home/Home'

function App() {

  return (
    <>
      <div >

        <Navbar></Navbar>
        <Home></Home>
        <div className='w-11/12 mx-auto'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
