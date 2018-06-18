<template lang="pug">
  .place-container
    p {{place.name}}
    p {{place.address}}
    img(srce="place.photo" alt="place.name" v-if="place.photo")
</template>

<script lang="ts">
import Vue from 'vue';
import { IPlace } from '../models/Place';

// TODO: change the type to Place
export default Vue.extend({
  name: 'PlaceContainer',
  props: {
    place: {
      type: Object,
      required: true,
    },
  },
});
</script>

