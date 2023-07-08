import React from "react";

const navLinks = [
    {
        id: 1,
        name: "home",
        url: "/#",
    },
    {
        id: 2,
        name: "about",
        url: "/#about",
    },
    {
        id: 3,
        name: "products",
        url: "/#products",
    },
    {
        id: 4,
        name: "email",
        url: "/#contact",
    },
];

const Navbar = () => {
    return (
        <div className='drawer'>
            <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content flex flex-col'>
                <div className='w-full navbar bg-neutral-400 opacity-80'>
                    <div className='flex-none lg:hidden'>
                        <label
                            htmlFor='my-drawer-3'
                            className='btn btn-circle btn-ghost'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                className='inline-block w-6 h-6 stroke-current'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h16M4 18h16'
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className='flex-1 px-2 mx-2'>TITLE</div>
                    <div className='flex-none hidden lg:block'>
                        <ul className='menu menu-horizontal space-x-8'>
                            <li>
                                <a
                                    href='#home'
                                    className='text-center text-2xl font-semibold text-gray-200 hover:text-orange-500 duration-300 transition-colors cursor-pointer'
                                >
                                    shit
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#home'
                                    className='text-center text-2xl font-semibold text-gray-200 hover:text-orange-500 duration-300 transition-colors cursor-pointer'
                                >
                                    shit
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#home'
                                    className='text-center text-2xl font-semibold text-gray-200 hover:text-orange-500 duration-300 transition-colors cursor-pointer'
                                >
                                    shit
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#home'
                                    className='text-center text-2xl font-semibold text-gray-200 hover:text-orange-500 duration-300 transition-colors cursor-pointer'
                                >
                                    shit
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='drawer-side'>
                <label htmlFor='my-drawer-3' className='drawer-overlay'></label>
                <ul className='menu p-4 w-60 h-full bg-base-200 flex flex-col justify-evenly'>
                    <li>
                        <a
                            href='#home'
                            className='text-center text-2xl font-semibold text-gray-200 hover:text-orange-500 duration-300 transition-colors cursor-pointer'
                        >
                            shit
                        </a>
                    </li>
                    <li>
                        <a
                            href='#home'
                            className='text-center text-2xl font-semibold text-gray-200 hover:text-orange-500 duration-300 transition-colors cursor-pointer'
                        >
                            shit
                        </a>
                    </li>
                    <li>
                        <a
                            href='#home'
                            className='text-center text-2xl font-semibold text-gray-200 hover:text-orange-500 duration-300 transition-colors cursor-pointer'
                        >
                            shit
                        </a>
                    </li>
                    <li>
                        <a
                            href='#home'
                            className='text-center text-2xl font-semibold text-gray-200 hover:text-orange-500 duration-300 transition-colors cursor-pointer'
                        >
                            shit
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
