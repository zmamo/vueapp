<template>
  <main class="flex">
    <section
      id="said-image"
      class="hidden md:block bg-gradient-to-r from-blue-400 via-green-300 to-pink-500 flex-1 h-screen"
    >
      <p class="text-3xl text-primary block text-left p-5">Skwila</p>
    </section>
    <!-- login section -->
    <section
      id="login-form"
      class="h-screen md:px-5 md:mx-auto flex-1 md:flex-none"
    >
      <p
        class="text-3xl font-bold text-primary block text-left p-5 pb-0 md:hidden"
      >
        Skwila
      </p>
      <div class="container px-5 pt-0 mx-auto">
        <span
          class="text-2xl md:text-3xl font-bold my-5 blok text-left block text-gray-400"
          title="Adventure starts here"
          >Adventure starts here
          <span class="transform delay-500 hover:rotate-45 focus:bg-blue-300"
            >🚀</span
          ></span
        >
        <p class="block md:w-3/4 text-left text-md">
          Make your app management easy and fun!
        </p>

        <form class="my-5 mt-0">
          <!-- start username field -->
          <div class="pt-2 flex items-start flex-col">
            <label
              for="username"
              title="username"
              class="text-sm block text-left text-gay-400"
              >Username
            </label>

            <div
              class="px-3 py-2 bg-white rounded w-full flex border focus:border-purple-500 focus:ring focus:shadow-lg"
            >
              <input
                type="text"
                class="bg-transparent w-full outline-none"
                id="username"
                placeholder="Jhon Snow"
                required
                name="username"
                title="username"
              />
              <span>
                <i class="fas fa-exclamation-circle text-red-300"></i>
              </span>
            </div>
            <p
              class="text-sm text-red-300 p-0 block text-left"
              v-if="validForm"
            >
              Invalid Username
            </p>
          </div>
          <!-- end username field -->
          <!--  start email field -->

          <div class="pt-3">
            <label for="email" title="email" class="block text-left text-black"
              >Email
            </label>

            <div
              class="px-3 py-2 bg-white rounded border flex focus:border-blue-500"
            >
              <input
                type="email"
                class="bg-transparent w-full outline-none"
                id="email"
                placeholder="exemple@exemple.com"
                required
                name="email"
                title="email"
              />
              <span>
                <i class="fas fa-exclamation-circle text-red-300"></i>
              </span>
            </div>
            <p
              class="text-sm text-red-300 p-0 block text-left"
              v-if="validForm"
            >
              Invalid Email
            </p>
          </div>
          <!--end email field -->

          <!--  start password field -->
          <div class="pt-2">
            <label for="password" class="text-sm block text-left text-black"
              >Password</label
            >
            <div
              class="px-2 py-1 bg-white rounded border flex focus:border-blue-500"
            >
              <input
                type="password"
                class="bg-transparent w-full outline-none inline focus:border-blue-400"
                id="password"
                placeholder=".........."
                required
                name="password"
                title="password"
              />
              <span>
                <i class="fas fa-exclamation-circle text-red-300"></i>
              </span>
              <span class="pointer-cursor ml-5">
                <i class="fas fa-eye"></i>
              </span>
              <!-- <i class="fas fa-eye-slash"></i> -->
            </div>
            <p
              class="text-sm text-red-300 p-0 block text-left"
              v-if="validForm"
            >
              Invalid Password
            </p>
          </div>
          <!--  end password field -->

          <!-- start privacy policy -->
          <div class="float-left my-2 flex items-center">
            <input type="checkbox" id="privacy-policy" />
            <label for="privacy-policy">
              &nbsp; &nbsp; &nbsp; I agree to
              <a class="text-primary">privacy policy & terms</a></label
            >
          </div>
          <!-- end privacy policy -->
          <!-- start button submit -->
          <div class="">
            <button
              @kilck="toggal"
              class="py-2 mb-3 w-full font-bold text-white bg-purple-300 text-whitey rounded hover:shadow-primary"
            >
              Register
            </button>
          </div>
          <!-- end button submit -->

          <!-- create new account -->
          <div class="w-full text-md my-4">
            <p>
              Already have an account?
              <router-link to="/login" class="text-primary">
                Sign in instead</router-link
              >
            </p>
          </div>
          <div class="relative">
            <span class="block chois-label">or</span>
            <!-- <span class="material-icons-outlined">fingerprint</span> -->
          </div>
          <div class="social-media w-60 mx-auto inline-block text-3xl mt-4">
            <i class="fab fa-facebook-square p-1"></i>
            <i class="fab fa-twitter-square p-1"></i>
            <i class="fas fa-envelope p-1"></i>
            <i class="fab fa-github-square p-1"></i>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      validForm: false,
    };
  },
  methods: {
    toggal($event) {
      $event.preventDefault();
      this.validForm = !this.validForm;
      console.log(this.validForm);
    },
  },
};
</script>


<style scoped>
.chois-label:before {
  content: "";
  position: absolute;
  width: 6rem;
  height: 1px;
  top: 0.6rem;
  left: 3rem;
  background-color: #000;
}
.chois-label:after {
  content: "";
  position: absolute;
  width: 6rem;
  height: 1px;
  top: 0.6rem;
  right: 3rem;
  background-color: #000;
}
</style>