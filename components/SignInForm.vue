<template>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div class="px-6 py-12 sm:rounded-lg sm:px-12 bg-neutral-400 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <div class="flex justify-between items-center">
              <div></div>
              <h2 class="text-center font-semibold text-xl tracking-wide">Sign In</h2>
              <ThemeToggle />
            </div>
            <div class="text-center">
                <nuxt-link to="/signup" class="text-sm font-semibold">Don't have an account? <span className="text-green-700 cursor-pointer hover:text-green-800">Sign up</span> as a customer.</nuxt-link>
            </div>
            <form @submit.prevent="validateSignIn">
            <div class="mb-4">
                <label for="username" class="block text-sm font-medium leading-6 mb-1">Username</label>
                <input autocomplete="username" id="username" type="text" v-model="username" class="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-500 shadow-sm focus:outline-green-950 sm:text-sm sm:leading-6" />
                <p v-if="usernameError" class="text-red-600 text-sm">{{ usernameError }}</p>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium leading-6 mb-1">Email</label>
                <input autocomplete="email" id="email" type="email" v-model="email" class="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-500 shadow-sm focus:outline-green-950 sm:text-sm sm:leading-6" />
                <p v-if="emailError" class="text-red-600 text-sm">{{ emailError }}</p>
            </div>
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium leading-6 mb-1">Password</label>
                <input autocomplete="current-password" id="password" type="password" v-model="password" class="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-500 shadow-sm focus:outline-green-950 sm:text-sm sm:leading-6" />
                <p v-if="passwordError" class="text-red-600 text-sm">{{ passwordError }}</p>
            </div>
            <div class="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                    <input type="checkbox" v-model="rememberMe" class="h-4 w-4 rounded border-green-950 text-green-950 accent-green-700" />
                    <label for="remember-me" class="ml-3 block text-sm leading-6">Remember me</label>
                </div>
            </div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-gradient-to-r from-green-800 to-green-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:from-gray-400 hover:to-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950">Sign In</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      rememberMe: false,
      usernameError: '',
      emailError: '',
      passwordError: '',
    };
  },
  methods: {
    validateSignIn() {
      this.emailError = '';
      this.passwordError = '';
      this.usernameError = '';

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.emailError = 'Invalid email address';
      }

      if (this.password.length < 6) {
        this.passwordError = 'Password must be at least 6 characters long';
      }

      if (this.username < 1) {
          this.usernameError = 'Please provide a username';
      }

      if (!this.emailError && !this.passwordError && !this.usernameError) {
        this.signIn();
      }
    },
    async signIn() {
      try {
        // Handle sign in logic
        console.log('Signed in with:',this.username, this.email, this.password, 'Remember Me:', this.rememberMe);
        // Redirect to dashboard or another page
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Error during sign in:', error);
      }
    },
  },
};
</script>