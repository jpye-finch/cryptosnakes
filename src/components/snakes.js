import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import snakes from "../data/smartsnakes.js"



export default function Snakes() {
    return (
        <div className="max-w-2xl mx-auto my-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">  
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4">
            {snakes.map((snakes) => (
            <Link 
                to="/snake"
                state={{ snakes }}  
            >
                
               <div key={snakes.id} href={snakes.href} className="group">
            <div class="overflow-hidden shadow-lg rounded-md m-1">
            <div class="bg-white w-full p-4 relative ">
                <h2 className="mb-3 text-center text-md font-bold text-gray-700">{snakes.name}</h2>

                <StaticImage class="rounded-md"
                    src="../images/s-thumb.png"
                    // src={snakes.imageSrc}
                    alt="hello" />
            <div class="mt-4 flex justify-center space-x-2">
            <span class="sm-pill">
            Series {snakes.series}
            </span>
            <span class="sm-pill">
            SmartSnake
            </span>
                {/* <p className="mt-4 text-sm text-gray-900">Series {snakes.series}</p> */}
                </div>
                </div>
                </div>
              </div>
              </Link>
            ))}   
        </div>
      </div>
    )
  }

