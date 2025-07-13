import React from 'react';
import banner from "../../assets/images/bg-shadow.png"

const Newsletter = () => {
    return (
        
        <div
            className="w-full h-48 bg-cover bg-center text-center my-auto rounded-3xl border-2 border-gray-500"
            style={{ backgroundImage: `url(${banner})` }} // <-- dynamic style
        >
            <div>
                <h1 className="text-black text-3xl font-bold">Subscribe to our newsletter</h1>
            </div>
            <p className='text-gray-400'>Get the latest updates and news right in your inbox!</p>
            <div className='flex items-center justify-center'>
                <input className='border border-gray-500 p-3 rounded-2xl' type="text" placeholder='Enter your email' />
                <button className='bg-yellow-500 text-black font-bold ml-3 p-2 rounded-lg'>Subscribe</button>
            </div>
        </div>
    );
};

export default Newsletter;