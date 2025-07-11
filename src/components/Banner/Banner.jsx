import React from 'react';
import cricket from'../../assets/images/banner-main.png'
const Banner = ({claimCredit}) => {
    return (
      
        <div className='w-full h-[300px] bg-radial-[at_25%_25%] from-white to-zinc-900 to-75%'>
            <div className='mx-auto'>
                <img className='w-[248px] h-[200px] mx-auto' src={cricket} alt="" />
                <h1 className='text-center text-2xl font-bold text-gray-400'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <button onClick={claimCredit} className='block mx-auto bg-yellow-500 text-black font-bold px-4 py-2 rounded'>Claim free Credit</button>
            </div>
        </div>

    );
};

export default Banner;
