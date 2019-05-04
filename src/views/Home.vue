<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Input msg="we did it reddit!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from "@/components/Input.vue";

export default {
  name: "home",
  components: {
    Input
  }
};
</script>
