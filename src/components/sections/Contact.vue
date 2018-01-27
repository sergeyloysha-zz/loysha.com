<template>
  <section class="section section_contact contact">
    <div class="container">
      <footer class="footer">
        <div class="footer__copy">© 2017 — Sergey Loysha</div>
        <div
          v-if="links"
          class="footer__list">
          <div
            v-for="(link, index) in links"
            :key="index"
            class="footer__item">
            <a :href="link.link" class="footer__link" target="_blank">{{ link.type }}</a>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact',

  props: {
    links: {
      type: Array
    },
  },

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

  @import './../../assets/styles/variables';

  .contact {
    width: 100%;
    z-index: 2;

    @media screen and (min-width: $desktop) {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 1px solid rgba($color-black, .05);
    padding: 2rem 0;

    @media screen and (min-width: $desktop) {
      flex-direction: row;
      align-items: center;
      padding: 2rem 1.5rem;
    }

    &__copy {
      display: none;
      color: rgba($color-black, .3);

      @media screen and (min-width: $desktop) {
        display: block;
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
    }

    &__item {
      margin-right: 2rem;

      &:last-child {
        margin-right: 0;
      }
    }

    &__link {
      display: inline-block;
      color: $color-black;
      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
        color: $color-blue;
        border-color: $color-blue;
      }
    }
  }

</style>
