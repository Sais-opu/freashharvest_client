import app from '../../assets/app.png'
import google from '../../assets/google.png'
import pata from '../../assets/store-pata.png'

const Store = () => {
    return (
        <div>
            <div className="mt-3 pl-10 relative z-50">
                <h5 className="text-fh-block relative z-10">Download App:</h5>

                <div className="flex space-x-4 mt-4 relative z-10">
                    <img
                        width={130}
                        height={40}
                        src={app}
                        alt="App Store"
                    />
                    <img
                        width={130}
                        height={40}
                        src={google}
                        alt="Google Play"
                    />
                </div>

                <div className="hidden md:block">
                    <img
                        src={pata}
                        width={60}
                        height={10}
                        className="absolute top-2 left-[24px] z-[-10]"
                        alt="no support image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Store;