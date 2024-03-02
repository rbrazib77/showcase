import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../../component/header'
import Footer from '../../component/footer'
import Menubar from'../../component/menubar'
import Contact from '../../component/contact'
const index = () => {
  return (
    <>
    <Header/>
    <Menubar/>
    <Outlet/>
    <Contact />
    <Footer/>
    </>
  )
}

export default index