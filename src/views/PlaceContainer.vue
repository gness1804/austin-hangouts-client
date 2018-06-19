<template lang="pug">
  .place-container
    p(class="place-name") {{place.name}}
    p {{place.address}}
    img(srce="place.photo" alt="place.name" v-if="place.photo")
    button(v-on:click="deletePlace") Delete
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

import { Place, IPlace } from '../models/Place';

export default Vue.extend({
  name: 'PlaceContainer',
  props: {
    place: {
      type: Place,
      required: true,
    },
  },
  methods: {
    deletePlace(): void {
      // add warning
      axios.delete(`http://localhost:7777/places/${this.place._id}`);
    },
  },
});
</script>

<style>
  .place-container {
    border: 1px solid #000000;
    margin: 20px auto;
    max-width: 80vw;
    text-align: center;
  }

  .place-name {
    font-weight: 700;
  }
</style>
