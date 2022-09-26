import React from 'react';
import { Link } from 'react-router-dom';
const Nav = (props) => {


    return (
        <div className={`${props.mode && 'dark'}`}>
            <nav className="flex items-center justify-between flex-wrap p-6 dark:text-gray-700 dark:bg-gray-900 bg-blue-500">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">My React Tools</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-blue-100 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4">
                            TextUtils
                        </Link>
                        <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-blue-100 hover:text-white mr-4">
                            About
                        </Link>

                    </div>
                    <div>
                        <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" onClick={props.toggleDarkMode} value={props.mode} id="default-toggle" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-blue-100">Dark Mode</span>
                        </label>

                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
