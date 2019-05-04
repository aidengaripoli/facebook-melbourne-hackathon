<template>
  <div class="output">
    <div class="slideshow-container" v-for="day in dayPlans" v-bind:key="day.dayNumber">
        <div class="mySlides fade" v-for="event in day.dayEvents" v-bind:key="event.eventId">
          <OutputEventCard
            :eventName="event.eventName"
            :eventStartDateTime="event.eventStartDateTime"
            :eventEndDateTime="event.eventEndDateTime"
            :eventDesc="event.eventDesc"
            :eventTags="event.eventTags"/>
        </div>
    </div>
    <br>
  </div>
</template>

<script>
import OutputEventCard from '@/components/OutputEventCard.vue'

export default {
  name: 'output',
  components: {
    OutputEventCard
  },
  data() {
    return {
        dayPlans: [
          {
            dayEvents: [
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
          },
          {
            dayEvents: [
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
          }
        ]
    };
  }
}
</script>
