import React from 'react';
import { logoIconsList } from '../constants/index.js';

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <img 
                src={icon.imgPath} 
                alt={icon.name}
                className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
        </div>
    );
};

function LogoSection() {
    return (
        <div className="md:my-20 my-10 relative">
            <div className="text-center mb-10">
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-1">
                    Our Partners
                </h2>
                <div className="flex justify-center mt-3">
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm max-w-md mx-auto">
                    Berkolaborasi industri global untuk memberikan hasil terbaik
                </p>
            </div>

            <div className="relative">
                {/* Gradient edges */}
                <div className="gradient-edge left" />
                <div className="gradient-edge right" />

                <div className="marquee h-52 overflow-hidden relative">
                    <div className="marquee-box md:gap-12 gap-5 flex animate-marquee">
                        {logoIconsList.map((icon, index) => (
                            <LogoIcon key={`${icon.name}-${index}`} icon={icon} />
                        ))}

                        {logoIconsList.map((icon, index) => (
                            <LogoIcon key={`${icon.name}-dup-${index}`} icon={icon} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogoSection;