<template>
  <div class="container">
    <div class="columns pad">
      <div class="column is-5">
        <Title/>
      </div>
      <div class="column is-7">
        <InputForm/>
      </div>
    </div>
  </div>
</template>

<style>
.pad {
  padding-top: 2%;
  padding-bottom: 4%;
}
</style>


<script>
import InputForm from "@/components/InputForm.vue";
import Title from "@/components/Title.vue";

export default {
  name: "Banner",
  components: {
    InputForm,
    Title
  }
};
</script>
