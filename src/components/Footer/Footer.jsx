import React from 'react';
import logo from '../../assets/images/logo-footer.png'

const Footer = () => {
    return (
        <div className='bg-[#121F5E] h-[600px] relative z-50 text-white '>
            <div className='max-w-7xl mx-auto'>
                <img className='mx-auto' src={logo} alt="" />
            <div className='grid md:grid-cols-3 gap-7-'>
                <div>
                    <h1>About Us</h1>
                    <h1>We are a passionate team dedicated to providing the best services to our customers.</h1>
                </div>
                <div>
                    <h1>Quick Links</h1>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </div>
                <div>
                    <h1>Subscribe</h1>
                    <h1>Subscribe to our newsletter for the latest updates.</h1>
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
            </div>
            </div>
        </div>
    );
};

export default Footer;