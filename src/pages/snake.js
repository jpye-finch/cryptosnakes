import React from 'react';
import Layout from '../components/layout.js';
import { StaticImage } from 'gatsby-plugin-image'


const SnakePage = () => {
    return (
        <Layout>
        <div class="dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
                 <div class="container mx-auto px-6 flex relative py-16">
              <div class="sm:w-2/3 lg:w-3/6 flex flex-col relative z-20">
               <p class="mb-2 text-sm sm:text-base text-gray-700 dark:text-white">
            SmartSnake  
             </p>
            <h1 class="normal-case text-4xl sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Name of snake
            </h1>
        </div>
        <div class="sm:block sm:w-1/3 lg:w-3/6 relative">
            <StaticImage src="../images/s-thumb.png" alt="hello" class="w-full flex justify-center m-auto"/>
        </div>
    </div>
</div>

        </Layout>  
    )
  }
  
  export default SnakePage