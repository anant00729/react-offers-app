import React from 'react'
import appLogo from '../../app_images/app-logo.png'

export const AppBar = () => {
  return (
    <>
      <section className="fixed top-bar w-full shadow-md h-14 top-bar-bg">
        <div className="w-48 h-full flex items-center">
            <img 
            className="object-cover w-8 h-8 ml-4 mt-1 shadow-lg rounded-full"
            src={appLogo}
            alt="app_logo"/>
            <p className="ml-4 text-white text-lg text-bold">Dashboard</p>
        </div>
      </section>      
    </>
  )
}
