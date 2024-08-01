import React, { useState } from 'react';

const SideNavBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`fixed top-0 left-0 h-screen ${isOpen ? 'w-20' : 'w-16'} transition-all duration-300 bg-white shadow-lg text-black flex flex-col z-20`}>
            <button 
                className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white text-blue-700 p-2 rounded-full border border-gray-300 shadow"
                onClick={toggleSidebar}
            >
                {isOpen ? '<' : '>'}
            </button>
            <div className="flex-grow flex flex-col justify-between p-4">
                <div>
                    <img src=".\images\MindGradesLogo.png" alt="logo" className="mx-auto w-10 h-10" />
                    <hr className='my-4 border-gray-300' />
                    <nav>
                        <ul>
                            <li className="mb-4 px-4 py-2"><a href="#questionMark" className=""><img src=".\images\questionMark.png" alt="questionMark"  /></a></li>
                            <li className="mb-4 px-4 py-2"><a href="#notepad" className=""><img src=".\images\notepad.png" alt="notepad" /></a></li>
                            <li className="mb-4 px-4 py-2"><a href="#copy" className=""><img src=".\images\copy.png" alt="copy" /></a></li>
                            <li className="mb-4 px-4 py-2"><a href="#stock" className=""><img src=".\images\stock.png" alt="stock"  /></a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <ul>
                        <li className="mb-4 px-2 py-2 border-2 border-orange-400 rounded-full"><a href="#fileSend" className=""><img src=".\images\File Send.png" alt="File Send" /></a></li>
                        <hr className='my-4 border-gray-300' />
                        <li className="mb-4 "><a href="#profile" className=""><img src=".\images\profile.png" alt="profile" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideNavBar;
