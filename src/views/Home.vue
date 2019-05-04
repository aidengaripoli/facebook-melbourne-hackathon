<template>
  <div>
    <div class="background" style="padding-top: 3%">
      <Banner @submit="submit"/>
    </div>

    <div v-if="plan[0]" class="events">
      <h1 class="title" style="padding-top: 3%">Accommodation</h1>

      <HotelCard
        v-if="hotel.name"
        :hotel="hotel"
        hotelDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />

      <carousel :perPage="1">
        <slide v-for="(day, index) in plan" :key="index" style="margin-bottom: 3%">
          <h1 class="title" style="padding-top: 3%">{{ day.date | formatDate }}</h1>
          <EventCard
            :event="day.morningevent"
            eventDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          |<br>|<br>|<br>|<br>
          <EventCard
            :event="day.lunch"
            eventDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          |<br>|<br>|<br>|<br>
          <EventCard
            :event="day.middayevent"
            eventDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          |<br>|<br>|<br>|<br>
          <EventCard
            :event="day.dinner"
            eventDesc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
        </slide>
      </carousel>
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
      hotel: {}
    };
  },
  components: {
    Banner,
    EventCard,
    HotelCard
  },
  methods: {
    submit(submission) {
      console.log(submission);
      axios
        .post("http://localhost:3000/generate", submission)
        .then(res => {
          this.plan = res.data.plan;
          this.hotel = res.data.hotel;
          console.log(this.plan);
          // console.log(res.data.hotel);
        })
        .catch(err => {
          console.log(err);
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
