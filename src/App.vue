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
  @import './assets/styles/variables';

  @font-face {
    font-family: 'Graphik';
    src: url('./assets/fonts/Graphik-Thin.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Thin.woff') format('woff');
    font-weight: 100; // thin
    font-style: normal;
  }

  @font-face {
    font-family: 'Graphik';
    src: url('./assets/fonts/Graphik-Extralight.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Extralight.woff') format('woff');
    font-weight: 200; // extralight
    font-style: normal;
  }

  @font-face {
    font-family: 'Graphik';
    src: url('./assets/fonts/Graphik-Light.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Light.woff') format('woff');
    font-weight: 300; // light
    font-style: normal;
  }

  @font-face {
    font-family: 'Graphik';
    src: url('./assets/fonts/Graphik-Regular.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Regular.woff') format('woff');
    font-weight: 400; // regular
    font-style: normal;
  }

  @font-face {
    font-family: 'Graphik';
    src: url('./assets/fonts/Graphik-Medium.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Medium.woff') format('woff');
    font-weight: 500; // medium
    font-style: normal;
  }

  @font-face {
    font-family: 'Graphik';
    src: url('./assets/fonts/Graphik-Semibold.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Semibold.woff') format('woff');
    font-weight: 600; // semibold
    font-style: normal;
  }

  @font-face {
    font-family: 'Graphik';
    src: url('./assets/fonts/Graphik-Bold.woff2') format('woff2'),
        url('./assets/fonts/Graphik-Bold.woff') format('woff');
    font-weight: 700; // bold
    font-style: normal;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;

    @media screen and (min-width: $desktop) {
      height: 100%;
    }
  }

  body {
    font: 400 1.4rem/1.5 'Graphik', 'Helvetica Neue', 'Segoe UI', sans-serif;

    @media screen and (min-width: $desktop) {
      height: 100%;
    }
  }

  .app {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;

    @media screen and (min-width: $desktop) {
      height: 100%;
    }
  }

  .container {
    max-width: 93rem;
    margin-left: auto;
    margin-right: auto;
  }

  .section {

    &_intro {
      @media screen and (min-width: $desktop) {
        height: 100%;
      }
    }

    &_contact {

    }
  }
</style>
