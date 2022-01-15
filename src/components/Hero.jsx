import React from 'react'
import OneB from '../assets/oneb.png'
import TwoB from '../assets/twob.png'
import ThreeB from '../assets/threeb.png'
import FourB from '../assets/fourb.png'
import { CubeTransparentIcon } from '@heroicons/react/outline'

export default function Hero() {
    return (
        <div className="hero">
            <div className="container grid grid-cols-1 lg:grid-cols-2 py-10 md:py-16 lg:py-24">
            
                <div className="mb-5 sm:mb-0 px-2 sm:px-0">
                    <h1 className=" text-4xl md:text-6xl lg:text-8xl font-bold">
                        <CubeTransparentIcon className='h-[.5em] inline-block' />
                        Welcome to Bored Bunny
                    </h1>
                    <p className=" text-base md:text-lg lg:text-xl mt-8 mb-9 text-zinc-600">
                        Bored Bunny is a collection of 4999 unique 3D well-designed Bunnies - Sold out in 17 minutes. Floyd Mayweather, DJ Khaled, David Dobrik, Umar Kamani, Chantel Jeffries and many more celebrities have already joined the project.
                    </p>
                    <a href='https://opensea.io/collection/bored-bunny--nft' className="px-7 py-3 rounded-full text-base font-medium text-neutral-50 bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse">
                        Buy on OpenSea
                    </a>
                </div>

                <div className="relative grid grid-cols-2 gap-3 items-center">
                    <img src={OneB} alt="" className="rounded-md w-3/12 self-end justify-self-end" />
                    <img src={TwoB} alt="" className="rounded-md w-6/12 shadow-xl" />
                    <img src={ThreeB} alt="" className="rounded-md w-4/5 shadow-xl justify-self-end" />
                    <img src={FourB} alt="" className="rounded-md w-4/12 self-start"/>
                </div>

            </div>
        </div>
    )
}
