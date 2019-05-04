<template>
  <div class="column">
    <div class="card large">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="https://allthatsinteresting.com/wordpress/wp-content/uploads/2015/12/white-jesus.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media-content">
          <div class="content">
            <h1 class="title is-4">{{eventName}}</h1>
            <div class="tags" v-for="tag in eventTags" v-bind:key="tag">
              <span class="tag is-dark">{{tag}}</span>
            </div>
            <b>{{eventDesc}}</b>
            <br>
            Start Time: <time datetime="eventStartDateTime">{{eventStartDateTime}}</time>
            <br>
            End Time: <time datetime="eventEndDateTime">{{eventEndDateTime}}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    eventName: String,
    eventStartDateTime: String,
    eventEndDateTime: String,
    eventDesc: String,
    eventTags: Array
  }
}
</script>
