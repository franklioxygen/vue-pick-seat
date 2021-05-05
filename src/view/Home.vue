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
  created() {
      if(this.$store.state.userName === '') {
        window.location.href = '/#/login';
      }
  }
};
</script>

<style>
.home {
  position: inherit;
}

</style>

