import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/authProvider";
import { Bounce, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            navigate("/");
            toast.success("User created successfully by Google sign in!", {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });
        } catch (error) {
            console.error("Google login failed:", error.message);
        }
    };

    const validatePassword = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

        if (!hasUppercase) {
            setPasswordError("Password must contain at least one uppercase letter.");
            return false;
        }

        if (!hasLowercase) {
            setPasswordError("Password must contain at least one lowercase letter.");
            return false;
        }

        if (!isLongEnough) {
            setPasswordError("Password must be at least 6 characters long.");
            return false;
        }

        setPasswordError("");
        return true;
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const imageURL = e.target.imageURL.value;

        if (!validatePassword(password)) {
            toast.error("Invalid password. Please check the requirements.", {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, {
                displayName: `${fname} ${lname}`,
                photoURL: imageURL,
            });

            localStorage.setItem(
                "userProfile",
                JSON.stringify({
                    displayName: `${fname} ${lname}`,
                    photoURL: imageURL,
                    email: user.email,
                    fname,
                    lname,
                })
            );

            toast.success("User created successfully!", {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });

            navigate("/");
        } catch (error) {
            console.error("Error creating user:", error.message);
            toast.error("Error creating user. Please try again.", {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
        // style={{ backgroundImage: `url('https://i.ibb.co.com/r2ZXRmH9/register.jpg')` }}
        >
            {/* Blurred Form Container */}
            <div className="bg-white bg-opacity-30 backdrop-blur-md p-10 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-5xl font-bold mb-5 text-black text-center">Register Here</h1>

                <form onSubmit={handleRegister} className="w-full">
                    {/* <div className="flex flex-wrap -mx-3 mb-6"> */}
                    <div className="w-full pb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="fname"
                            placeholder="Your first name"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            required
                        />
                    </div>
                    {/* <div className="w-full md:w-1/2 px-3">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lname"
                                placeholder="Your last name"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                required
                            />
                        </div>
                    </div> */}

                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block uppercase tracking-wide text-black text-xs font-bold mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-3 text-gray-700"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        {passwordError && <p className="text-red-500 text-xs italic mt-2">{passwordError}</p>}
                    </div>

                    <button type="submit" className="btn bg-[#FF6A1A] mt-5 btn-ghost text-white w-full">
                        Register Now
                    </button>

                    <div className="mt-3">
                        <div className="flex items-center justify-center my-2">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-600 font-medium">Or Sign in with</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3">
                                {/* google button */}
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="btn mt-5 btn-ghost btn-outline w-full flex items-center justify-center space-x-2"
                                >
                                    <FcGoogle className="text-2xl" />
                                    <span>Login with Google</span>
                                </button>
                            </div>
                            {/* facebook */}
                            <div className="w-full md:w-1/2 px-3">
                                <button
                                    // onClick={handleFacebookSignIn}
                                    className="btn mt-5 btn-ghost btn-outline w-full flex items-center justify-center space-x-2"
                                >
                                    <FaFacebook className="text-2xl text-[#1E90FF] " />
                                    <span>Login with Facebook</span>
                                </button>
                            </div>
                        </div>

                    </div>

                    <p className="mt-5 text-center text-black">
                        Already have an account?{" "}
                        <Link to="/login" className="text-[#FF6A1A]">
                            Log in here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;