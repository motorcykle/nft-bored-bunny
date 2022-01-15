import React from 'react';
import Ape from '../assets/roadmap/ape.png'
import Planet from '../assets/roadmap/planet.png'

const Roadmap = () => {
  return (
    <>
    <section className="bg-gradient-to-r from-black via-zinc-900 to-zinc-900 relative">
      <div className="container py-24 relative z-50">
        <div className="border-b pb-5 text-neutral-50">
          <h2 className='text-6xl font-semibold'>Roadmap</h2>
          <small className='font-semibold'>Our plans moving forward into 2022.</small>
        </div>

        <div className="steps text-neutral-100 py-10 flex flex-col gap-20">

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 -skew-y-2">
            <p className='md:order-2 text-4xl h-24 w-24 rounded-full bg-neutral-50 text-zinc-900 flex items-center justify-center font-thin'>20%</p>
            <div className="md:border-r-2 pr-3 pl-1 py-3 rounded-3xl min-h-[150px] flex flex-col items-center justify-center">
              <h3 className='text-3xl mb-2'>#1 First Part</h3>
              <p className=' leading-7 text-lg text-neutral-300'>To us, the community comes first. The main goal is to make sure your investment and our mint are as successful as possible, to achieve all of our goals. We will also constantly work to release the best value and quality possible. We will announce our drop release date once we are satisfied with the project’s quality and technical parts.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 skew-y-2">
            <p className='md:justify-self-end text-4xl h-24 w-24 rounded-full bg-neutral-50 text-zinc-900 flex items-center justify-center font-thin'>40%</p>
            <div className="md:border-l-2 pl-3 pr-1 py-3 rounded-3xl min-h-[150px] flex flex-col items-center justify-center">
              <h3 className='text-3xl mb-2'>#2 Launch of our Merch & Exclusive Event</h3>
              <p className=' leading-7 text-lg text-neutral-300'>We will release our first merch collection of Bored Bunny that will be available only for the holder. To celebrate the achievement of our goals, we are to organize a party for our holders, the community choose the location</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 -skew-y-2">
            <p className='md:order-2 text-4xl h-24 w-24 rounded-full bg-neutral-50 text-zinc-900 flex items-center justify-center font-thin '>60%</p>
            <div className="md:border-r-2 pr-3 pl-1 py-3 rounded-3xl min-h-[150px] flex flex-col items-center justify-center">
              <h3 className='text-3xl mb-2'>#3 Funding Time & Breeding Unlock</h3>
              <p className=' leading-7 text-lg text-neutral-300'>We are committed to support, invest, reward, and collaborate with the best projects in the space and projects ideas of our members. You'll need a total of 2 Bored Bunny to breed your Bored Bunny, to get a 2nd Generation Bored Bunny.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 skew-y-2">
            <p className='md:justify-self-end text-4xl h-24 w-24 rounded-full bg-neutral-50 text-zinc-900 flex items-center justify-center font-thin'>80%</p>
            <div className="md:border-l-2 pl-3 pr-1 py-3 rounded-3xl min-h-[150px] flex flex-col items-center justify-center">
              <h3 className='text-3xl mb-2'>#4 Bored Bunny City</h3>
              <p className=' leading-7 text-lg text-neutral-300'>We are planning to buy some land for our Community The Bored Bunny community will have access to private events in the Metaverse.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 -skew-y-2">
            <p className='md:order-2 text-4xl h-24 w-24 rounded-full bg-neutral-50 text-zinc-900 flex items-center justify-center font-thin'>100%</p>
            <div className="md:border-r-2 pr-3 pl-1 py-3 rounded-3xl min-h-[150px] flex flex-col items-center justify-center">
              <h3 className='text-3xl mb-2'>#5 Bored Bunny Over The World</h3>
              <p className=' leading-7 text-lg text-neutral-300'>We want to show you that you made the best choice to join Bored Bunny and make sure that your investment is profitable. To do so we are planning to do massive marketing (well known celebrities, Ads in the biggest cities in the world ...)</p>
            </div>
          </div>

        </div>

        
      </div>
      <img src={Ape} alt="" className='absolute right-0 bottom-0 z-0 opacity-50' />
      <img src={Planet} alt="" className='absolute top-0 left-0 bottom-0 z-0  animate-pulse' />
    </section>
    <div className='border-b-2 mt-4 w-full border-dashed border-zinc-800 -skew-y-2' />
    </>
  );
}

export default Roadmap;
