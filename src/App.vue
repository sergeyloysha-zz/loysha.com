<template>
  <div id="app" class="app">
    <intro/>
    <contact/>
  </div>
</template>

<script>

import Intro from './components/sections/Intro.vue'
import Contact from './components/sections/Contact.vue'

export default {
  name: 'app',

  components: {
    Intro,
    Contact
  },

  data () {
    return {
    }
  }

}
</script>

<style lang="scss">

  @import './assets/styles/vendor/normalize';
  @import './assets/styles/fonts';
  @import './assets/styles/variables';

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    height: 100%;
  }

  body {
    font: 400 1.4rem/1.5 'Graphik', 'Helvetica Neue', 'Segoe UI', sans-serif;
    height: 100%;
  }

  .app {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    padding: 0 1.5rem;
  }

  .container {
    max-width: 93rem;
    margin-left: auto;
    margin-right: auto;
  }

  .section {

    &_intro {
      height: 100%;
      flex-shrink: 0;
    }

    &_contact {

    }
  }
</style>
