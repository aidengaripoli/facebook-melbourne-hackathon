<template>
<div class="columns is-centered">
  <div class="column is-half">
    <div class="card large">
      <div class="card-image">
        <figure class="image is-square">
          <img src="http://mannum.org.au/content/images/Haythorpe%20Mannum.jpg" alt="Placeholder image">
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
    <i class="arrow down"></i>
    <br>
    <i class="arrow down"></i>
    <br>
    <i class="arrow down"></i>
    <br>
    <i class="arrow down"></i>
    <br>
    <i class="arrow down"></i>
  </div>
</div>
</template>

<style>
i {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
</style>

<script>
export default {
  name: 'OutputEventCard',
  props: {
    eventName: String,
    eventStartDateTime: String,
    eventEndDateTime: String,
    eventDesc: String,
    eventTags: Array
  }
}
</script>
