import React from 'react';

const Player = ({player}) => {
    const {name,biddingPrice,image,country,role,battingType,bowlingType}=player;
    return (
        <div className='w-[376px] h-[540px]'>
            <img className=' w-[376px] h-[240px] rounded-lg' src={image} alt="" />
            <h1 className='text-2xl font-bold mt-2'>{name}</h1>
            <div className='flex justify-between mt-2'>
                 <div>
                    <h1>{country}</h1>
                 </div>
                 <div>
                    <h1>{role}</h1>
                 </div>
            </div>
            <div className='flex justify-between mt-2'>
                <h1>{battingType}</h1>
                <h1>{bowlingType}</h1>
            </div>
            <div className='flex justify-between items-center'>
                <h1>Price:${biddingPrice}</h1>
                <button className='border-2 border-gray-600 m-2 p-2'>Choose Player</button>
            </div>
        </div>
    );
};

export default Player;