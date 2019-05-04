<template>
  <div class="column" style="padding-left: 20%; padding-right:20%">
    <div class="card">
      <div class="card-content">
        <div class="columns">
          <div class="column">
            <h1 class="title is-4">{{eventName}}</h1>
            <div class="tags" v-for="tag in eventTags" v-bind:key="tag">
              <span class="tag is-dark">{{tag}}</span>
            </div>
            <b>{{eventDesc}}</b>
            <br>Start Time:
            <time datetime="eventStartDateTime">{{eventStartDateTime}}</time>
            <br>End Time:
            <time datetime="eventEndDateTime">{{eventEndDateTime}}</time>
          </div>
          <div class="column">
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
