import React from "react";

const Login = ({ setLoginOpen }) => {

    const close = () => {
        setLoginOpen(false);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <div className="flex justify-between pl-5 pr-5">
                    <h2 className="text-gray-600 text-lg font-medium">Log In</h2>
                    <button className="p-3" onClick={close}>
                        <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
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
                            <a href="#" className="block text-gray-500 text-xs ml-[145px]">
                                Forgot Password?
                            </a>
                        </div>
                        <button className="p-2 w-full border border-gray-300 outline-none bg-blue text-white my-2">
                            Login
                        </button>

                        <p className="text-gray-500 text-xs">Don&apos;t have an account?</p>
                        <button className="p-2 w-full border border-gray-300 outline-none text-green my-2 hover:bg-blue hover:text-white">
                            Create a new account
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
