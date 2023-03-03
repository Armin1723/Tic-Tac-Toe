import React from 'react'
import { UilGithub, UilTwitter, UilInstagram } from '@iconscout/react-unicons'

function Footer() {
  return (
      <div className=' min-h-max flex flex-row font-light items-center justify-center gap-5 mt-2 py-2'>
        <a href="https://github.com/Armin1723" target= "blank">
          <UilGithub size={40} className=" transition ease-out hover:scale-125"/>
        </a>
        <a href="https://twitter.com/Robertdrowninjr" target= "blank">
          <UilTwitter size={40} className=" transition ease-out hover:scale-125"/>
        </a>
        <a href="https://www.instagram.com/huffle__pufff/" target= "blank">
          <UilInstagram size={40} className=" transition ease-out hover:scale-125"/>
        </a>
      </div>
  )

}

export default Footer
