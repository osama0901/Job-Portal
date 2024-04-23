import React, { useEffect, useRef, useState } from "react";

const Login = ({ setLoginOpen, setsignupOpen }) => {
    const contentRef = useRef(null);

    const close = () => {
        setLoginOpen(false);
    };

    const open = () => {
        setsignupOpen(true);
        setLoginOpen(false);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contentRef.current && !contentRef.current.contains(event.target)) {
                setLoginOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setLoginOpen]);
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 ">
            <div className="bg-white rounded-lg p-8 max-w-md w-full relative" ref={contentRef}>
                <button className="absolute top-0 right-0 m-3" onClick={close}>
                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="flex justify-between items-center pr-5 pl-5">
                    <h2 className="text-gray-600 text-lg font-medium">Login</h2>
                </div>
                <div className="content p-5  flex flex-col justify-center overflow-hidden">
                    {/* <h2 className="text-gray-600 text-lg font-medium">Log In</h2> */}
                    <div className="break h-1 bg-gray-300 my-2"></div>
                    <div className="form">
                        <div className="inputBox">
                            <input
                                type="email"
                                required
                                placeholder="Email"
                                className="p-2 w-full border border-gray-300 outline-none my-2"
                            />
                        </div>
                        <div className="inputBox">
                            <input
                                type="password"
                                required
                                placeholder="Password"
                                className="p-2 w-full border border-gray-300 outline-none my-2"
                            />
                        </div>
                        <div className="links">
                            <a href="#" className="block text-gray-500 text-xs">
                                Forgot Password?
                            </a>
                        </div>
                        <button className="p-2 w-full border border-gray-300 outline-none bg-sky-500 text-white my-2">
                            Login
                        </button>

                        <p className="text-gray-500 text-xs">Don&apos;t have an account?</p>
                        <button className="p-2 w-full border border-gray-300 outline-none text-green my-2 hover:bg-sky-500 hover:text-white"
                            onClick={open}
                        >
                            Create a new account
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
