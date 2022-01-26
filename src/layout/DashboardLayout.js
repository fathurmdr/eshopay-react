import React, { Fragment, useState } from 'react';
import { Outlet,Link } from 'react-router-dom'

import { Dialog, Menu, Transition } from '@headlessui/react';

import {
    HomeIcon, MenuAlt1Icon, XIcon, SelectorIcon,
    ClipboardListIcon,
    CollectionIcon,
    CreditCardIcon,
    ViewGridAddIcon,
    CashIcon
} from '@heroicons/react/outline'
import {
    ChevronRightIcon,
    DotsVerticalIcon,
    DuplicateIcon,
    PencilAltIcon,
    SearchIcon,
    TrashIcon,
    UserAddIcon,
} from '@heroicons/react/solid'

const navigation = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon, current: true },
    { name: 'Category', href: 'category', icon: ClipboardListIcon, current: false },
    { name: 'Products', href: 'product', icon: ViewGridAddIcon, current: false },
    { name: 'Orders', href: 'order', icon: CollectionIcon, current: false },
    { name: 'Account Payment', href: 'payment', icon: CreditCardIcon, current: false },
    { name: 'Transaction Payment', href: 'transaction', icon: CashIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DashboardLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return(
        <div className="h-screen flex overflow-hidden bg-blue-200">

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-64 border-r border-blue-300 pt-5 pb-4 bg-blue-400">
                    <div className="flex items-center flex-shrink-0 px-6">
                        <img
                            className="h-10 w-auto"
                            src="/static/images/codeid-academy.png"
                            alt="codeid"
                        />
                    </div>
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="h-0 flex-1 flex flex-col overflow-y-auto">
                        {/* User account dropdown */}
                        <Menu as="div" className="px-3 mt-6 relative inline-block text-left">
                            {({open})=>(
                                <>
                                    <div>
                                        <Menu.Button className="group w-full bg-blue-200 rounded-md px-3.5 py-2 text-sm text-left font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-500">
                                            <span className="flex w-full justify-between items-center">
                                                <span className="flex min-w-0 items-center justify-between space-x-3">
                                                    <img
                                                        className="w-10 h-10 object-cover rounded-full flex-shrink-0"
                                                        src="/static/images/fathu.jpg"
                                                        alt=""
                                                    />
                                                    <span className="flex-1 flex flex-col min-w-0">
                                                        <span className="text-blue-1000 text-sm font-medium truncate">Fathu Rahman</span>
                                                        <span className="text-gray-500 group-hover:text-gray-200 text-sm truncate">@fathurahman</span>
                                                    </span>
                                                </span>
                                                <SelectorIcon
                                                    className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-200"
                                                    aria-hidden="true"
                                                />
                                            </span>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            static
                                            className="z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-blue-100 ring-1 ring-black ring-opacity-5 divide-y divide-blue-200 focus:outline-none"
                                        >
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="#"
                                                            className={classNames(
                                                                active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            View profile
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="#"
                                                            className={classNames(
                                                                active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Settings
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="#"
                                                            className={classNames(
                                                                active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Notifications
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="#"
                                                            className={classNames(
                                                                active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Get desktop app
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                        to="#"
                                                        className={classNames(
                                                            active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Support
                                                    </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="#"
                                                            className={classNames(
                                                                active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Logout
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </>
                            )}
                        </Menu>


                        {/* Search */}

                        <div className="px-3 mt-3">
                            <form className="w-full flex " action="#" method="GET">
                                <label htmlFor="search_field" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600 items-center">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        <SearchIcon className="pl-1 h-7 w-7" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search_field"
                                        name="search_field"
                                        className="block w-full h-full pl-8 pr-3 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm rounded-md"
                                        placeholder="Search..."
                                        type="search"
                                        
                                    />
                                </div>
                            </form>
                        </div>
                        
                        {/* Navigation */}
                        <nav className="px-3 mt-3">
                            <div className="space-y-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            item.current ? 'bg-blue-200 text-blue-900' : 'text-blue-900 hover:text-blue-900 hover:bg-blue-200',
                                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-blue-900' : 'text-blue-900 group-hover:text-blue-900',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                        </nav>
                    </div>
                </div>
            </div>

            {/* Main column */}
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                {/* Search header */}
                <div className="relative z-0 flex-shrink-0 flex h-12 sm:h-16 bg-blue-400 border-b border-blue-300 lg:hidden">
                    <button
                        className="px-4 border-r border-blue-500 rounded-sm text-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <div className="flex-1 flex justify-between px-4 py-1 sm:px-6 lg:px-8">
                        <div className="flex-1 flex ">
                            <form className="w-full flex md:ml-0 " action="#" method="GET">
                                <label htmlFor="search_field" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600 items-center">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                                        <SearchIcon className="pl-1 h-7 w-7" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search_field"
                                        name="search_field"
                                        className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm rounded-md"
                                        placeholder="Search..."
                                        type="search"
                                        
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center">
                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                            {({open})=>(
                                <>
                                    <div>
                                        <Menu.Button className="max-w-xs  bg-blue-400 flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-blue-300">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="w-10 h-10 object-cover rounded-full flex-shrink-0"
                                                src="/static/images/fathu.jpg"
                                                alt=""
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items
                                            static
                                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-blue-100 ring-1 ring-black ring-opacity-5 divide-y divide-blue-200 focus:outline-none"
                                        >
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="#"
                                                            className={classNames(
                                                                active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            View profile
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="#"
                                                            className={classNames(
                                                                active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Settings
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="#"
                                                            className={classNames(
                                                                active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Notifications
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="#"
                                                            className={classNames(
                                                                active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Get desktop app
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                        to="#"
                                                        className={classNames(
                                                            active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Support
                                                    </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            to="#"
                                                            className={classNames(
                                                                active ? 'bg-blue-200 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Logout
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </>
                            )}
                        </Menu>
                        </div>
                    </div>
                </div>
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                    {/* Page title & actions */}
                    <Outlet />
                </main>
            </div>

            {/* Responsive sidebar for mobile */}
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog
                    as = "div"
                    static
                    className = "fixed inset-0 flex z-40 lg:hidden"
                    open={sidebarOpen}
                    onClose={setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-6 pb-4 bg-blue-400">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                                    <button
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex items-center flex-shrink-0 px-4">
                                <img
                                    className="h-9 w-auto"
                                    src="/static/images/codeid-academy.png"
                                    alt="codeid"
                                />
                            </div>
                            <nav className="px-3 mt-6">
                                    <div className="space-y-1">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-blue-200 text-blue-900' : 'text-blue-900 hover:text-blue-900 hover:bg-blue-200',
                                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current ? 'text-blue-900' : 'text-blue-900 group-hover:text-blue-900',
                                                        'mr-3 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>

                                </nav>

                        </div>
                    </Transition.Child>
                    

                </Dialog>
            </Transition.Root>

            

            
        </div>
    )
}
