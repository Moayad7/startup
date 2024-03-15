import React from 'react'
import Button from '../button/Button'


function HeaderTitle() {
  return (
    <div className='relative grid place-items-center gab-1 sm:gap-4 z-10 pt-40'>
        <h1 className='text-xl md:text-6xl font-[pnu-medium] text-[#fff]'>عنوان القسم الرئيسي</h1>
        <h2 className='has-gradient text md:text-3xl font-[pnu-medium] text-[#6DCCDE]'> عنوان فرعي للقسم الأساسي في الصفحة الرئيسية</h2>
        <div className='flex gap-x-4 z-20'>
            <Button name="المزيد" url="#"/>
            <Button name="المزيد" url="#"/>
        </div>
        <div className='z-0 circuit11 w-20 h-20 lg:w-32 lg:h-32 absolute bottom-[-100px] lg:bottom-[-130px] right-8 lg:right-20 '></div>
        <div className='z-0 circuit1 w-20 h-20 lg:w-32 lg:h-32 absolute bottom-[-100px] lg:bottom-[-130px] right-8 lg:right-20 '></div>

    </div>
  )
}

export default HeaderTitle