<template>
  <body style="min-height: 540px">
        <div class="py-12 dark:bg-black bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" ref="modal" id="modal">
            <div role="alert" class="container mx-auto w-full sm:w-11/12 md:w-2/3 max-w-lg flex justify-center px-4">
                <div class="relative w-96 bg-white dark:bg-gray-800 shadow px-4 md:px-8 py-8 bg-indigo-700 dark:bg-indigo-600 rounded">
                    <p class="text-base sm:text-xl md:text-2xl font-bold leading-6 text-gray-100">Get in touch with us</p>
                    <p class="md:w-10/12 text-xs sm:text-sm leading-5 text-gray-100 mt-2 md:mt-4 mb-4 md:mb-6">Get yourself ready for the whole new collection of premium and attractive products made just for you.</p>
                    <div class="flex items-center text-xs font-medium leading-3 text-gray-100 pl-4 bg-white bg-opacity-50 dark:bg-indigo-800 dark:border-indigo-800 border border-white rounded">
                        <input class="py-3 bg-transparent w-full pr-4 sm:w-10/12 placeholder-white focus:outline-none" type="email" placeholder="Enter your email" />
                        <button class="border-l py-2.5 px-4 focus:outline-none">Subscribe</button>
                    </div>
                    <div class="cursor-pointer absolute top-0 right-0 m-3 text-gray-100 transition duration-150 ease-in-out" @click="modalHandler()">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Close" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center py-12" id="button">
            <button class="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" @click="modalHandler(true)">Open Modal</button>
        </div>
    </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {
      show: true,
    };
  },
  methods: {
    modalHandler(val) {
      let modal = this.$refs.modal;
      if (val) {
        this.fadeIn(modal);
      } else {
        this.fadeOut(modal);
      }
    },
    fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    },
    fadeIn(el, display) {
      el.style.opacity = 0;
      el.style.display = display || "block";
      (function fade() {
        let val = parseFloat(el.style.opacity);
        if (!((val += 0.2) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
        }
      })();
    },
  },
};
</script>

<style>
</style>
