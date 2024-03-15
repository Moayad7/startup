import React from 'react'
import facebook from '../../assets/socialMedia/socialMedia-24.svg'
import twitter from '../../assets/socialMedia/socialMedia-25.svg'
import instagram from '../../assets/socialMedia/socialMedia-26.svg'
import linkedin from '../../assets/socialMedia/socialMedia-27.svg'
import Item from './Item'

function SocialMedia() {
  return (
    <div className='fixed mx-1 lg:mx-4 top-[50%] z-[999]'>
        <ul className='grid gap-3'>
            <Item name={facebook} />
            <Item name={twitter} />
            <Item name={instagram} />
            <Item name={linkedin} />
        </ul>
    </div>
  )
}

export default SocialMedia