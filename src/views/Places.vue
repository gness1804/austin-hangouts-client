<template lang="pug">
  .places
      h2 My Places!
      p(class="places-count") Total places: {{places.length}}
      .places-container(v-if="places.length > 0")
        PlaceContainer(v-for="place of places" v-bind:place="place" v-bind:key="place._id" v-on:deletePlace="deletePlace")
      p(class="no-places-message" v-else) No places yet! Add one now.
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import PlaceContainer from './PlaceContainer.vue';
import { Place, IPlace } from '../models/Place';
import config from '../../config';

interface IData {
  places: Place[],
}

export default Vue.extend({
  name: 'Places',
  components: {
    PlaceContainer,
  },
  data(): IData {
    return {
      places: [],
    };
  },
  methods: {
    deletePlace(place: Place): void {
      axios.delete(`${config.url}/places/${place._id}`);
      window.location.reload();
    },
    loadPlaces(): void {
      axios.get(`${config.url}/places`)
        .then((res) => {
          const newArr: Place[] = [];
          const initPlaces = res.data;
          for (let i = 0; i < initPlaces.length; i++) {
            const element = initPlaces[i];
            const newPl = new Place(element._id, element.name, element.entryCreationDate, element.address);
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

<style>
  .places {
    text-align: center;
  }
</style>

