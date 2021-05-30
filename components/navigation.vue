<template>
  <nav class="navigation">
    <a href="/" class="navigation-brand" :class="classes">Eleandro Duzentos</a>

    <button class="navigation-button" :class="classes" @click="toggleActive">
      <div class="navigation-button-lines">
        <span class="navigation-button-line line-0"></span>
        <span class="navigation-button-line line-1"></span>
        <span class="navigation-button-line line-2"></span>
      </div>
    </button>

    <ul class="navigation-list" :class="classes">
      <li class="navigation-list-item">Articles</li>
      <li class="navigation-list-item">Works</li>
      <li class="navigation-list-item">About</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    classes() {
      return {
        "is-active": this.isActive,
      };
    },
  },
  methods: {
    toggleActive(e) {
      const { clientX, clientY } = e

      console.log(clientX, clientY);

      this.isActive = !this.isActive;
    },
  },
};
</script>
