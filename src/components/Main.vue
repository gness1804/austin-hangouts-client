<template lang="pug">
  .main
    p I am the main page.
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Main extends Vue {
  @Prop() private msg!: string;
}
</script>
