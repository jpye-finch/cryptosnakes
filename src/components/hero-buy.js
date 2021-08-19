import React from 'react'

 const HeroBuy = () => {
    return (
<div class="h-96 dark:bg-gray-800 ">
    <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h1 class="text-4xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span class="block">
            Get your 
            </span>
            <span class="block text-indigo-500">
            smart contracts on Cardano
            </span>
        </h1>
        <p class="text-xl mt-4 max-w-xl mx-auto text-gray-400">
        Only 12 remaining, get yours now within 5 minutes of payment.</p>
        <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
                <button type="button" class="btn-primary">
                    Buy now
                </button>
            </div>
        </div>
    </div>
</div>

    )
}

 export default HeroBuy