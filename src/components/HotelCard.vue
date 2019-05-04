<template>
  <div
    class="columns is-vcentered"
    style="padding-left: 15%; padding-right:15%; margin-top: 0.75rem;"
  >
    <div class="card column is-paddingless">
      <div class="card-content is-paddingless">
        <div class="columns is-marginless">
          <div class="column" style="padding: 20px">
            <h1 class="title is-4">{{hotel.name}}</h1>
            <i>{{hotelDesc}}</i>
            <br>
            <a v-if="hotel.website" :href="hotel.website">Website</a>
            <br>
            <b v-if="hotel.nights">Nights: {{hotel.nights}}</b>
            <br>
            <b v-if="hotel.rating">Rating: {{hotel.rating}}/5</b>
          </div>
          <div class="column is-paddingless">
            <figure class="image is-square">
              <img
                :src="hotel.photo"
                alt="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
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
  name: "HotelCard",
  props: {
    hotel: {},
    hotelDesc: String
  }
};
</script>
