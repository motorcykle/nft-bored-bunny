import React, { useState } from 'react';
import { Fade } from 'react-reveal';

const qna = [
  {
    question: "When is the official launch?",
    answer: "The official launch date will be the Tuesday 4th January at 7PM UTC."
  },
  {
    question: "What will the price be?",
    answer: "The Price of Minting will be 0.4ETH + Gas Fees."
  },
  {
    question: "How do I get whitelisted?",
    answer: "Our Whitelist is still open, you can check all the info on our discord."
  },
  {
    question: "How can I buy a Bored Bunny NFT?",
    answer: "You will be able to buy only on our website when we launch."
  },
  {
    question: "Where will I be able to see my Bored Bunny NFT?",
    answer: "Once you have minted a Bored Bunny NFT, you will be able to see it by connecting your wallet to OpenSea."
  },
  {
    question: "Why Bored Bunny?",
    answer: "When you buy a Bored Bunny, you’re not simply buying a simple NFT, you are getting access to a community where benefits and utilities will increase with the time."
  }
]

const Faq = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="faq">
      <div className="container py-20">

        <Fade left>
        <div className="border-b pb-5 flex items-center">
          <h2 className='text-6xl font-semibold mr-3'><span className=' animate-ping '>?</span> FAQ</h2>
          <button onClick={() => setOpen(prev => !prev)} className=' px-5 py-2 rounded-full text-base font-semibold hover:text-zinc-800 hover:bg-neutral-200 bg-zinc-800 text-neutral-50'>
            {open ? 'Hide answers' : 'Show answers'}
          </button>
        </div>
        </Fade>

        <Fade cascade right>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10">
          {qna.map((qna, index) => (
            <div key={index} className=''>
              <small>{qna.question}</small>
              { open && <p className='text-lg'>{qna.answer}</p>}
            </div>
          ))}
        </div>
        </Fade>

      </div>
    </section>
  );
}

export default Faq;
