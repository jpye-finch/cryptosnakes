import React from 'react';
import Layout from '../components/layout.js';
import { graphql } from 'gatsby'
import Img from "gatsby-image"

export const query = graphql`
query ($slug: String!) {
    smartsnakesJson(slug: {eq: $slug}) {
      name
      series
      img {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alt
    }
  }

`


const SnakePage = ({ data }) => {
  const snake = data.smartsnakesJson;
    return (
        <Layout>
          <div class="relative dark:bg-gray-800 p-16">
              <div class="md:grid md:grid-flow-row-dense md:grid-cols-2 md:gap-8 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12">
                <div class="lg:col-start-2 md:col-start-2 md:pl-20">
               <h4 class="text-2xl leading-8 font-extrabold text-gray-900 dark:text-white tracking-tight sm:leading-9">
               {snake.name}   
            </h4>
            <p>{snake.series}</p>
            </div>

        <div class="mt-10 -mx-4 md:-mx-12 relative lg:mt-0 lg:col-start-1 md:mt-0 md:col-start-1 ">
        <Img
                fluid={snake.img.childImageSharp.fluid}
                alt={snake.alt}
                />        </div>
    </div>
</div>
        </Layout>  
    )
  }

  export default SnakePage

