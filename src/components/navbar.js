import React from 'react';

class Navbar extends React.Component {
  render() {
    return <div class="navbar py-8 mx-auto text-neutral-content">
    <div class="flex-1 mx-2">
      <span class="text-lg font-bold">
              cryptosnakes
            </span>
    </div> 
    <div class="flex-none hidden mx-2 lg:flex">
      <div class="flex items-stretch">
      <a class="btn btn-ghost btn-sm rounded-btn capitalize">
                Collection  
        </a> 
        <a class="btn btn-ghost btn-sm rounded-btn capitalize">
                About  
        </a> 
        <a class="btn btn-ghost btn-sm rounded-btn capitalize">
                Validation  
        </a> 
      </div>
    </div> 



  </div>;
  }
}

export default Navbar

