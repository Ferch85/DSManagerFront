import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Main = () => {
  return (    
    <>
        {/*Header*/}
        <Header />
        <main className="container mx-auto mt-5">
                    <Outlet />
        </main> 
        <Footer />
        {/*Footer*/}
    </>
    
  )
}

export default Main