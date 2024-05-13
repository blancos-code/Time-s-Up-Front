<template>
    <div class="w-full bg-gray-200 dark:bg-gray-900 py-10">
        <div class="container mx-auto px-6 flex items-start justify-center">
            <div class="w-full md:w-1/2 lg:w-1/4">
                <!-- Card is full width. Use in 4 col grid for best view. -->
                <!-- Card code block start -->
                <div class="bg-white dark:bg-gray-800 shadow rounded">
                    <div class="pt-4 px-4 flex items-center justify-between pb-8">
                        <p class="text-indigo-700 dark:text-indigo-600 font-normal text-xs">UX Design</p>
                        <div class="flex items-center">
                            <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                            </svg>
                            <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                            </svg>
                            <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                            </svg>
                            <svg class="w-3 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                            </svg>
                            <svg class="w-3 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                            </svg>
                        </div>
                    </div>
                    <div class="flex justify-center w-full mb-3">
                        <div class="w-16 h-16 rounded border border-white dark:border-gray-700 shadow">
                            <img class="w-full h-full overflow-hidden object-cover rounded" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_2.png" alt="placeholder image" />
                        </div>
                    </div>
                    <h5 class="mb-2 text-base text-gray-800 dark:text-gray-100 leading-4 font-normal tracking-normal text-center">Jackson Teller</h5>
                    <p class="mb-4 text-sm text-gray-600 dark:text-gray-400 leading-3 font-normal tracking-normal text-center">Senior UX Designer</p>
                    <div class="flex justify-center w-full mb-6">
                        <p class="py-2 px-5 bg-indigo-700 rounded-full leading-4 flex justify-center items-center text-sm leaing-3 text-white">Professional</p>
                    </div>
                    <div class="flex items-center justify-center mb-2 mx-4">
                        <div class="bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-400 text-xs leading-3 text-center tracking-normal p-2">UX Research</div>
                        <div class="ml-2 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-400 text-xs leading-3 text-center tracking-normal p-2">Product Strategy</div>
                    </div>
                    <div class="flex items-center justify-center mb-5 mx-4">
                        <div class="bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-400 text-xs leading-3 tracking-normal text-center p-2">UX Research</div>
                        <div class="ml-2 bg-gray-200 dark:bg-gray-700 rounded text-gray-600 dark:text-gray-400 text-xs leading-3 tracking-normal text-center p-2">Product Strategy</div>
                    </div>
                    <p class="flex justify-center py-4 text-gray-600 dark:text-gray-400 cursor-pointer hover:bg-indigo-700 rounded-b hover:text-white text-sm border-t dark:border-gray-200 border-gray-300 tracking-normal">View Profile</p>
                </div>
                <!-- Card code block end -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThreeColUserProfileCard",
    data() {
        return {
            profilePhoto: "https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_2.png",
        };
    },
};
</script>
