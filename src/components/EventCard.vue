<template>
  <div
    class="columns is-vcentered"
    style="padding-left: 12%; padding-right:20%; margin-top: 0.75rem;"
  >
    <div class="column">
      <p>{{event.time[0]}}</p>-
      <p>{{event.time[1]}}</p>
    </div>
    <div class="card column is-10 is-paddingless">
      <div class="card-content is-paddingless">
        <div class="columns is-marginless">
          <div class="column" style="padding: 20px">
            <h1 class="title is-4">{{event.name}}</h1>
            <i>{{eventDesc}}</i>
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

<style>
.times {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}
</style>

<script>
export default {
  name: "EventCard",
  props: {
    event: {},
    eventDesc: String
  }
};
</script>
