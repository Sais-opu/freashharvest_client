import orange from '../../../assets/orange.jpg'
import Timer from "./Timer";
import pata from "../.././../assets/store-pata.png"
import bigleaf from "../../../assets/bigleaf.png"
import dot from '../../../assets/dot.png'
const Offer = () => {
    return (
        <div className=" my-20 py-10 ">
            <div className="container">
                <div className="md:flex items-center w-11/12 mx-auto">
                    <div className="md:w-3/4 mx-11/12 mx-auto">
                        <div className=" text-center md:text-left">
                            <h3 className="text-[#749B3F] inline-block bg-gray-200 px-2 rounded-sm text-fh-green font-semibold  md:text-xl  ">
                                Special Offer
                            </h3>
                            <h2 className="text-black  text-5xl md:text-6xl font-bold my-4">
                                Seasonal Fruit Bundle
                            </h2>
                            <h4 className="text-fh-block text-4xl max-w-md font-semibold  mb-5">
                                Discount up to <span className="font-bold text-[#FF6A1A]"> 80% OFF</span>
                            </h4>
                            <Timer />
                            <button className="btn rounded-4xl text-2xl mt-6 font-semibold  text-white py-6  bg-[#176D38]">
                                CODE : <span className="text-yellow-400"> FRESH28</span>
                            </button>
                        </div>
                    </div>
                    <div className=" hidden md:block relative">
                        <div className="">
                            <img
                                src={pata}
                                width={60}
                                height={10}
                                className="absolute top-[-0px] transform rotate-90 left-[-60px] z-11"
                                alt="no support image"
                            />
                            <img
                                src={bigleaf}
                                width={60}
                                height={10}
                                className="absolute bottom-[-50px]  right-[100px] z-11"
                                alt="no support image"
                            />
                            <img
                                src={dot}
                                width={80}
                                height={10}
                                className="absolute top-[0px] right-[100px] z-11"
                                alt="no support image"
                            />
                        </div>
                        <img
                            src={orange}
                            width={500}
                            height={500}
                            className="mt-16 ml-[-100px] "
                            alt="no image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Offer;