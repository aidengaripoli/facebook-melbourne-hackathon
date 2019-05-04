<template>
  <div
    class="columns is-vcentered"
    style="padding-left: 12%; padding-right:20%; margin-top: 0.75rem;"
  >
    <div class="column">
      <p>{{eventStartDateTime}}</p>-
      <p>{{eventEndDateTime}}</p>
    </div>
    <div class="card column is-10 is-paddingless">
      <div class="card-content is-paddingless">
        <div class="columns is-marginless">
          <div class="column" style="padding: 20px">
            <h1 class="title is-4">{{eventName}}</h1>
            <div class="tags" v-for="tag in eventTags" v-bind:key="tag">
              <span class="tag is-dark">{{tag}}</span>
            </div>
            <i>{{eventDesc}}</i>
          </div>
          <div class="column is-paddingless">
            <figure class="image is-square">
              <img
                src="http://mannum.org.au/content/images/Haythorpe%20Mannum.jpg"
                alt="Placeholder image"
              >
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
    eventName: String,
    eventStartDateTime: String,
    eventEndDateTime: String,
    eventDesc: String,
    eventTags: Array
  }
};
</script>
