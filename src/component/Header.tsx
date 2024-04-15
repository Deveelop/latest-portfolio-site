import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
  setIsMenu((prev) => !prev)
  }
  return (
    <header className=' relative'>
      <div  className=' flex justify-between p-20 items-center'>
      <a  href="#" className=' text-[#ccf381] text-2xl' >dvee</a>
      <span onClick={handleMenu}  className=" text-[#4831d4] cursor-pointer">{ !isMenu ? <FaBars/> : <FaTimes/>}</span>
      </div>
      { isMenu && <nav className=' absolute bg-white right-0 mr-20 -mt-20'>
       <div className='  space-y-10 py-20 px-10'>
        <ul className=' text-[#4831d4] space-y-2'>
          <li className=' hover:bg-[#ccf381] rounded-sm px-2 '>My Work</li>
          <li className=' hover:bg-[#ccf381] rounded-sm px-2 '>My Resume</li>
        </ul>
        <div className='px-2'>
          <span className=' text-[#cbc9e2] tracking-wider'>SAY HELLO</span>
        </div>
        <ul className=' text-[#4831d4] space-y-2'>
          <li className='px-2 hover:bg-[#ccf381] rounded-sm'>vicsonabuka@gmail.com</li>
          <li className='px-2 hover:bg-[#ccf381] rounded-sm'>+234 806 503 2361</li>
        </ul>
        <div className='social media accounts'>
          <ul className=' flex space-x-4'>
          <li className=' bg-[#4831d4] rounded-sm text-white p-2 cursor-pointer'>TW</li>
          <li className=' bg-[#000000] rounded-sm text-white p-2 cursor-pointer'>GH</li>
          <li className=' bg-[#0000FF] rounded-sm text-white p-2 cursor-pointer'>LN</li>
          <li className=' bg-[#FF0000] rounded-sm text-white p-2 cursor-pointer'>YT</li>
          </ul>
        </div>
       </div>
      </nav>}
     
    </header>
  )
}

export default Header
