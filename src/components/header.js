import React from 'react'
import FiestaImg from "../images/snake.svg"
import { Link } from "gatsby"


 const Header = () => {
    return (
        <header>
<div class="hero h-5/6 my-8">
  <div class="text-center hero-content">
    <div class="max-w-md">
    <img class="mb-12"src={FiestaImg} alt="A snake" />
<Link to="/buy">
<button class="btn-primary">Buy now</button> 
</Link>
    </div>
  </div>
</div>

        </header>
    )
}

 export default Header
