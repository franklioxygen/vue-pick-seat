<template>
  <div class="home">
    <Canvas />
  </div>
</template>

<script>
import Canvas from './../components/Canvas';

export default {
  name: 'Home',
  components: {
    Canvas,
  },
};
</script>

<style>
.home {
  position: inherit;
}

</style>

