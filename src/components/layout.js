import React from 'react'
import Navbar from './navbar.js';
import FAQ from './faq.js';


const Layout = ({children}) => {
    const linkStyle = `
     Hover:opacity-70
     text-sm
     sm:text-lg
    `
    const logoStyle=`
    text-white 
    font-rammetto
    sm:text-base
    text-sm
    `
    return (
        <div class="sm:mx-4 md:mx-16 lg:mx-16 xl:mx-40">
            <Navbar />

            <main>{children}</main>

            <footer className="text-center py-8">
            <span class="text-lg font-bold">
              cryptosnakes
            </span>            </footer>
        </div>
    )
}

export default Layout