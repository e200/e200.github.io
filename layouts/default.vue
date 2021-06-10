<template>
  <main class="main" :class="classes">
    <canvas id="background-canvas" />

    <Navigation @active="pageCanScroll" />

    <Nuxt />
  </main>
</template>

<script>
import Navigation from "../components/navigation";

export default {
  components: {
    Navigation,
  },
  computed: {
    classes() {
      return {
        "no-scroll": !this.$store.state.page.isScrollable,
      };
    },
  },
  methods: {
    pageCanScroll(value) {
      this.$store.commit('page/canScroll', !value);
    },
    resizeCanvas() {
      const canvas = document.getElementById('background-canvas');

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      console.log(canvas.width);
    },
  },
  mounted() {
    const context = this

    context.resizeCanvas()

    window.onresize = function() {
      context.resizeCanvas()
    }
  },
};
</script>
