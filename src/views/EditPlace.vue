<template lang="pug">
  .edit-place
    p I am the EditPlace component.
</template>

<script lang="ts">
import Vue from 'vue';

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
});
</script>

