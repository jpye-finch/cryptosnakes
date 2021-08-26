import React, { useState, useEffect } from 'react';
import "@fontsource/balsamiq-sans"
import Layout from '../components/layout.js';
import Header from '../components/header.js';
import {Snake} from '../components/snake.js';
import FAQ from '../components/faq.js';

import HeroBuy from '../components/hero-buy.js';
import { Link } from "gatsby"
import HeroIntro from '../components/hero-intro.js';


const IndexPage = () => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
      <Layout>
        <Header/>
        <HeroIntro/>
        <Snake/>
        {currentTime}
        <div class="mt-4 flex justify-center">
            <Link to="/collection"><button class="btn-primary">See all snakes</button> </Link>
        </div>
        <FAQ/>
        <HeroBuy/>
      </Layout>
  )
}

export default IndexPage


