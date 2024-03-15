import React from 'react'
import HeaderTitle from './HeaderTitle'
import shape4 from '../../assets/shapes/shapes-18.svg'

function Header() {
  return (
    <div className='right-cut relative overflow-hidden h-80 md:h-96 bg-gradient-to-r from-[#0A588A] to-[#0A2744] '>
        <HeaderTitle />
        <div className='z-0 circuit2 w-20 h-40 absolute top-0 right-0'></div>
        <div className='z-0 circuit3 w-96 h-20 absolute left-[-150px] sm:left-[-50px] top-10'></div>
        <div className='z-0 w-24 lg:w-52 absolute left-10 top-24 lg:top-32'>
          <img src={shape4} alt="" />
        </div>
        <div className="z-[0] bag h-full w-full absolute top-0"></div>
    </div>
  )
}

export default Header