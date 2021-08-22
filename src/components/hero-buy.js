import React, { useState, useEffect } from 'react';

function HeroBuy() {
    const [totalReactPackages, setTotalReactPackages] = useState(null);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://api.nft-maker.io/GetCounts/d7b3879ed8484606abb6a093bc11cdf4/16716')
            .then(response => response.json())
            .then(data => setTotalReactPackages(data.nftTotal));
            console.log({setTotalReactPackages})
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    return (
        <div className="card text-center m-3">
            <h5 className="card-header">GET Request with React Hooks</h5>
            <div className="card-body">
                Total react packages: {totalReactPackages}
            </div>
        </div>
    );
}
 export default HeroBuy