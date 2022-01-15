import React from 'react';
import DiscordLogo from '../assets/whatisboredbunny/discord-mascot.png';

import { BsInstagram, BsDiscord, BsTwitter } from 'react-icons/bs';
import OpenSeaLogo from '../assets/footer/opensea.png';
import { Fade } from 'react-reveal';

const Footer = () => {
  return (
    <div className=''>
      <div className='border-t-8 border-dashed -skew-x-12' />
      <Fade bottom>
      <div className="container grid grid-cols-1 md:grid-cols-2 py-20 gap-4">

        <div className="flex flex-col gap-7">
          <div className="">
            <h2 className='text-6xl font-semibold mb-2'>Join Bored Bunny</h2>
            <p>Become a member of the strongest and fast growing NFTs community.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href='/' className="px-3 md:px-7 py-3 rounded-full text-base font-medium text-neutral-50 bg-gradient-to-r from-cyan-500 to-blue-500 hover:animate-pulse">
                Buy on OpenSea
            </a>
            <a href='/' className=' border border-zinc-800 px-3 md:px-7 py-2 rounded-full text-base font-semibold hover:text-neutral-50 hover:bg-zinc-800 bg-neutral-50 text-zinc-800'>
              Join our Discord
              <img src={DiscordLogo} alt="" className='h-5 aspect-square inline-block ml-3' />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <ul className="flex items-center gap-3 mb-3">
            <li className='border p-3 rounded-full h-12 w-12 overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-200'><a href="https://twitter.com/BoredBunnyNFT"><BsTwitter className='text-2xl' /></a></li>
            <li className='border p-3 rounded-full h-12 w-12 overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-200'><a href="https://discord.com/invite/boredbunny"><BsDiscord className='text-2xl' /></a></li>
            <li className='border p-1 rounded-full h-12 w-12 overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-200'><a href="https://opensea.io/collection/bored-bunny--nft"><img src={OpenSeaLogo} alt="" className=' h-10 grayscale object-cover' /></a></li>
            <li className='border p-3 rounded-full h-12 w-12 overflow-hidden flex items-center justify-center hover:scale-110 transition-all duration-200'><a href="https://www.instagram.com/boredbunnynft/"><BsInstagram className='text-2xl' /></a></li>
          </ul>
          <div className="flex items-center gap-3">
            <a href="/" className='underline medium'>Privacy Policy</a>
            <a href="/" className='underline medium'>Terms & Conditions</a>
          </div>
          <p className='text-sm font-semibold mt-auto text-zinc-400'>© 2021 BORED BUNNY. ALL RIGHTS RESERVED</p>
        </div>

      </div>
      </Fade>
    </div>
  );
}

export default Footer;
