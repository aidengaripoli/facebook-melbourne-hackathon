<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="button is-primary">click me</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
