import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"



export const Snake = () => {
  const data = useStaticQuery(graphql`
    query {
      allSmartsnakesJson {
        nodes {
          name
          slug
          img {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="max-w-2xl mx-auto my-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">  
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-1 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4">
   {data.allSmartsnakesJson.nodes.map(snake => (
     <Link 
     to={`/snake/${snake.slug}`}
 >
               <div key={snake.id} className="group">
               <div class="overflow-hidden shadow-lg rounded-md m-1">
               <div class="bg-white w-full p-4 relative ">

                           <div>{snake.name}</div>
          <Img fluid={snake.img.childImageSharp.fluid} />
        </div>
        </div>
        </div>
        </Link>
      ))}
    </div>
    </div>
  )
}