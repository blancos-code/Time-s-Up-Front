<template>
  <body class="bg-gray-300 px-4">
        <div class="py-8 w-full flex items-center justify-center">
            <div class="lg:w-4/12 md:w-7/12 w-full bg-white shadow rounded">
                <div class="border-b border-gray-200 p-6 md:flex items-center justify-between">
                    <p tabindex="0" class="focus:outline-none text-2xl font-medium leading-6 text-gray-800">Shift Monitor</p>
                    <div class=" md:pt-0 pt-4">
                        <button class="text-sm leading-none text-indigo-700 p-3 bg-indigo-100 rounded focus:outline-none">Pending</button>
                        <button class="text-sm leading-none text-gray-600 p-3 bg-transparent hover:bg-indigo-100 focus:bg-indigo-100 hover:text-indigo-700 focus:text-indigo-700 rounded focus:outline-none ml-4">Completed</button>
                    </div>
                </div>
                <div class="p-6 border-b border-gray-200">
                    <div class="md:flex justify-between">
                        <div class="w-1/2">
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal text-gray-500">Name</p>
                            <div class="pt-5 flex items-center">
                                <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div class="pl-4">
                                    <p tabindex="0" class="focus:outline-none text-sm font-medium leading-5 text-gray-800">Richard Dawn</p>
                                    <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-2 text-gray-500">Customer Support</p>
                                </div>
                            </div>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-9 text-gray-500">Contact Number</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-5 text-gray-800">+21 7462819</p>
                        </div>
                        <div class="w-1/2 md:pl-12 md:pt-0 pt-4">
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal text-gray-500">Time & Place</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-5 text-gray-800">09:00 AM - 05:00PM</p>
                            <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-2 text-gray-500">7th Street Store</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-9 text-gray-500">Status</p>
                            <p tabindex="0" class="focus:outline-none text-sm font-bold leading-normal text-green-700 pt-5">Active</p>
                        </div>
                    </div>
                </div>
                <div class="p-6 border-b border-gray-200">
                    <div class="md:flex justify-between">
                        <div class="w-1/2">
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal text-gray-500">Name</p>
                            <div class="pt-5 flex items-center">
                                <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div class="pl-4">
                                    <p tabindex="0" class="focus:outline-none text-sm font-medium leading-5 text-gray-800">Saul Bandon</p>
                                    <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-2 text-gray-500">Customer Support</p>
                                </div>
                            </div>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-9 text-gray-500">Contact Number</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-5 text-gray-800">+21 7462819</p>
                        </div>
                        <div class="w-1/2 md:pl-12 md:pt-0 pt-4">
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal text-gray-500">Time & Place</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-5 text-gray-800">09:00 AM - 05:00PM</p>
                            <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-2 text-gray-500">7th Street Store</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-9 text-gray-500">Status</p>
                            <p tabindex="0" class="focus:outline-none text-sm font-bold leading-normal text-yellow-700 pt-5">Waiting</p>
                        </div>
                    </div>
                </div>
                <div class="p-6">
                    <div class="md:flex justify-between">
                        <div class="w-1/2">
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal text-gray-500">Name</p>
                            <div class="pt-5 flex items-center">
                                <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div class="pl-4">
                                    <p tabindex="0" class="focus:outline-none text-sm font-medium leading-5 text-gray-800">Saul Bandon</p>
                                    <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-2 text-gray-500">Customer Support</p>
                                </div>
                            </div>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-9 text-gray-500">Contact Number</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-5 text-gray-800">+21 7462819</p>
                        </div>
                        <div class="w-1/2 md:pl-12 md:pt-0 pt-4">
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal text-gray-500">Time & Place</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-5 text-gray-800">09:00 AM - 05:00PM</p>
                            <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-2 text-gray-500">7th Street Store</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-normal pt-9 text-gray-500">Status</p>
                            <p tabindex="0" class="focus:outline-none text-sm font-bold leading-normal text-red-700 pt-5">Cancelled</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {
        show: null
    };
  },
  methods: {    
  },
  mounted() {},
};
</script>

<style>
.checkbox:checked + .check-icon {
    display: flex;
}
</style>    
