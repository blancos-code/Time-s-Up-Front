<template>
    <div class="bg-gray-300 min-h-screen">
        <div class="flex items-center justify-center py-8 px-4">
            <div class="bg-white md:w-96 rounded px-5 pt-3 pb-4 w-full shadow flex flex-col items-center justify-center">
                <img src="https://i.ibb.co/3k97G48/card-1.png" alt="empty" />
                <p class="text-sm leading-4 mt-3 text-center text-gray-800">Looks kinda empty here</p>
                <button class="flex items-center justify-center px-8 py-3 bg-indigo-700 hover:bg-indigo-600 rounded mt-5">
                    <p class="text-sm font-medium leading-none text-center text-white">Add Widget</p>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>
