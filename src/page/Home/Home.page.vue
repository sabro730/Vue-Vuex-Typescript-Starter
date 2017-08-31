<template lang="pug">
  .home-page
    h1 Welcome Home
    h3 {{ count }}
    button( @click="add" ) +
</template>

<script lang="ts">
import HomePage from './Home.page';
export default HomePage;
</script>