import { BeakerIcon, CollectionIcon } from '@heroicons/react/outline';
import React from 'react';
import Img1 from '../assets/whatisboredbunny/img3.png';
import Img2 from '../assets/whatisboredbunny/img4.png';
import Img3 from '../assets/whatisboredbunny/mg5.png';
import DiscordLogo from '../assets/whatisboredbunny/discord-mascot.png';

const WhatIsBoredBunny = () => {
  return (
    <section id='whatisboredbunny' className="bg-gradient-to-r from-black via-zinc-900 to-zinc-900 overflow-hidden">
      <div className="container py-24 grid grid-cols-1 lg:grid-cols-2 gap-10">

        <div className="relative flex items-center justify-center z-0 opacity-75 lg:opacity-100">
          <img src={Img1} alt="" className='absolute w-60 h-60 object-cover rounded-full left-0 top-0 animate-spin-slow' />
          <img src={Img2} alt="" className='absolute w-60 h-60 object-cover rounded-full animate-spin-slow delay-100' />
          <img src={Img3} alt="" className='absolute w-60 h-60 object-cover rounded-full right-0 bottom-0 animate-spin-slow delay-500' />
        </div>

        <div className="relative z-999">
          <h2 className=" text-neutral-50 text-6xl font-semibold">What's Bored Bunny?</h2>
          
          <div className="flex flex-col text-xl text-neutral-200 gap-5 mt-7">
            <div className="flex items-start gap-2">
              <CollectionIcon className='h-[2.5em]' />
              <p>Bored Bunny is a collection of 4,999 unique 3D well-designed Bunnies united together to get on the Ethereum Blockchain</p>
            </div>
            <div className="flex items-start gap-2">
              <BeakerIcon className='h-[2.5em]' />
              <p>Each Bored Bunny is unique and exclusive based on a hundred traits.
The objective is to build the strongest community and project around NFTs.</p>
            </div>
          </div>

          <p className='text-neutral-200 font-semibold mt-7 mb-2'>
            Entering into the Bored Bunny Community means joining a family full of investors and nft enthusiasts who believe in the future of Cryptocurrencies and the blockchain technology.
          </p>
          <button className=' border-2 border-neutral-50 px-7 py-3 rounded-full text-base font-semibold hover:text-neutral-50 hover:bg-transparent bg-neutral-50 text-zinc-800'>
            Join our Discord
            <img src={DiscordLogo} alt="" className='h-5 aspect-square inline-block ml-3' />
          </button>
        </div>

      </div>
    </section>
  );
}

export default WhatIsBoredBunny;
