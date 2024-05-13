<template>
  <body style="min-height: 250px">
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
        class="
          md:container
          md:mx-auto
          w-11/12
          md:w-2/3
          max-w-lg
          flex
          justify-center
          pl-4
        "
      >
        <div
          class="
            relative
            w-80
            sm:w-96
            rounded-lg
            shadow-lg
            dark:bg-gray-800
            bg-white
            pt-6
          "
        >
          <div class="flex flex-col px-6 pb-7">
            <p
              class="
                text-lg
                font-bold
                leading-none
                mb-3
                text-gray-800
                dark:text-gray-100
                leading-5
              "
            >
              Spread the word about us!
            </p>
            <p
              class="
                text-xs
                font-medium
                leading-3
                text-gray-500
                dark:text-gray-400
              "
            >
              The wait is over. Our sale is now live. Go get it
            </p>
          </div>
          <div class="flex items-center w-full rounded-bl-md">
            <button
              class="
                py-3
                md:px-12
                flex
                items-center
                rounded-bl-md
                justify-center
                w-1/3
                bg-blue-800
                hover:bg-opacity-80
                focus:outline-none
              "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                  fill="#F3F4F6"
                />
              </svg>
            </button>
            <button
              class="
                py-3
                md:px-12
                flex
                items-center
                justify-center
                w-1/3
                bg-blue-500
                hover:bg-opacity-80
                focus:outline-none
              "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.162 5.65593C21.3986 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4804 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75097 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.3449 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.264 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.23009 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                  fill="#F3F4F6"
                />
              </svg>
            </button>
            <button
              class="
                py-3
                md:px-12
                flex
                rounded-br-md
                items-center
                justify-center
                w-1/3
                bg-red-700
                hover:bg-opacity-80
                focus:outline-none
              "
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.37 2.09408C10.9772 1.76493 8.54622 2.31263 6.5258 3.63604C4.50538 4.95944 3.03202 6.96918 2.37777 9.29414C1.72353 11.6191 1.93258 14.1023 2.96634 16.2851C4.00009 18.468 5.78873 20.2031 8.00197 21.1701C7.94212 20.4019 7.99706 19.6291 8.16497 18.8771C8.34997 18.0381 9.46097 13.4141 9.46097 13.4141C9.23974 12.9182 9.12918 12.38 9.13697 11.8371C9.13697 10.3521 9.99397 9.24408 11.06 9.24408C11.2515 9.24129 11.4413 9.27977 11.6166 9.35691C11.792 9.43404 11.9486 9.54802 12.0759 9.6911C12.2032 9.83418 12.2983 10.003 12.3545 10.1861C12.4108 10.3691 12.427 10.5622 12.402 10.7521C12.402 11.6521 11.824 13.0141 11.522 14.2921C11.4623 14.5265 11.4585 14.7716 11.5109 15.0077C11.5633 15.2438 11.6705 15.4643 11.8237 15.6514C11.977 15.8385 12.172 15.987 12.3932 16.0849C12.6144 16.1828 12.8554 16.2274 13.097 16.2151C14.995 16.2151 16.267 13.7841 16.267 10.9141C16.267 8.71408 14.81 7.06608 12.124 7.06608C11.4813 7.04111 10.8404 7.147 10.2399 7.37733C9.63946 7.60766 9.09209 7.95762 8.63102 8.40597C8.16996 8.85431 7.80483 9.39168 7.5578 9.98545C7.31076 10.5792 7.18698 11.217 7.19397 11.8601C7.16534 12.5734 7.39548 13.273 7.84197 13.8301C7.92541 13.8924 7.98633 13.9801 8.01555 14.08C8.04477 14.1799 8.04071 14.2867 8.00397 14.3841C7.95797 14.5681 7.84197 15.0071 7.79597 15.1681C7.7864 15.2227 7.76415 15.2743 7.731 15.3187C7.69784 15.3631 7.65472 15.3991 7.6051 15.4238C7.55549 15.4486 7.50076 15.4613 7.44533 15.461C7.3899 15.4607 7.33531 15.4473 7.28597 15.4221C5.90197 14.8681 5.24997 13.3451 5.24997 11.6061C5.24997 8.75908 7.63397 5.35108 12.404 5.35108C16.2 5.35108 18.724 8.12808 18.724 11.0981C18.724 15.0071 16.547 17.9461 13.33 17.9461C12.8492 17.9614 12.3722 17.8553 11.9433 17.6375C11.5144 17.4198 11.1473 17.0973 10.876 16.7001C10.876 16.7001 10.298 19.0161 10.184 19.4541C9.95127 20.2108 9.60788 20.9289 9.16497 21.5851C10.088 21.8651 11.047 22.0051 12.011 22.0011C13.3246 22.0021 14.6254 21.7441 15.8391 21.2417C17.0528 20.7392 18.1555 20.0024 19.084 19.0732C20.0126 18.144 20.7487 17.0408 21.2502 15.8268C21.7518 14.6127 22.0089 13.3117 22.007 11.9981C22.0057 9.58308 21.1308 7.25007 19.5436 5.42986C17.9564 3.60964 15.7643 2.42514 13.372 2.09508L13.37 2.09408Z"
                  fill="#F3F4F6"
                />
              </svg>
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


