import React, { useState } from 'react';

const TopNavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className=" top-0 left-32 right-0 bg-white text-black p-4 px-24 shadow-md z-10 flex items-center justify-between">
            <h1 className="text-2xl font-bold font-Satoshi-Variable p-2 left-5">Welcome Rahul!</h1>
            <nav className="flex items-center space-x-8">
                <div className="flex items-center space-x-4 border-2 border-spacing-2 border-red-300 rounded-full">
                    <img src=".\images\fire.png" alt="fire" className="w-6 h-6" />
                    <span>2</span>
                </div>
                <a href="#explore-community" className="hover:underline border-2 border-blue-700 rounded-full text-blue-700">Explore Community</a>
                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center space-x-1 hover:underline bg-blue-700 text-white border-2 border-blue-700 rounded-full">
                        <span>Polity</span>
                        <svg className={`w-4 h-4 transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg">
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="#subitem1">Subitem 1</a></li>
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="#subitem2">Subitem 2</a></li>
                            <li className="px-4 py-2 hover:bg-gray-100"><a href="#subitem3">Subitem 3</a></li>
                        </ul>
                    )}
                </div>
                <a href="#contact"><img src=".\images\Call Chat.png" alt="Call" className="w-6 h-6" /></a>
            </nav>
        </div>
    );
};

export default TopNavBar;
