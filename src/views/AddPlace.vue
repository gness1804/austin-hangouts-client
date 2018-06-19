<template lang="pug">
    .add-place
      h2 Add a Place
      input(placeholder="Name" v-model.trim="name")
      input(placeholder="Address" v-model.trim="address")
      button Add!
</template>

<script lang="ts">
import Vue from 'vue';

interface IData {
  name: string,
  address: string,
}

export default Vue.extend({
  name: 'AddPlace',
  data(): IData {
    return {
      name: '',
      address: '',
    };
  },
});
</script>

<style>
  .add-place {
    text-align: center;
  }
</style>
