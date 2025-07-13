import About from "./About";


const Home = () => {
    return (

        <div className="w-full relative">
            <img
                src="https://i.ibb.co/ns3sjQcb/hero2.png"
                alt="Hero"
                className="w-full h-[100] object-cover pr-0.2 "
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                {/* Content over the image */}
                
            </div>
            // about
            <About></About>
        </div>
    );
};

export default Home;