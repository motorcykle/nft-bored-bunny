import React from 'react';
import DiamondBunny from '../assets/benefitsandutilities/img8.png';
import { CashIcon, GiftIcon, UserGroupIcon, DuplicateIcon, GlobeAltIcon } from '@heroicons/react/solid'

const BenefitsAndUtilities = () => {
  return (
    <section id="benefitsandutilities">
      <div className="container py-24">
        <div className="border-b pb-5">
          <h2 className='text-6xl font-semibold'>Benefits & Utilities</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full justify-items-center items-center gap-x-7 gap-y-4 items-center">
          
          <div className="py-10 relative">
            <div className=" border-8 border-dashed absolute h-72 w-72 rounded-full bottom-0 right-0 border-zinc-100 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 animate-spin"></div>
            <img src={DiamondBunny} alt="" className=' h-52 animate-bounce' />
          </div>

          <div className="shadow-lg rounded-md px-6 py-8 group min-h-[200px]">
            <h3 className='text-3xl mb-3'>
              <CashIcon className="h-[1em] inline-block mr-1 group-hover:text-green-400 text-zinc-300" />
              Increase the value of your NFT
            </h3>
            <p className='text-zinc-500 font-medium group-hover:ml-2 transition-all duration-500'>
              If you are lucky and mint one of our rare NFT you can 2x, 5x, maybe even 10x the value of your investment within a few days.
            </p>
          </div>

          <div className="shadow-lg rounded-md px-6 py-8 group min-h-[200px]">
            <h3 className='text-3xl mb-3'>
              <GiftIcon className="h-[1em] inline-block mr-1 group-hover:text-pink-400 text-zinc-300" />
              Holders Rewards
            </h3>
            <p className='text-zinc-500 font-medium group-hover:ml-2 transition-all duration-500'>
              The holders will get access to our community funds used to ​​invest, reward, and collaborate with the best projects in the space and projects ideas of our members.
            </p>
          </div>

          <div className="shadow-lg rounded-md px-6 py-8 group min-h-[200px]">
            <h3 className='text-3xl mb-3'>
              <UserGroupIcon className="h-[1em] inline-block mr-1 group-hover:text-red-400 text-zinc-300" />
              Access to Private Events
            </h3>
            <p className='text-zinc-500 font-medium group-hover:ml-2 transition-all duration-500'>
              A big party will be organised to reward all of our holders and to celebrate the achievement of our goals. Bali, LA, Dubai ? The community choose
            </p>
          </div>

          <div className="shadow-lg rounded-md px-6 py-8 group min-h-[200px]">
            <h3 className='text-3xl mb-3'>
              <DuplicateIcon className="h-[1em] inline-block mr-1 group-hover:text-yellow-400 text-zinc-300" />
              Breed your NFT
            </h3>
            <p className='text-zinc-500 font-medium group-hover:ml-2 transition-all duration-500'>
              Bored Bunny owners can breed their Bunnies to create a 2nd Generation Bunny. Just keep in mind, you'll need a total of 2 Bored Bunny to breed, so hop to it
            </p>
          </div>

          <div className="shadow-lg rounded-md px-6 py-8 group min-h-[200px]">
            <h3 className='text-3xl mb-3'>
              <GlobeAltIcon className="h-[1em] inline-block mr-1 group-hover:text-indigo-400 text-zinc-300" />
              Our Metaverse
            </h3>
            <p className='text-zinc-500 font-medium group-hover:ml-2 transition-all duration-500'>
              They will be able to wear their 3D Bored Bunny and join Bored Bunny City, a Private Land on the Metaverse where only our community can have access.
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}

export default BenefitsAndUtilities;
