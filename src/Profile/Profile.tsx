import React from 'react'
import { Information } from './Information'
import Photo from './Photo'

const Profile = () => {
  return (
    <div className=' flex h-fit w-full md:justify-between flex-col md:flex-row '>

        <div className=' flex flex-col  h-screen md:w-1/2 w-full  bg-contain  ' > <Photo /> </div>

        <div className = ' flex flex-col  h-screen md:w-1/2 w-full  bg-contain bg-white  overflow-scroll  p-[40px]  '  > <Information  /> </div>
    </div>
  )
}

export default Profile