<template>
  <body style="min-height: 390px">
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
      <div
        role="alert"
        class="container mx-auto w-11/12 md:w-2/3 max-w-lg flex justify-center"
      >
        <div
          class="
            relative
            w-80
            rounded
            shadow-lg
            pt-8
            pb-6
            px-6
            dark:bg-gray-800
            bg-white
          "
        >
          <div class="flex flex-col items-center justify-center">
            <p
              class="
                text-lg
                font-bold
                leading-none
                text-gray-800
                dark:text-gray-100
              "
            >
              Do you like our Work?
            </p>
            <p
              class="
                mt-3
                mb-6
                text-sm
                leading-tight
                text-center text-gray-500
                dark:text-gray-400
              "
            >
              We work really hard to deliver you the best paper products
              available in Scranton, we would love to hear what you think about
              us!
            </p>
            <div class="flex justify-between items-center w-full">
              <button class="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                >
                  <path
                    d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z"
                    fill="#FACC15"
                  />
                </svg>
              </button>
              <button class="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                >
                  <path
                    d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z"
                    fill="#FACC15"
                  />
                </svg>
              </button>
              <button class="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                >
                  <path
                    d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z"
                    fill="#FACC15"
                  />
                </svg>
              </button>
              <button class="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                >
                  <path
                    d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z"
                    fill="#FACC15"
                  />
                </svg>
              </button>
              <button class="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                >
                  <path
                    d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z"
                    fill="#C4C4C4"
                  />
                </svg>
              </button>
            </div>
            <button
              class="
                px-14
                py-3
                bg-indigo-700
                dark:bg-indigo-600
                hover:bg-opacity-80
                focus:outline-none
                mt-8
                rounded
                text-xs
                font-semibold
                leading-3
                text-gray-100
              "
            >
              Submit
            </button>
          </div>
          <div
            class="
              cursor-pointer
              absolute
              top-0
              right-0
              m-3
              dark:text-gray-100
              text-gray-400 text-gray-600
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
    return {
      mobileMenu: true,
    };
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
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");
</style>


