import React from "react";
const Index = () => {
    return (
        <div className="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white dark:bg-gray-800 rounded-md">
            <div>
                <div className="lg:flex justify-between items-center">
                    <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold">Automatically Update My Subscription</p>
                    <div className="lg:mt-0 mt-4">
                        <div className="w-12 h-6 cursor-pointer rounded-full relative shadow-sm">
                            <input type="checkbox" name="toggle" id="toggle1" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                            <label htmlFor="toggle1" className="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 pb-4 font-normal mt-3">Subscription will be updated automatically as long as you don't want to change this option. Are you sure you want this?</p>
            </div>
            <style>{`
            .checkbox:checked {
                /* Apply class right-0*/
                right: 0;
            }
            .checkbox:checked + .toggle-label {
                /* Apply class bg-indigo-700 */
                background-color: #4c51bf;
            }
            `}</style>
        </div>
    );
};
export default Index;
