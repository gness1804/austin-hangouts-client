<template lang="pug">
  .edit-place
    .edit-place-form
      input(placeholder="Name" v-model.trim="Uname" autocomplete='name')
      input(placeholder="Address" v-model.trim="address" autocomplete='address')
      button(v-on:click="saveEdits") Save!
      button(v-on:click="cancel") Cancel
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import config from '../../config';
import router from '@/router';

interface Foo {
  name: string,
  props: string[],
}

interface IData {
  Uname: string,
  address: string,
}

export default Vue.extend({
  name: 'EditPlace',
  props: ['placeId'],
  data(): IData {
    return {
      Uname: '',
      address: '',
    };
  },
  methods: {
    cancel(): void {
      // looks for dirty data and calls goBack() method
      this.goBack();
    },
    getPlace(): void {
      axios.get(`${config.url}/places/${this.placeId}`)
        .then((res) => {
          const _place = res.data;
          this.Uname = res.data.name;
          this.address = res.data.address;
        })
        .catch((err) => {
          throw new Error(`Error: problem with getPlace: ${err}`);
        });
    },
    goBack(): void {
      router.go(-1);
    },
    saveEdits(): void {
      if (!this.Uname || !this.address) {
        alert('Error: please enter both a name and an address.');
        return;
      }
      axios.put(`${config.url}/places/${this.placeId}`, {
        name: this.Uname,
        address: this.address,
      })
        .then(() => {
          this.goBack();
        })
        .catch((err: Error) => {
          throw new Error(`Error: saveEdits failed: ${err}`);
        });
    },
  },
  mounted(): void {
    this.getPlace();
  },
});
</script>

