import React from 'react';

const TeamMember = ({Img, name, title}) => {
  return (
      <div className=' group '>
        <img src={Img} alt="" className='rounded-md group-hover:scale-90  transition-all duration-500' />
        <div className="mt-2">
          <h3 className='text-2xl group-hover:underline'>{name}</h3>
          <p className='font-bold text-xs'>{title}</p>
        </div>
      </div>
  );
}

export default TeamMember;
