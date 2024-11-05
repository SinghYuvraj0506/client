import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const ParentLayout = () => {
  return (
<div className="w-full relative bg-white">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default ParentLayout