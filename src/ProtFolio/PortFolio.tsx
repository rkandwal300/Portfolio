import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Archive from './Arc/Archive'
import Error from './Error'
import Footer from './Foter'
import Header from './Header'
import MainFooter from './mainFooter'

const PortFolio = () => {
    return (
    <div className='back  selection:bg-slate-200   selectiom:text-gray-700 overflow-hidden '>
        <Header/>
        <div className=' mt-3  w-full ml-6 flex flex-col  '>
          {/* <Name /> */}
        <Routes >
    
            <Route  index element={  <Footer children = {<MainFooter />} /> } />
            <Route  path='/archive'  element={<Footer children = {<Archive />}  />} />
            {/* <Route  path='/archive'  element={<Footer children = {<Archive />}  />} /> */}

            <Route path='*' element={<Error />} />
        </Routes>
    
        </div>
    
    </div>
    )
}

export default PortFolio