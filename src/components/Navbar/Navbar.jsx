import React from 'react';
import logo from '../../assets/images/logo.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className=''>
                <a className='ml-4 text-gray-500' href="">Home</a>
                <a className='ml-4 text-gray-500' href="">Fixture</a>
                <a className='ml-4 text-gray-500' href="">Team</a>
                <a className='ml-4 text-gray-500' href="">Schedule</a>
                <button className='border-2 border-gray-500 ml-4 w-[125px] h-[52px]'>Coin</button>
            </div>
        </div>
    );
};

export default Navbar;