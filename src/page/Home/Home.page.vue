<template lang="pug">
  .home-page
    h1.title Welcome Home
    h3 state count: {{ count }}
    h3 state getter count: {{ otherCount }}
    x-button( type="warn" @click.native="add" ) Add
    x-button( type="warn" @click.native="cusAdd" ) Custom Add
    x-button( type="warn" @click.native="asyncAdd" ) async Add
</template>

<script lang="ts">
import HomePage from './Home.page';
export default HomePage;
</script>

<style lang="less" scoped>
@import './Home.page.less';
</style>