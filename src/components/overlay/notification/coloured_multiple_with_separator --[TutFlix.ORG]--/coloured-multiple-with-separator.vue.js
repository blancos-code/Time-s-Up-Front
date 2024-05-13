<template>
    <div class="bg-gray-200 dark:bg-gray-900 h-full">
        <div class="relative mx-auto flex justify-center sm:justify-end pt-16 sm:pt-6 pb-6 sm:pb-16 h-64 overflow-x-hidden">
            <div role="alert" class="sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 xl:w-5/12 mx-auto absolute left-0 sm:left-auto right-0 sm:top-0 sm:w-6/12 md:w-3/5 justify-between w-11/12 bg-white dark:bg-gray-800 shadow-lg rounded flex sm:flex-row flex-col transition duration-150 ease-in-out" id="notification">
                <div class="sm:px-6 p-2 flex mt-4 sm:mt-0 ml-4 sm:ml-0 items-center justify-center bg-green-400 sm:rounded-tl sm:rounded-bl w-12 h-12 sm:h-auto sm:w-auto text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z" />
                    </svg>
                </div>
                <div class="flex flex-col justify-center xl:-ml-4 pl-4 xl:pl-1 sm:w-3/5 pt-4 sm:pb-4 pb-2">
                    <p class="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">Action Completed</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 font-normal">You have successfully completed the survey. You will soon receive a reward email. Stay tuned.</p>
                </div>
                <div class="flex sm:flex-col sm:justify-center sm:border-l dark:border-gray-700 items-center border-gray-300 sm:w-1/6 pl-4 sm:pl-0">
                    <div class="sm:pt-4 pb-4 sm:border-b dark:border-gray-700 border-gray-300 sm:w-full flex sm:justify-center">
                        <span class="sm:text-sm text-xs text-green-400 font-bold mr-4 sm:mr-0 cursor-pointer">View</span>
                    </div>
                    <div class="sm:pt-4 pb-4 flex sm:justify-center w-full cursor-pointer" @click="closeModal()">
                        <span class="sm:text-sm text-xs text-gray-600 dark:text-gray-400 cursor-pointer">Dismiss</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ColoredMultipleWithSeperator",
    mounted: function () {
        this.onLoad();
    },
    methods: {
        onLoad() {
            var Notification = document.getElementById("notification");
            Notification.style.transform = "translateX(150%)";
            Notification.classList.remove("hidden");
            setTimeout(function () {
                Notification.style.transform = "translateX(0%)";
            }, 1000);
        },
        closeModal() {
            var Notification = document.getElementById("notification");
            Notification.style.transform = "translateX(150%)";
        },
    },
};
</script>
