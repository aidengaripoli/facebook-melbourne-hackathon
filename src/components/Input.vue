<template>
  <div class="container">
    <div class="container">
      <div class="hero is-info">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">Enter your holiday criteria</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="field">
            <div class="control">
              <label class="label">Location</label>

              <input class="input is-info" type="text" placeholder="Enter a location">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="colums">
            <div class="column">
              <label class="label">StartDate</label>
              <input type="date" name="startDate">
            </div>
            <div class="column">
              <label class="label">EndDate</label>
              <input type="date" name="endDate">
            </div>
          </div>
        </div>

        <div class="column">
          <div class="field">
            <label class="label">Number of people</label>
            <div class="select">
              <select>
                <option v-for="n in 10" v-bind:key="n">{{n}}</option>
              </select>
            </div>
          </div>
        </div>

        <div class="column">
          <label class="label">Criteria</label>
          <form action="/action_page.php">
            <div v-for="value in criteria" v-bind:key="value">
              <label class="checkbox">
                <input type="checkbox" name="vehicle" :value="value">
                {{ value }}
              </label>
            </div>
          </form>
        </div>
      </div>
      <button class="button is-primary" type="submit" value="Submit">Submit</button>
    </div>
  </div>
</template>

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
  }
};
</script>
