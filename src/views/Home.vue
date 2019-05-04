<template>
  <div>
    <div class="background" style="padding-top: 3%">
      <Banner :isLoading="isLoading" @submit="submit"/>
    </div>

    <div v-if="isLoading">
      <div class="notification is-link">Curating your trip...</div>
    </div>

    <div v-if="plan[0]" class="events">
      <h1 v-if="hotel" class="title" style="padding-top: 3%">Accommodation</h1>

      <HotelCard
        v-if="hotel"
        :hotel="hotel"
        hotelDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      <carousel :perPage="1">
        <slide v-for="(day, index) in plan" :key="index" style="margin-bottom: 3%">
          <h1 class="title" style="padding-top: 3%">
            {{ day.date | formatDate }}
            <img v-if="day.weather == 'rainy'" src="../assets/rainy.png">
            <img v-else src="../assets/sunny.png">
          </h1>
          <EventCard
            :event="day.morningevent"
            eventDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />|
          <br>|
          <br>|
          <br>|
          <br>
          <EventCard
            :event="day.lunch"
            eventDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />|
          <br>|
          <br>|
          <br>|
          <br>
          <EventCard
            :event="day.middayevent"
            eventDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />|
          <br>|
          <br>|
          <br>|
          <br>
          <EventCard
            :event="day.dinner"
            eventDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
        </slide>
      </carousel>
    </div>
    <div v-else style="margin-top: 30px">
      <p v-if="!isLoading">Please submit a criteria</p>
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
import HotelCard from "@/components/HotelCard.vue";
import axios from "axios";
import moment from "moment";

export default {
  name: "home",
  data() {
    return {
      plan: {},
      hotel: {},
      isLoading: false
    };
  },
  components: {
    Banner,
    EventCard,
    HotelCard
  },
  methods: {
    submit(submission) {
      this.plan = {};
      this.isLoading = true;
      axios
        .post("http://localhost:3000/generate", submission)
        .then(res => {
          this.plan = res.data.plan;
          this.hotel = res.data.hotel;
          console.log(this.plan);
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
          axios
            .post("http://localhost:3000/generate", submission)
            .then(res => {
              this.plan = res.data.plan;
              this.hotel = res.data.hotel;
              console.log(this.plan);
              this.isLoading = false;
            })
            .catch(err => {
              this.isLoading = false;
              console.log(err);
            });
        });
    }
  },
  filters: {
    formatDate(d) {
      return moment(d).format("dddd, MMMM Do");
    }
  }
};
</script>
