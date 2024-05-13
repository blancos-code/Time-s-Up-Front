import React from "react";
function Index() {
    return (
        <>
            <div className="flex md:flex-row flex-col items-start justify-center py-8">
                <div className="mt-7">
                    <p className="text-gray-800 cursor-pointer text-xs -mt-10 ml-10 md:hidden" onclick="showPopover()">
                        Popover
                    </p>
                    <p className="text-gray-800 cursor-pointer mt-10 hidden md:block" onclick="showPopover()">
                        Popover
                    </p>
                </div>
                {/* Code block starts */}
                <div id="popover" className="transition duration-150 ease-in-out ml-10 w-10/12 md:w-2/5">
                    <div className="w-full bg-white rounded shadow-2xl">
                        <div className="relative bg-gray-200 rounded-t py-4 px-4 xl:px-8">
                            <svg className="hidden md:block absolute -ml-5 -mb-10 left-0 bottom-0" width="30px" height="30px" viewBox="0 0 9 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#FFFFFF">
                                        <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                                            <g id="Group-2" transform="translate(24.000000, 0.000000)">
                                                <polygon id="Triangle" transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) " points="4.5 57.5 12.5 66.5 -3.5 66.5" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg className="absolute top-0 -mt-5 block md:hidden" xmlns="http://www.w3.org/2000/svg" width={26} height={23} viewBox="0 0 26 23" fill="none">
                                <path id="Polygon 2" d="M13 0L25.9904 22.5H0.00961876L13 0Z" fill="#e5e7eb" />
                            </svg>
                            <p className="text-base text-gray-800 font-normal leading-normal tracking-normal">435 South Side, Staples Centre</p>
                        </div>
                        <div className="w-full h-full px-4 xl:px-8 py-5">
                            <p className="text-xs font-normal text-gray-800">Known for</p>
                            <div className="flex items-center my-2">
                                <p className="text-xs text-indigo-700 font-normal">Sports</p>
                                <p className="w-1 h-1 bg-gray-500 rounded-full mx-2" />
                                <p className="text-xs text-indigo-700 font-normal">Entertainment</p>
                                <p className="w-1 h-1 bg-gray-500 rounded-full mx-2" />
                                <p className="text-xs text-indigo-700 font-normal">Hot Dogs</p>
                            </div>
                            <p className="text-gray-600 font-normal text-xs">The responsibility to communicate that information rests on the shoulders of the marketing and sales teams. Typically, marketing has a predominant role at the beginning of a potential sale.</p>
                            <div>
                                <button className="mt-4 mr-2 sm:mr-3 font-normal focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-sm">Get Directions</button>
                                <button className="mt-4 font-normal bg-gray-100 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 rounded text-indigo-600 px-6 py-2 text-sm border border-gray-300">Schedule Alert</button>
                            </div>
                        </div>
                    </div>
                    {/* Code block ends */}
                </div>
            </div>
        </>
    );
}
export default Index;
