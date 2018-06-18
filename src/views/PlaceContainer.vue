<template lang="pug">
  .place-container
</template>

<script lang="ts">
import Vue from 'vue';
import { IPlace } from '../models/Place';

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

