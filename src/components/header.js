import React from 'react'
import FiestaImg from "../images/snake.svg"

 const Header = () => {
    return (
        <header>
<div class="hero h-5/6">
  <div class="text-center hero-content">
    <div class="max-w-md">
    <img src={FiestaImg} alt="A snake" />

      <button class="btn btn-primary none my-16">Buy now</button>
    </div>
  </div>
</div>

        </header>
    )
}

 export default Header
