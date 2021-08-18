import React from 'react';
import Layout from '../components/layout.js';
import Header from '../components/header.js';
import FAQ from '../components/faq.js';

import '/Users/jpf/Documents/www/cryptosnakes/src/styles/global.css';
import Hero from '../components/hero.js';


const IndexPage = () => {
  return (
    <main class="bg-secondary">
      <Layout>
        <Header/>
        <Hero/>
        <FAQ/>
      </Layout>
    </main>


  )
}

export default IndexPage
