<template>
    <div class="h-full">
        <div class="relative mx-auto flex justify-center sm:justify-end pt-16 sm:pt-6 pb-6 sm:pb-16 h-64 overflow-x-hidden">
            <!--code for notification starts-->
            <div role="alert" class="xl:w-5/12 sm:w-6/12 md:w-3/5 w-11/12 bg-white dark:bg-gray-800 shadow-lg rounded flex pr-4 sm:flex-row flex-col absolute left-0 sm:left-auto right-0 sm:top-0 mx-auto sm:mr-6 mt-16 sm:mt-6 mb-6 sm:mb-0 transition duration-150 ease-in-out" id="notification">
                <div class="sm:p-6 p-2 ml-4 sm:ml-0 mt-4 sm:mt-0 sm:px-6 flex items-center justify-center bg-blue-400 w-12 h-12 sm:h-auto sm:w-auto text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
                        <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </div>
                <div class="flex flex-col justify-center pl-4 sm:w-9/12 py-3">
                    <p class="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-1">Update Available</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400 font-normal pb-2">You've got some friends nearby, stop looking at your phone and find them</p>
                    <div class="flex">
                        <span class="text-sm text-blue-400 font-bold mr-2 cursor-pointer">Details </span>
                        <span class="text-sm pl-2 text-gray-600 dark:text-gray-400 cursor-pointer" @click="closeModal()">Dismiss</span>
                    </div>
                </div>
            </div>

            <!--code for notification ends-->
        </div>
    </div>
</template>

<script>
export default {
    name: "ColoredWithMultipleActionTwo",
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
