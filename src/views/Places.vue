<template lang="pug">
  .places
      .places-container(v-if="places.length > 0")
        p I should not appear.
      p(class="no-places-message" v-else) No places yet! Add one now.
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
