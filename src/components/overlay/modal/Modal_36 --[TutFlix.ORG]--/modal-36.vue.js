<template>
  <body style="min-height: 740px">
    <div
      class="
        py-12
        dark:bg-black
        bg-gray-700
        transition
        duration-150
        ease-in-out
        z-10
        absolute
        top-0
        right-0
        bottom-0
        left-0
      "
      ref="modal"
    >
      <div role="alert" class="container mx-auto flex justify-center px-4">
        <div
          class="
            relative
            bg-white
            dark:bg-gray-800
            w-80
            sm:w-full
            md:w-10/12
            lg:w-1/2
            xl:w-5/12
            shadow
            rounded
          "
        >
          <div class="sm:flex items-center">
            <img
              class="
                w-full
                h-56
                sm:h-auto
                object-cover object-center
                sm:w-auto
                rounded-tl rounded-tr
                sm:rounded-tr-none sm:rounded-bl
              "
              src="https://i.ibb.co/9Vr3R0M/Rectangle-138.png"
            />
            <div class="px-6 py-6">
              <p
                class="
                  text-2xl
                  font-bold
                  leading-5
                  text-gray-800
                  dark:text-gray-100
                "
              >
                Best Seller
              </p>
              <p
                class="
                  text-base
                  font-medium
                  leading-none
                  text-indigo-700
                  dark:text-indigo-600
                  py-4
                "
              >
                Our best sellers are back with a bang
              </p>
              <p class="text-sm leading-5 text-gray-600 dark:text-gray-300">
                621 components and 30 premium tailwind templates are being
                offered in such a small price. Go get it!
              </p>
              <div class="flex items-center justify-between pt-4">
                <button
                  class="
                    text-sm
                    font-medium
                    leading-none
                    text-gray-100
                    px-4
                    py-3
                    bg-indigo-700
                    dark:bg-indigo-600
                    hover:bg-opacity-80
                    rounded
                    focus:outline-none
                  "
                >
                  Pay now
                </button>
                <p
                  class="
                    text-xl
                    font-semibold
                    leading-tight
                    text-gray-800
                    dark:text-gray-100
                  "
                >
                  $189
                </p>
              </div>
            </div>
          </div>
          <div
            class="
              cursor-pointer
              absolute
              top-0
              right-0
              m-3
              text-gray-800
              dark:text-gray-100
              transition
              duration-150
              ease-in-out
            "
            @click="modalHandler()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Close"
              class="icon icon-tabler icon-tabler-x"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center py-12" id="button">
      <button
        class="
          focus:outline-none
          mx-auto
          transition
          duration-150
          ease-in-out
          hover:bg-indigo-600
          bg-indigo-700
          rounded
          text-white
          px-4
          sm:px-8
          py-2
          text-xs
          sm:text-sm
        "
        @click="modalHandler(true)"
      >
        Open Modal
      </button>
    </div>    
  </body>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    modalHandler(val) {
      let modal = this.$refs.modal;
      if (val) {
        fadeIn(modal);
      } else {
        fadeOut(modal);
      }
      function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
          if ((el.style.opacity -= 0.1) < 0) {
            el.style.display = "none";
          } else {
            requestAnimationFrame(fade);
          }
        })();
      }
      function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
          let val = parseFloat(el.style.opacity);
          if (!((val += 0.2) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
          }
        })();
      }
    },
  },
};
</script>

<style scoped>
</style>

