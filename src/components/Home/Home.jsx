// import About from "./About";
// import Blog from "./Blog";
// import Shop from "./Shop";

// const Home = () => {
//     return (

//         <div className="w-full relative">
//             <img
//                 src="https://i.ibb.co/ns3sjQcb/hero2.png"
//                 alt="Hero"
//                 className="w-full h-[100] object-cover pr-0.2 "
//             />
//             <div className="absolute top-0 left-0 w-11/12 mx auto">
//                 {/* Content over the image */}

//             </div>

//             {/* shop */}
//             <Shop></Shop>
//             {/*about */}
//             <About></About>
//             {/* Blog */}
//             <Blog></Blog>
//         </div>
//     );
// };

// export default Home;

import About from "./About";
import Blog from "./Blog";
import Shop from "./Shop";
import Store from "./Store";
import line from "../../assets/hr-line.png"

const BannerSalad = () => {
    return (
        <div className="md:flex mt-8 mb-15 lg:my-0 items-start text-left">
            {/* Left Line Image */}
            <div className="hidden lg:block ml-4">
                <img
                    src={line}
                    width={100}
                    height={10}
                    alt="Fresh Salad"
                    className="rounded-full"
                />
            </div>

            {/* Offer Box */}
            <div className="bg-gray-100 md:p-5 p-2 rounded-md lg:rounded-2xl flex items-center space-x-4 w-max lg:ml-10 text-left">
                <div className="text-left">
                    <p className="text-green-600 font-semibold">Special Offer</p>
                    <h3 className="md:text-3xl text-lg font-bold">Fresh Salad</h3>
                    <p className="md:text-lg text-sm font-semibold md:my-1">
                        <span className="text-green-600 text-md">Up to </span>
                        <span className="md:text-2xl text-sm font-bold">70%</span> off
                    </p>
                    <button
                        type="button"
                        className="bg-green-700 mt-2 inline-block text-white font-semibold md:px-3 md:py-2 text-[8px] md:text-sm px-1 rounded-full"
                    >
                        CODE : <span className="text-yellow-300">FRESH25</span>
                    </button>
                </div>

                {/* Salad Image */}
                <img
                    src="/assets/images/plete-food.png"
                    width={130}
                    height={100}
                    alt="Fresh Salad"
                    className="w-14 h-14 md:w-18 md:h-18 lg:w-28 lg:h-28 rounded-full"
                />
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div className="w-full relative">
            {/* Hero Section */}
            <img
                src="https://i.ibb.co/ns3sjQcb/hero2.png"
                alt="Hero"
                className="w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 w-11/12 mx-auto p-8 min-h-screen">
                {/* Text Content on Top of Image */}
                <h3 className="bg-gray-100 rounded-xl inline-block py-1 px-3 text-[#749B3F] font-semibold mb-2 text-lg md:text-xl">
                    Welcome to Fresh Harvest
                </h3>
                <h1 className="text-3xl font-bold xl:text-[80px]">
                    Fresh Fruits and <br /> Vegetables
                </h1>
                <p className="py-6 max-w-md">
                    At Fresh Harvests, we are passionate about providing you with the
                    freshest and most flavorful fruits and vegetables
                </p>
                <button className="btn rounded-lg bg-fh-primary text-lg py-5 bg-[#FF6A1A] text-white px-8">
                    Shop Now
                </button>

                {/* Inline BannerSalad Component */}
                <BannerSalad />

                {/* Store component for app download buttons */}
                <Store />
            </div>

            {/* Sections Below Hero */}
            <div className="relative z-10 bg-white">
                <Shop />
                <About />
                <Blog />
            </div>
        </div>
    );
};

export default Home;
