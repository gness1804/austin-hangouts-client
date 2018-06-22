<template lang="pug">
  .place-container
    p(class="place-name") {{place.name}}
    img(src="../assets/pencil.png" alt="Edit place" v-on:click="editPlace" class="pencil-icon" title="Edit place")
    p {{place.address}}
    img(srce="place.photo" alt="place.name" v-if="place.photo")
    button(v-on:click="deletePlace") Delete
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

import { Place, IPlace } from '../models/Place';
import confirmAction from '../helpers/confirm';
import config from '../../config';

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
      if (confirmAction(`Are you sure you want to delete ${this.place.name}?`)) {
        this.$emit('deletePlace', this.place);
      }
    },
    editPlace(): void {
      this.$router.push(`/edit-place/${this.place._id}`);
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

  .pencil-icon {
    cursor: pointer;
    height: 30px;
    width: 30px;
  }
</style>
