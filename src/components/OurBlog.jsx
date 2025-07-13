

import pata from "../assets/store-pata.png"

const OurBlog = () => {
    return (
        <div className="w-11/12 mx-auto py-10 ">
            <div className="relative py-20 ">
                <div className="flex flex-col items-center text-center">
                    <h3 className="bg-gray-200 rounded-xl inline-block py-1 px-3 text-[#749B3F] font-semibold mb-2 text-lg md:text-xl">
                        Our Vlog
                    </h3>
                    <h1 className="text-xl font-bold xl:text-[48px]">
                        Fresh Harvast Blog
                    </h1>
                    <p className="py-6 max-w-md">
                        Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.
                    </p>
                </div>
                <div className="md-block">
                    <img
                        src={pata}
                        width={60}
                        height={10}
                        className="absolute transform shadow-gray-600 top-30 bottom-20 right-80 "
                        alt="leaf"
                    />
                </div>
            </div>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    <div className="w-[400px] bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://i.ibb.co/pvWg1gBF/blogimg.png" alt="Seasonal Delights" className="w-[400px] h-auto rounded-lg" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500">May 23, 2024</p>
                            <h3 className="text-lg font-semibold inline-block">Exploring Seasonal Delights: A Guide to What’s Fresh Right Now</h3>
                            <a href="#" className="text-orange-500 font-medium mt-2 inline-block">Read More →</a>
                        </div>
                    </div>

                    <div className="w-[400px] bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://i.ibb.co/pvWg1gBF/blogimg.png" alt="Salad Creations" className="w-[400px] h-auto rounded-lg" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500">May 23, 2024</p>
                            <h3 className="text-lg font-semibold inline-block">Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads</h3>
                            <a href="#" className="text-orange-500 font-medium mt-2 inline-block">Read More →</a>
                        </div>
                    </div>

                    <div className="w-[400px] bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="https://i.ibb.co/pvWg1gBF/blogimg.png" alt="Meal Prepping" className="w-[400px] h-auto rounded-lg" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500">May 23, 2024</p>
                            <h3 className="text-lg font-semibold inline-block">The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week</h3>
                            <a href="#" className="text-orange-500 font-medium mt-2 inline-block">Read More →</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurBlog;
