import React, { useState, useEffect, useRef } from 'react';

const TopNavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md relative">
            <div className="flex items-center">
                <img src="path_to_logo" alt="Logo" className="w-10 h-10 rounded-full" />
                <h1 className="ml-4 text-xl font-bold px-6">Welcome Rahul!</h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 border-2 border-orange-600 rounded-full px-3 py-1">
                    <span className="text-orange-500">🔥</span>
                    <span className="text-red-600">2</span>
                </div>
                <button className="bg-transparent hover:bg-blue-100 text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded-full">
                    Explore Community
                </button>
                <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
                    <button 
                        onClick={toggleDropdown} 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
                        Polity <span className="ml-1 text-white">▼</span>
                    </button>
                    <div className="border-l border-gray-300 h-6 mx-2"></div>
                    <button 
                        onClick={toggleDropdown} 
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md">
                        <img src="./images/Call Chat.png" alt="Call" className="w-6 h-6" />
                    </button>
                    {isDropdownOpen && (
                        <ul className="absolute right-0 mt-2 w-48 bg-white shadow-md border border-gray-300 rounded-md z-10">
                            <li><a href="#sub-link-1" className="block px-4 py-2 hover:bg-gray-200">Sub Link 1</a></li>
                            <li><a href="#sub-link-2" className="block px-4 py-2 hover:bg-gray-200">Sub Link 2</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopNavBar;
