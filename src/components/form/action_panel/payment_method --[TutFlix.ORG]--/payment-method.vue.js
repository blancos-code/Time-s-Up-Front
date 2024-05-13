<template>
    <div class="py-6 w-full h-full bg-gray-200">
        <div class="container mx-auto">
            <div class="xl:w-5/12 w-11/12 mx-auto mb-4 my-6 md:w-2/3 shadow sm:px-10 px-4 py-6 bg-white rounded-md">
                <p class="text-lg text-gray-800 font-semibold mb-4">Your Payment Method</p>
                <div class="flex bg-gray-100 rounded-md relative">
                    <div class="flex">
                        <div class="px-4 py-6 border-r border-gray-200">
                            <svg width="49" height="38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <image x="55" y="80" width="49" height="38" href="https://tuk-cdn.s3.amazonaws.com/assets/master.png" transform="translate(-55 -80)" fill="none" fill-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="flex flex-col justify-center pl-3">
                            <p class="text-sm font-bold pb-1">Ending with 4242</p>
                            <div class="flex flex-col sm:flex-row items-start sm:items-center">
                                <p class="text-xs leading-5">Expires 06/21 &nbsp; - &nbsp;</p>
                                <p class="text-xs leading-5">Last updated on 14 March 2020</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-5 absolute inset-0 m-auto mt-2 sm:mt-4 mr-2 sm:mr-4 sm:right-0 text-indigo-500 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3"></path>
                            <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3"></path>
                            <line x1="16" y1="5" x2="19" y2="8"></line>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaymentMethod",
};
</script>
