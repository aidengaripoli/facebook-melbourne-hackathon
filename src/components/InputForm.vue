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
          <input type="date" name="startDate">
        </div>
        <div class="column">
          <label class="label">End Date</label>
          <input type="date" name="endDate">
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Num Travelers</label>
            <div class="select">
              <select>
                <option v-for="n in 10" v-bind:key="n">{{n}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <label class="label">Criteria</label>
      <form action="/action_page.php">
        <div class="columns" v-for="value in criteria.length/3" v-bind:key="value">
          <div class="column is-offset-1 has-text-left">
            <label class="checkbox">
              <input type="checkbox" name="vehicle" :value="value">
              {{ criteria[value-1] }}
            </label>
          </div>
          <div class="column has-text-left">
            <label class="checkbox">
              <input type="checkbox" name="vehicle" :value="value">
              {{ criteria[value+1] }}
            </label>
          </div>
          <div class="column has-text-left">
            <label class="checkbox">
              <input type="checkbox" name="vehicle" :value="value">
              {{ criteria[value+3] }}
            </label>
          </div>
        </div>
      </form>
    </div>
    <button class="button is-primary" type="submit" value="Submit">Submit</button>
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
      criteria: ["Romantic", "Sport", "Nature", "Scenery", "Museum", "Historic"]
    };
  },
  props: {
    msg: String
  },
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.$refs.autocomplete,
      { types: ["geocode"] }
    );
  }
};
</script>
