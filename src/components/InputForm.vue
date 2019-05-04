<template>
  <div class="container is-fluid formBackground">
    <h1 class="title is-4">Itinerary Planner</h1>
    <div class="inputForm">
      <div class="field" style="padding-bottom: 20px">
        <div class="control">
          <label class="label">Location</label>
          <input
            ref="autocomplete"
            placeholder="Search"
            class="input is-info"
            onfocus="value = ''"
            type="text"
          >
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <label class="label">Start Date</label>
          <input type="date" name="startDate" v-model="startTime">
        </div>
        <div class="column">
          <label class="label">End Date</label>
          <input type="date" name="endDate" v-model="endTime">
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Num Travelers</label>
            <div class="select">
              <select v-model="travelers">
                <option v-for="n in 10" v-bind:key="n">{{n}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <label class="label">Criteria</label>
      <div class="columns" v-for="value in criteria.length/3" v-bind:key="value">
        <div class="column is-offset-1 has-text-left">
          <label class="checkbox">
            <input type="checkbox" name="vehicle" :value="value" v-model="checked[value-1]">
            {{ criteria[value-1] }}
          </label>
        </div>
        <div class="column has-text-left">
          <label class="checkbox">
            <input type="checkbox" name="vehicle" :value="value" v-model="checked[value+1]">
            {{ criteria[value+1] }}
          </label>
        </div>
        <div class="column has-text-left">
          <label class="checkbox">
            <input type="checkbox" name="vehicle" :value="value" v-model="checked[value+3]">
            {{ criteria[value+3] }}
          </label>
        </div>
      </div>
    </div>
    <button class="button is-primary" v-on:click="submit" value="Submit">Submit</button>
  </div>
</template>

<style>
.formBackground {
  background-color: #fbfbfb;
  padding: 30px;
  border-radius: 5px;
}

.inputForm {
  padding-bottom: 30px;
}
</style>

<script>
export default {
  name: "Input",
  data() {
    return {
      criteria: [
        "Romantic",
        "Sport",
        "Nature",
        "Scenery",
        "Museum",
        "Historic"
      ],
      location: null,
      startTime: Date,
      endTime: Date,
      travelers: 1,
      checked: [],
      stuffs: []
    };
  },
  props: {
    msg: String
  },

  mounted() {
    /* global google */
    this.autocomplete = new google.maps.places.Autocomplete(
      this.$refs.autocomplete,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", () => {
      this.$data.location = this.autocomplete.getPlace();
    });
  },
  methods: {
    submit: function() {
      var i;
      var checkedCriteria = [];
      for (i = 0; i < this.$data.criteria.length; i++) {
        if (this.$data.checked[i]) {
          checkedCriteria.push(this.$data.criteria[i]);
        }
      }

      var submission = {
        // address: this.$data.location.formatted_address,
        location: {
          cityName: this.$data.location.name,
          cityLatLong: `${this.$data.location.geometry.location.lat()},${this.$data.location.geometry.location.lng()}`
        },
        startTimestamp: Date.parse(this.$data.startTime),
        endTimestamp: Date.parse(this.$data.endTime),
        people: this.$data.travelers,
        criteria: checkedCriteria
      };

      this.$emit('submit', submission)
    }
  }
};
</script>
