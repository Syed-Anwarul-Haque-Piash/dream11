import React from 'react';
import banner from "../../assets/images/bg-shadow.png"

const Newsletter = () => {
    return (

        // <div
        //     className="w-full h-48 bg-cover bg-center text-center my-auto rounded-3xl border-2 border-gray-500"
        //     style={{ backgroundImage: `url(${banner})` }} // <-- dynamic style
        // >
        //     <div>
        //         <h1 className="text-black text-3xl font-bold">Subscribe to our newsletter</h1>
        //     </div>
        //     <p className='text-gray-400'>Get the latest updates and news right in your inbox!</p>
        //     <div className='flex items-center justify-center'>
        //         <input className='border border-gray-500 p-3 rounded-2xl' type="text" placeholder='Enter your email' />
        //         <button className='bg-yellow-500 text-black font-bold ml-3 p-2 rounded-lg'>Subscribe</button>
        //     </div>
        // </div>
        <section className="w-full px-4 py-12 bg-white">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#fefefe] via-[#f9f9ff] to-[#ffe6cc] 
                      rounded-3xl border border-gray-300 p-8 shadow-md">

                {/* Heading */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Subscribe to our Newsletter
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Get the latest updates and news right in your inbox!
                    </p>
                </div>

                {/* Input + Button */}
                <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full sm:w-2/3 px-4 py-2 rounded-full border border-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-full text-white font-semibold 
                       bg-gradient-to-r from-yellow-400 to-orange-400 
                       hover:from-yellow-500 hover:to-orange-500 transition"
                    >
                        Subscribe
                    </button>
                </form>

            </div>
        </section>
    );
};

export default Newsletter;