<template>
  <div class="events">
    <div class="container eventContainer">
      <div class="row columns" v-for="event in eventList" v-bind:key="event.eventId">
        <EventCard
          :eventName="event.eventName"
          :eventStartDateTime="event.eventStartDateTime"
          :eventEndDateTime="event.eventEndDateTime"
          :eventDesc="event.eventDesc"
          :eventTags="event.eventTags"
        />
      </div>
    </div>
  </div>
</template>

<style>
.eventContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0.5em;
}

.card {
  height: max-content;
}
</style>

<script>
import EventCard from "@/components/EventCard.vue";

export default {
  name: "events",
  components: {
    EventCard
  },
  data() {
    return {
      eventList: [
        {
          eventId: 1,
          eventName: "Hackathon",
          eventStartDateTime: "2019-05-04 11:00",
          eventEndDateTime: "2019-05-05 12:00",
          eventDesc: "Fun with Friends!",
          eventTags: ["Group"]
        },
        {
          eventId: 2,
          eventName: "Smoking Darts with Mum",
          eventStartDateTime: "2019-05-05 12:30",
          eventEndDateTime: "2019-05-05 14:00",
          eventDesc: "Mum wants to go to the local servo and smash some darts.",
          eventTags: ["Single"]
        },
        {
          eventId: 3,
          eventName: "Shelving Pingas with Dad",
          eventStartDateTime: "2019-05-05 14:30",
          eventEndDateTime: "2019-05-05 15:30",
          eventDesc: "Big night ahead.",
          eventTags: ["Single"]
        }
      ]
    };
  }
};
</script>
