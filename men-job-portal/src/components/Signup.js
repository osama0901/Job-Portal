import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const SignUp = ({ setsignupOpen, setLoginOpen }) => {
    const contentRef = useRef(null);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
    });
    //   const [registerUser, { isLoading }] = useRegisterUserMutation();

    const close = () => {
        setsignupOpen(false);
    };

    const openLogin = () => {
        setLoginOpen(true);
        setsignupOpen(false);
    };
    const handleChange = (field, value) => {
        setUser((prevData) => ({ ...prevData, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // registerUser(user)
        //   .then(() => {
        //     toast.success("User added successfully");
        //     setUser({
        //       firstName: "",
        //       lastName: "",
        //       email: "",
        //       password: "",
        //       phoneNumber: "",
        //     });
        //     router.push("/users");
        //   })
        //   .catch((error) => {
        //     console.error("Error occurred:", error);
        //   });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contentRef.current && !contentRef.current.contains(event.target)) {
                setsignupOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setsignupOpen]);

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-5 rounded-lg w-full max-w-md relative" ref={contentRef}>
                <button className="absolute top-0 right-0 m-3" onClick={close}>
                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex justify-between items-center pr-5">
                    <h2 className="text-gray-600 text-lg font-medium">First Time Here?</h2>
                </div>
                <div className="break w-full h-1 bg-gray-300 my-2"></div>
                <p className="text-gray-500 text-xs m-1">
                    Create a new account to get Updates jobs
                </p>
                <form onSubmit={handleSubmit} className="form">
                    <input
                        value={user?.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        className="p-3 my-2 outline-none border border-gray-300 text-black w-full"
                        type="text"
                        required
                        placeholder="First Name"
                    />
                    <input
                        value={user?.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        className="p-3 my-2 outline-none border border-gray-300 w-full"
                        type="text"
                        required
                        placeholder="Last Name"
                    />
                    <input
                        value={user?.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="p-3 my-2 outline-none border border-gray-300 w-full"
                        type="email"
                        required
                        placeholder="Email"
                    />
                    <input
                        value={user?.password}
                        onChange={(e) => handleChange("password", e.target.value)}
                        className="p-3 my-2 outline-none border border-gray-300 w-full"
                        type="password"
                        required
                        placeholder="Password"
                    />
                    <input
                        value={user?.phoneNumber}
                        onChange={(e) => handleChange("phoneNumber", e.target.value)}
                        className="p-3 my-2 outline-none border border-gray-300 w-full"
                        type="text"
                        required
                        placeholder="Phone Number"
                    />
                    <p className="text-gray-500 my-3 text-xs">
                        We use Phone numbers only for verification.
                    </p>
                    <button
                        type="submit"
                        // disabled={isLoading}
                        className="p-5 w-full border border-gray-300 bg-sky-500 text-white my-2 hover:text-gray-800"
                    >
                        {/* {isLoading ? "Creating Account..." : "Create a new account"} */}
                        Create a new account
                    </button>
                </form>
                <p className="text-gray-500 text-xs m-1">
                    By creating an account, you agree to Gecko Printing&apos;s
                    <a href="#" className="border-b border-gray-300">
                        Terms of Service
                    </a>
                    and
                    <a href="#" className="border-b border-gray-300">
                        Privacy Policy
                    </a>
                    , including your consent to Gecko Printing sending e-mails about promotions
                    and discounts.
                </p>
                <p className="text-gray-800 my-3 text-xs">
                    Already have an account?{" "}
                    <span onClick={openLogin} className="border-b border-gray-300 cursor-pointer font-bold">
                        Log In
                    </span>{" "}
                </p>
            </div>
        </div>

    );
};

export default SignUp;
