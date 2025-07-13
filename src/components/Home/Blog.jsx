import pata from '../../assets/store-pata.png';
import fa from '../../assets/f1.jpg'
import OurBlog from '../OurBlog';
import Offer from './Timer/Offer';

const Blog = () => {
    return (
        <div>
            <div className="relative py-20 w-[70%] mx-auto">
                <div className="flex flex-col items-center text-center">
                    <div>
                        <h3 className="bg-gray-200 rounded-xl inline-block py-1 px-3 text-[#749B3F] font-semibold mb-2 text-lg md:text-xl">
                            Testimonial
                        </h3>
                        <h1 className="text-xl font-bold xl:text-[48px]">
                            What Our Customer Say
                        </h1>
                        <p className="py-6 max-w-md">
                            Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest
                        </p>
                    </div>
                </div>

                <div className="md:block">
                    <img
                        src={pata}
                        width={60}
                        height={10}
                        className="absolute transform rotate-65 bottom-40 left-20 "
                        alt="leaf"
                    />
                    <img
                        src={pata}
                        width={60}
                        height={10}
                        className="absolute top-44 right-[20px] "
                        alt="leaf"
                    />
                </div>
            </div>


            <div className="flex w-[70%] mx-auto justify-around items-center gap-6 relative">
                <div className="flex-shrink-0">
                    <img src={fa} alt="Customer" className="w-[300px] h-auto rounded-r-full rounded-l-full " />
                </div>
                <div className="max-w-xl text-lg">
                    <p className="Questrial">
                        "I absolutely love Fresh Harvest! The quality of their produce is outstanding.
                        It's always fresh, flavorful, and delicious. The convenience of ordering online
                        and having it delivered to my doorstep saves me so much time. Fresh Harvest has
                        become my go-to for all my fruit and vegetable needs."
                    </p>
                    <p className="mt-4 font-semibold">Jane Doe - Professional Chef</p>
                </div>
            </div>
            {/* offer */}
            <Offer></Offer>
            {/* my blog  */}
            <OurBlog></OurBlog>

        </div>
    );
};

export default Blog;