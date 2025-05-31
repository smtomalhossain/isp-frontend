import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavbarMenu } from '../../data/data'

function ResponsiveMenu({ open }) {
  return <AnimatePresence>
    {
      open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className='absolute top-14 left-0 w-full h-screen z-20'
        >
          <div>
            <ul className='flex flex-col justify-center items-center gap-6 text-xl font-semibold uppercase bg-sky-800 text-white py-10 m-6 rounded-3xl '>
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id} className='hover:bg-white text-black'  >
                    <a href={item.link} >{item.title}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        </motion.div>
      )
    }
  </AnimatePresence>
}

export default ResponsiveMenu