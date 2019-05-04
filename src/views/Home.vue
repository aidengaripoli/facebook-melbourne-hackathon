<template>
  <div>
    <div class="background">
      <Banner @submit="submit" />
    </div>
    <div class="section">
      <div v-for="(day, index) in plan" class="container" :key="index">
        <div class="card">
          <div class="card-body">
            {{ day.lunch.name }}
            {{ day.middayevent.name }}
            {{ day.dinner.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.background {
  background-image: url("../assets/skyline.jpg");
  background-color: #cccccc;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.3);
  background-blend-mode: multiply;
}
</style>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import axios from 'axios'

export default {
  name: "home",
  data () {
    return {
      plan: {}
    }
  },
  components: {
    Banner
  },
  methods: {
    submit(submission) {
      console.log(submission)
      axios.post('http://localhost:3000/generate', submission).then(res => {
        this.plan = res.data.plan
      }).catch(err => {
        console.log(err)
      })
    }
  }
};
</script>
