<template lang="pug">
  .home-page
    h1 Welcome Home
    h3 {{ count }}
    x-button( type="warn" @click.native="add" ) Add
</template>

<script lang="ts">
import HomePage from './Home.page';
export default HomePage;
</script>