import React from 'react';

const About = () => {
    return (
        <div className='flex flex-wrap w-11/12 mx-auto justify-around'>
            <div><img src="https://i.ibb.co/pvWrRgzj/about2.png" alt="" /></div>
            <div className='justify center'>
                <h3 className="bg-gray-100 rounded-xl inline-block py-1 justify-between text-[#749B3F] font-semibold mb-2 text-lg md:text-xl">
                    About Us
                </h3>
                <h1 className="text-xl font-bold xl:text-[48px]">
                    About Fresh Harvast
                </h1>
                <p className="py-6 max-w-md">
                    Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.
                </p>
                <button className="btn rounded-lg bg-fh-primary text-lg py-5 bg-border-2 border-[#FF6A1A] text-[#FF6A1A] px-8">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default About;