<template lang="pug">
    .add-place
      h2 Add a Place
      input(placeholder="Name" v-model.trim="Uname" autocomplete='name')
      input(placeholder="Address" v-model.trim="address" autocomplete='address')
      button(v-on:click="addPlace") Add!
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import config from '../../config';

interface IData {
  Uname: string,
  address: string,
}

// TODO: replace alert in showToast with real toast

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
      const _name = this.Uname;
      if (!this.Uname || !this.address) {
        alert('Error: please enter both a name and an address.');
        return;
      }
      axios.post(`${config.url}/places`, {
        name: this.Uname,
        address: this.address,
      })
        .then(() => {
          this.clearFields();
        })
        .then(() => {
          this.showToast(`${_name} successfully added.`);
        })
        .catch((err: Error) => {
          throw new Error(`There was a problem with the addPlace method: ${err}`);
        });
    },
    clearFields(): void {
      this.Uname = '';
      this.address = '';
    },
    showToast(msg: string) {
      alert(msg);
    },
  },
});
</script>

<style>
  .add-place {
    text-align: center;
  }
</style>
