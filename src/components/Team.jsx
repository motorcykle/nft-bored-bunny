import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination
} from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import TeamMember from './TeamMember';
import Jeff from '../assets/team/jeff.png';
import Greg from '../assets/team/greg.png';
import Kent from '../assets/team/kent.png';
import Florian from '../assets/team/florian.png';
import Sara from '../assets/team/sara.jpeg';
import Eric from '../assets/team/eric.png';
import Smile from '../assets/team/smile.png';
import { Fade } from 'react-reveal';


SwiperCore.use([Pagination]);

const members = [
  {
    name: 'Jeff',
    title: 'CO-FOUNDER',
    img: Jeff
  },
  {
    name: 'Greg',
    title: 'CO-FOUNDER',
    img: Greg
  },
  {
    name: 'Kent',
    title: 'BLOCKCHAIN EXPERT',
    img: Kent
  },
  {
    name: 'Florian',
    title: 'DESIGNER',
    img: Florian
  },
  {
    name: 'Sara',
    title: 'DESIGNER',
    img: Sara
  },
  {
    name: 'Eric',
    title: 'INVESTOR',
    img: Eric
  }
]

const Team = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  
  const isMobile = width <= 768;

  return (
    <section className="team  -skew-y-1">
      <div className="container py-24 pt-16">
        <Fade left>
        <div className="border-b pb-5 mb-6 text-6xl flex items-center">
          <h2 className=' font-semibold'>Meet the Team</h2>
          <img src={Smile} alt="" className='h-[1em] ml-2' />
        </div>
        </Fade>

        <Fade right>
        <Swiper slidesPerView={isMobile ? 3 : 5} spaceBetween={10} pagination={{
          "clickable": true
        }} className="mySwiper">
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamMember Img={member.img} name={member.name} title={member.title} />
            </SwiperSlide>
          ))}
        </Swiper>
        </Fade>
      </div>
    </section>
  );
}

export default Team;
