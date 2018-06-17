<template lang="pug">
  .places
    p I am the places page.
</template>

<script lang="ts">
import Vue from 'vue';
import Place, { IPlace } from '../models/Place';

interface IData {
  places: Array<IPlace>,
}

export default Vue.extend({
  name: 'Places',
  data(): IData {
    return {
      places: [],
    };
  },
});

</script>
