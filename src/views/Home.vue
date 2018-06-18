<template>
  <div class="home">
    <Main msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Main from '@/components/Main.vue'; // @ is an alias to /src

@Component({
  components: {
  Main,
  },
  })
export default class Home extends Vue {}
</script>
