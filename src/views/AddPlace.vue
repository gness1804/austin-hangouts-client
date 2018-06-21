<template lang="pug">
    .add-place
      h2 Add a Place
      input(placeholder="Name" v-model.trim="Uname" autocomplete='name')
      input(placeholder="Address" v-model.trim="address" autocomplete='address')
      button(v-on:click="addPlace") Add!
      p(class="message-output") {{msg}}
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import config from '../../config';

interface IData {
  Uname: string,
  address: string,
  msg?: string,
}

// TODO: replace text popup in showToast with real toast

export default Vue.extend({
  name: 'AddPlace',
  data(): IData {
    return {
      Uname: '',
      address: '',
      msg: '',
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
    showToast(_msg: string) {
      this.msg = _msg;
      setTimeout(() => {
        this.msg = '';
      }, 3000);
    },
  },
});
</script>

<style>
  .add-place {
    text-align: center;
  }
</style>
