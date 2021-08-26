import React, { useState, useEffect } from 'react';

function HeroBuy() {

    const [nftsTotal, nftsTotalData] = useState(0)
    const [nftsFree, nftsFreeData] = useState(0)


    useEffect(() => {
        fetch("https://cors.bridged.cc/https://api.nft-maker.io/GetCounts/d7b3879ed8484606abb6a093bc11cdf4/16716/", 
        { method: "GET",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        })   
        .then( response => response.json() )
        .then(data => {
            nftsTotalData(data.nftsTotal)
          }) 
      }, [])

    useEffect(() => {
        fetch("https://cors.bridged.cc/https://api.nft-maker.io/GetCounts/d7b3879ed8484606abb6a093bc11cdf4/16716/", 
        { method: "GET",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }
        })   
        .then( response => response.json() )
        .then(data => {
            nftsFreeData(data.free)
          }) 
      }, [])
    
    return (
<div>
<p>  
                   {nftsTotal}, 
                   {nftsFree}
               </p>

               </div>
               
    );
}

 export default HeroBuy