<template>
  <div
    class="columns is-vcentered"
    style="padding-left: 7%; padding-right:15%; margin-top: 0.75rem;"
  >
    <div class="column" style="padding-right:5%">
      <div class="title is-4" v-if="event.time">{{event.time[0]}}</div>
      <div class="title is-4">-</div>
      <div class="title is-4" v-if="event.time">{{event.time[1]}}</div>
    </div>
    <div class="card column is-10 is-paddingless">
      <div class="card-content is-paddingless">
        <div class="columns is-marginless">
          <div class="column" style="padding: 20px">
            <h1 class="title is-4">{{event.name}}</h1>
            <i>{{eventDesc}}</i>
            <p v-if="event.address">{{event.address}}</p>
            <a v-if="event.website" :href="event.website">Website</a>
            <br>
            <b v-if="event.rating">Rating: {{event.rating}}/5</b>
          </div>
          <div class="column is-paddingless">
            <figure class="image is-square">
              <img :src="event.photo" alt="Placeholder image">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: {},
    eventDesc: String
  }
};
</script>
