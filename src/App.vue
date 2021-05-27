<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Rejister</router-link> |
    </div> -->
    <div class="absolute right-0 top-0 m-5 z-10">
      <div class="rounded-full flex text-xl bg-white text-blue-400 overflow-hidden border border-blue-400">
        <router-link to="/login">
            <span class="hover:text-white hover:bg-blue-400 p-2 cursor-pointer ">Login
            </span>
        </router-link>
         <router-link to="/join-us">
            <span class="hover:text-white hover:bg-blue-400 p-2 cursor-pointer border-r  border-l border-blue-400">Nous Rejoinder
            </span>
        </router-link>
        <router-link to="/register">
          <span class="hover:text-white hover:bg-blue-400 p-2 cursor-pointer">register
          </span>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
