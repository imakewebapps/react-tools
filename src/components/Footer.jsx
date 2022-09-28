import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="p-4 bg-blue-500 shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
               <div className="flex items-center flex-shrink-0 text-blue-100 mr-6">
                <span className="font-semibold text-xl tracking-tight">NewsMonkey</span>
              </div>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-blue-100 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>

                </ul>
            </div>

            <span className="block text-sm text-blue-100 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">NewsMonkey™</a>. All Rights Reserved.
            </span>
        </footer>
        );
    }
}

export default Footer;
