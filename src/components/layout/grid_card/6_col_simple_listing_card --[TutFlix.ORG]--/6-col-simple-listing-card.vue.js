<template>
    <div class="bg-gray-200 dark:bg-gray-900 py-10">
        <div class="container mx-auto px-6 flex items-start justify-center">
            <div class="w-full md:w-1/2">
                <!-- Card is full width. Use in 6 col grid for best view. -->
                <!-- Card code block start -->
                <div class="mx-auto bg-white dark:bg-gray-800 shadow rounded w-full">
                    <div class="py-6 pl-8 border-b border-gray-300 dark:border-gray-200">
                        <p class="font-bold text-lg text-gray-800 dark:text-gray-100">Job Postings</p>
                    </div>
                    <div class="xl:flex lg:flex md:flex py-6 px-8 border-b border-gray-300 dark:border-gray-200">
                        <div class="xl:w-3/6 lg:w-3/6 md:w-3/6 mb-4 xl:mb-0 lg:mb-0 md:mb-0">
                            <p class="text-lg text-gray-800 dark:text-gray-100 mb-2 font-normal">Backend Developer</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400 font-normal">In: Engineering&nbsp;&nbsp;Location: Remote</p>
                        </div>
                        <div class="xl:w-3/6 lg:w-3/6 md:w-3/6 flex justify-end flex-col xl:items-end lg:items-end md:items-end items-start">
                            <div class="bg-green-200 h-6 w-20 mb-2 rounded-md flex items-center justify-center">
                                <span class="text-xs text-green-500 font-normal">Part Time</span>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-400 font-normal">Closing on 28 March, 2020</p>
                        </div>
                    </div>
                    <div class="xl:flex lg:flex md:flex py-6 px-8 border-b border-gray-300 dark:border-gray-200">
                        <div class="xl:w-3/6 lg:w-3/6 md:w-3/6 mb-4 xl:mb-0 lg:mb-0 md:mb-0">
                            <p class="text-lg text-gray-800 dark:text-gray-100 mb-2 font-normal">Video Animator</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400 font-normal">In: Engineering&nbsp;&nbsp;Location: Remote</p>
                        </div>
                        <div class="xl:w-3/6 lg:w-3/6 md:w-3/6 flex justify-end flex-col xl:items-end lg:items-end md:items-end items-start">
                            <div class="bg-green-200 h-6 w-20 mb-2 rounded-md flex items-center justify-center">
                                <span class="text-xs text-green-500 font-normal">Part Time</span>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-400 font-normal">Closing on 28 March, 2020</p>
                        </div>
                    </div>
                    <div class="xl:flex lg:flex md:flex py-6 px-8">
                        <div class="xl:w-3/6 lg:w-3/6 md:w-3/6 mb-4 xl:mb-0 lg:mb-0 md:mb-0">
                            <p class="text-lg text-gray-800 dark:text-gray-100 mb-2 font-normal">Frontend Engineer</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400 font-normal">In: Engineering&nbsp;&nbsp;Location: Remote</p>
                        </div>
                        <div class="xl:w-3/6 lg:w-3/6 md:w-3/6 flex justify-end flex-col xl:items-end lg:items-end md:items-end items-start">
                            <div class="bg-green-200 h-6 w-20 mb-2 rounded-md flex items-center justify-center">
                                <span class="text-xs text-green-500 font-normal">Part Time</span>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-400 font-normal">Closing on 28 March, 2020</p>
                        </div>
                    </div>
                </div>
                <!-- Card code block end -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SixColSimpleListingCard",
};
</script>
