import React from 'react'
import Navbar from './navbar.js';
import Footer from './footer.js';



const Layout = ({children}) => {
    return (
        <main>
        <div class="sm:mx-4 md:mx-16 lg:mx-16 xl:mx-40">
            <Navbar />

            <main>{children}</main>

            <Footer />
        </div>
        </main>
    )
}

export default Layout