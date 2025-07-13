import pata from '../../assets/store-pata.png';

const Blog = () => {
    return (
        <div>
            <div className="relative py-20 w-[70%] mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h3 className="bg-gray-100 rounded-xl inline-block py-1 px-3 text-[#749B3F] font-semibold mb-2 text-lg md:text-xl">
                        Testimonial 
                    </h3>
                    <h1 className="text-xl font-bold xl:text-[48px]">
                        What Our Customer Say
                    </h1>
                    <p className="py-6 max-w-md">
                        Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:
                    </p>
                </div>

                <div className="md:block">
                    <img
                        src={pata}
                        width={60}
                        height={10}
                        className="absolute top-2 left-[24px] z-[10]"
                        alt="leaf"
                    />
                    <img
                        src={pata}
                        width={60}
                        height={10}
                        className="absolute top-2 right-[24px] z-[-10]"
                        alt="leaf"
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;