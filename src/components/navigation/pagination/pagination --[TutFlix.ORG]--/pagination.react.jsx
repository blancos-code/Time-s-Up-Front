import React from "react";

export default function index() {
    return (
        <>
            <div className="flex items-center justify-center py-10 lg:px-6 px-4">
                <div className="bg-indigo-50 lg:w-3/5 w-full md:px-4 px-3 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="border border-indigo-700 w-6 h-6 bg-indigo-700 rounded-full flex items-center justify-center mr-4 cursor-pointer hover:bg-indigo-700">
                            <p className="text-sm font-medium text-white">1</p>
                        </div>
                        <div className="w-6 h-6 border border-gray-200 hover:border-indigo-700 bg-white rounded-full flex items-center justify-center mr-4 cursor-pointer hover:bg-indigo-700 group">
                            <p className="text-sm font-medium text-gray-600 group-hover:text-white">2</p>
                        </div>
                        <div className="w-6 h-6 border border-gray-200 hover:border-indigo-700 bg-white rounded-full flex items-center justify-center mr-4 cursor-pointer hover:bg-indigo-700 group">
                            <p className="text-sm font-medium text-gray-600 group-hover:text-white">3</p>
                        </div>
                        <div className="w-6 h-6 border border-gray-200 hover:border-indigo-700 bg-white rounded-full flex items-center justify-center mr-4 cursor-pointer hover:bg-indigo-700 group">
                            <p className="text-sm font-medium text-gray-600 group-hover:text-white">4</p>
                        </div>
                        <div className="w-6 h-6 border border-gray-200 hover:border-indigo-700 bg-white rounded-full flex items-center justify-center mr-4 cursor-pointer hover:bg-indigo-700 group">
                            <p className="text-sm font-medium text-gray-600 group-hover:text-white">
                                <svg width={6} height={10} viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L5 5L1 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium leading-none text-gray-600">Showing 4/10</p>
                    </div>
                </div>
            </div>
        </>
    );
}
