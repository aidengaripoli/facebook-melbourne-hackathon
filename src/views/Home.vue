<template>
  <div>
    <div class="background">
      <Banner @submit="submit"/>
    </div>

    <div class="events" style="padding-top: 3%">
      <div v-for="(day, index) in plan" :key="index">
        <EventCard :eventName="day.lunch.name" eventDesc="Lunch"/>
        <i class="fas fa-arrow-down"></i>
        <EventCard :eventName="day.middayevent.name" eventDesc="Middayevent"/>
        <i class="fas fa-arrow-down"></i>
        <EventCard :eventName="day.dinner.name" eventDesc="dinner"/>
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
import EventCard from "@/components/EventCard.vue";
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      plan: {}
    };
  },
  components: {
    Banner,
    EventCard
  },
  methods: {
    submit(submission) {
      console.log(submission);
      axios
        .post("http://localhost:3000/generate", submission)
        .then(res => {
          this.plan = res.data.plan;
          console.log(this.plan);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
