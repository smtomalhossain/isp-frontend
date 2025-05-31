import React from 'react'
import { NavbarMenu } from '../../data/data'
import { MdDarkMode } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';



function Header() {
  const [open, setOpen] = React.useState(false);
  return (
   <>
     <nav>
      <div className=" flex justify-between items-center py-4 px-4 bg-sky-500 rounded-b-xl md:rounded-none">
        {/* Logo Section */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          <h3>CodeKori</h3>
        </div>
        {/* Menu Section */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-3 *:text-gray-600'>
            {NavbarMenu.map((item) => {
              return (
                <li key={item.id}>
                <a href={item.link} className='inline-block py-1 px-3 hover:text-purple-900 font-bold'>{item.title}</a>
                </li>
              )
            })}
          </ul>
        </div>
        {/* Icons Section */}
        <div className='flex items-center gap-3'>
        <button className='text-4xl'>
        <MdDarkMode className='bg-white rounded' />
        </button>
        <button type="button" className= "px-4 py-2 rounded-lg bg-blue-600 hover:bg-gray-900 dark:hover:bg-blue-700 text-white shadow-xl text-base">Quick Pay</button>
        </div>
        {/* Mobile Hamburger Menu Section */}
       <div className='md:hidden' onClick={() => setOpen (!open)}>
       <MdMenu className='text-4xl' />
       </div>
      </div>
    </nav>
    {/* Mobile Sidebar Section */}
    <ResponsiveMenu open={open}/>
   </>
    
  )
}

export default Header