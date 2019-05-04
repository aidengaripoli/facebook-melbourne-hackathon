<template>
  <div>
    <div class="background" style="padding-top: 3%">
      <Banner @submit="submit"/>
    </div>

    <div class="events">
      <div v-for="(day, index) in plan" :key="index" style="padding-top: 3%">
        <h1 class="title">Sunday 5th May</h1>
        <EventCard
          :event="day.lunch"
          eventDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conta"
        />
        <i class="fas fa-arrow-down" style="padding: 10px"></i>
        <EventCard
          :event="day.middayevent"
          eventDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conta"
        />
        <i class="fas fa-arrow-down"></i>
        <EventCard
          :event="day.dinner"
          eventDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets conta"
        />
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
