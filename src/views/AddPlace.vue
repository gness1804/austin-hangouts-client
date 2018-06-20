<template lang="pug">
    .add-place
      h2 Add a Place
      input(placeholder="Name" v-model.trim="Uname")
      input(placeholder="Address" v-model.trim="address")
      button(v-on:click="addPlace") Add!
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

interface IData {
  Uname: string,
  address: string,
}

export default Vue.extend({
  name: 'AddPlace',
  data(): IData {
    return {
      Uname: '',
      address: '',
    };
  },
  methods: {
    addPlace(): void {
      if (!this.Uname || !this.address) {
        alert('Error: please enter both a name and an address.');
        return;
      }
      axios.post('http://localhost:7777/places', {
        name: this.Uname,
        address: this.address,
      });
    },
  },
});
</script>

<style>
  .add-place {
    text-align: center;
  }
</style>
