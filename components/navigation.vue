<template>
  <nav class="navigation">
    <div class="container">
      <a href="/" class="navigation-brand" :class="{ 'is-active': isActive }"
        >Eleandro Duzentos</a
      >

      <ul class="navigation-list" :class="{ 'is-active': isActive }">
        <li class="navigation-list-item">Articles</li>
        <li class="navigation-list-item">Works</li>
        <li class="navigation-list-item">About</li>
      </ul>

      <button
        class="navigation-button"
        :class="{ 'is-active': isActive }"
        @click="toggleActive"
      >
        <div class="navigation-button-lines">
          <span class="navigation-button-line line-0"></span>
          <span class="navigation-button-line line-1"></span>
          <span class="navigation-button-line line-2"></span>
        </div>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      hypotenuse: undefined,
      tapDx: undefined,
      tapDy: undefined,
    };
  },
  computed: {
    backgroundStyles() {
      return [
        this.isActive
          ? {
              width: `${this.hypotenuse * 2}px`,
              height: `${this.hypotenuse * 2}px`,
            }
          : undefined,
      ];
    },
  },
  methods: {
    toggleActive(e) {
      this.isActive = !this.isActive;

      if (this.isActive) {
        this.resolve(e);
      }

      this.$emit("active", this.isActive);
    },
    resolve(e) {
      const { clientX, clientY } = e;

      this.tapDx = clientX;
      this.tapDy = clientY;

      const centerLeftDistance = clientX;
      const centerRightDistance = window.innerWidth - clientX;

      const centerTopDistance = clientY;
      const centerBottomDistance = window.innerHeight - clientY;

      const dx = Math.max(centerLeftDistance, centerRightDistance);
      const dy = Math.max(centerTopDistance, centerBottomDistance);

      this.hypotenuse = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    },
  },
};
</script>
