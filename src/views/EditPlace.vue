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
import router from '@/router';
import axios from 'axios';
import config from '../../config';
import thereAreChanges from '../helpers/thereAreChanges';
import confirmAction from '../helpers/confirm';

interface Foo {
  name: string,
  props: string[],
}

interface IData {
  Uname: string,
  address: string,
  initUname: string,
  initAddress: string,
}

export default Vue.extend({
  name: 'EditPlace',
  props: ['placeId'],
  data(): IData {
    return {
      Uname: '',
      address: '',
      initUname: '',
      initAddress: '',
    };
  },
  methods: {
    cancel(): void {
      const {
        Uname,
        address,
        initUname,
        initAddress,
      } = this;

      if (thereAreChanges({
        Uname,
        address,
        initUname,
        initAddress,
      })) {
        if (confirmAction('Are you sure you want to leave without saving changes?')) {
          this.goBack();
        }
      } else {
        this.goBack();
      }
    },
    getPlace(): void {
      axios.get(`${config.url}/places/${this.placeId}`)
        .then((res) => {
          const _place = res.data;
          this.Uname = _place.name;
          this.address = _place.address;
          this.initUname = _place.name;
          this.initAddress = _place.address;
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

