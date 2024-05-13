<template>
  <body style="min-height: 540px">
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
      id="modal"
      ref="modal"
    >
      <div
        role="alert"
        class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
      >
        <div class="relative w-96 rounded bg-white dark:bg-gray-800 p-8 shadow">
          <p
            class="
              text-2xl
              font-bold
              leading-normal
              dark:text-gray-100
              text-gray-800
            "
          >
            Notifications
          </p>
          <p
            class="text-sm leading-5 mt-3 mb-5 text-gray-600 dark:text-gray-300"
          >
            Select whether you want to get notified about new promotions and
            offers.
          </p>
          <p
            class="
              text-base
              font-bold
              leading-none
              text-gray-800
              dark:text-gray-100
            "
          >
            Get a notification?
          </p>
          <div
            class="
              mt-7
              mb-8
              text-sm
              font-medium
              leading-none
              text-gray-800
              dark:text-gray-100
            "
          >
            <label for="yes" class="flex items-center cursor-pointer">
              <input
                type="radio"
                name="consent"
                checked
                class="w-4 h-4 mr-2"
                id="yes"
              />
              news about notification
            </label>
            <label for="no" class="flex items-center cursor-pointer mt-4">
              <input type="radio" name="consent" class="w-4 h-4 mr-2" id="no" />
              I don’t want to get notified
            </label>
          </div>
          <div class="flex items-center justify-between">
            <p
              class="
                text-sm
                font-semibold
                leading-none
                text-indigo-700
                dark:text-indigo-600
                cursor-pointer
              "
            >
              Learn more
            </p>
            <button
              class="
                focus:outline-none
                hover:bg-opacity-80
                dark::bg-indigo-600
                px-7
                py-4
                bg-indigo-700
                rounded
                text-sm
                font-semibold
                leading-none
                text-gray-100
              "
            >
              Get Started
            </button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type="radio"]:checked:after {
  margin: 3px;
  width: 10px;
  height: 10px;
  border-radius: 15px;
  position: relative;
  background-color: #4338ca;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 1px solid #4338ca;
}
</style>

