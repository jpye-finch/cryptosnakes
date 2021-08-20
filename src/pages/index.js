import React from 'react';
import Layout from '../components/layout.js';
import Header from '../components/header.js';
import {Snake}from '../components/snake.js';
import FAQ from '../components/faq.js';
import HeroBuy from '../components/hero-buy.js';
import { Link } from "gatsby"
import '../styles/global.css';
import HeroIntro from '../components/hero-intro.js';


const IndexPage = () => {
  return (
      <Layout>
        <Header/>
        <HeroIntro/>
        <Snake/>
        <div class="mt-4 flex justify-center">
            <Link to="/collection"><button class="btn-primary">See all snakes</button> </Link>
        </div>
        <FAQ/>
        <HeroBuy/>
      </Layout>
  )
}

export default IndexPage
