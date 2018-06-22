<template lang="pug">
  .edit-place
    p I am the EditPlace component.
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import config from '../../config';

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
  },
  mounted(): void {
    this.getPlace();
  },
});
</script>

