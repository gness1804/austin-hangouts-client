<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/places">Places</router-link> |
      <router-link to="/add-place">Add Place</router-link>
    </div>
    <router-view/>
  </div>
</template>
