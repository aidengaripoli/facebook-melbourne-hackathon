<template>
  <div id="app">
    <div class="background">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  color: #ffffff;
}

#nav a {
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.background {
  background-image: url("/assets/skyline.jpg");
  background-color: #cccccc;
  background-size: cover;
}
</style>
