<template lang="pug">
  .places
      p(class="places-count") Total places: {{places.length}}
      .places-container(v-if="places.length > 0")
        PlaceContainer(v-for="place of places" v-bind:place="place" v-bind:key="place._id")
      p(class="no-places-message" v-else) No places yet! Add one now.
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import PlaceContainer from './PlaceContainer.vue';
import { Place, IPlace } from '../models/Place';

interface IData {
  places: Place[],
  loadPlacesURL: string,
}

export default Vue.extend({
  name: 'Places',
  components: {
    PlaceContainer,
  },
  data(): IData {
    return {
      places: [],
      loadPlacesURL: 'http://localhost:7777/places',
    };
  },
  methods: {
    loadPlaces(): void {
      axios.get(this.loadPlacesURL)
        .then((res) => {
          const newArr: Place[] = [];
          const initPlaces = res.data;
          console.log('initPlaces:', initPlaces);
          for (let i = 0; i < initPlaces.length; i++) {
            const element = initPlaces[i];
            const newPl = new Place(element._id, element.name, Date.now(), element.address);
            newArr.push(newPl);
          }
          return newArr;
        })
        .then((places) => {
          this.places = places;
        })
        .catch((err) => { throw new Error(`loadPlaces call failed: ${err}`); });
    },
  },
  mounted(): void {
    this.loadPlaces();
  },
});

</script>
