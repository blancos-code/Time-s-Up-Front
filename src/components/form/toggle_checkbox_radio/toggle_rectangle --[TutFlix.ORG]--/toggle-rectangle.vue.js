<template>
    <div class="mx-auto py-12 flex flex-col items-center">
        <!-- Code block starts -->
        <div class="cursor-pointer my-5 rounded relative shadow-sm">
            <input type="checkbox" name="toggle" id="toggle1" class="focus:outline-none checkbox w-6 h-6 rounded bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
            <label for="toggle1" class="toggle-label block w-16 h-8 overflow-hidden rounded bg-gray-300 dark:bg-gray-700 cursor-pointer"></label>
        </div>
        <!-- Code block ends -->

        <!-- Code block starts -->
        <div class="cursor-pointer my-5 relative shadow-sm">
            <input checked type="checkbox" name="toggle" id="toggle2" class="focus:outline-none checkbox w-6 h-6 rounded bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
            <label for="toggle2" class="toggle-label block w-16 h-8 overflow-hidden rounded bg-gray-300 dark:bg-gray-700 cursor-pointer"></label>
        </div>
        <!-- Code block ends -->
    </div>
</template>

<script>
export default {
    name: "ToggleRectangle",
};
</script>

<style>
.checkbox:checked {
    /* Apply class right-0*/
    right: 0;
}
.checkbox:checked + .toggle-label {
    /* Apply class bg-indigo-700 */
    background-color: #4c51bf;
}
</style>
