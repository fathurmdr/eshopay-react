import React from 'react';

export default function Page(props) {
    const { title,children, ...others } = props
    return <>
        {/* Header */}
        <div className="border-b border-blue-300 px-4 sm:py-4 py-2 flex items-center justify-between lg:px-8">
            <div className="flex-1 min-w-0">
                <h1 className="text-lg font-medium leading-6 text-blue-900 sm:truncate">{title}</h1>
            </div>
            <div className="flex mt-0 ml-4">
                <button
                    onClick={() => others.onClick()}
                    type="button"
                    className="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:order-1 sm:ml-3"
                >
                    Add {title}
                </button>
            </div>
        </div>
        

        {/* contain page */}
        <div className="px-2 mt-6 sm:px-6 lg:px-8">
            <div className="mt-8 sm:block">
                <div className="align-middle inline-block min-w-full border-b border-blue-300">
                    {children}
                </div>
            </div>
        </div>
    </>
}
