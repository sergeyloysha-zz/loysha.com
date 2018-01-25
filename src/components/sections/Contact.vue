<template>
  <section class="section section_contact contact">
    <div class="container">
      <footer class="footer">
        <div class="footer__copy">© 2017 — Sergey Loysha</div>
        <div class="footer__list">
          <div class="footer__item">
            <a href="mailto:sergeyloysha@gmail.com" class="footer__link" target="_blank">Email</a>
          </div>
          <div class="footer__item">
            <a href="//dribbble.com/loysha" class="footer__link" target="_blank">Dribbble</a>
          </div>
          <div class="footer__item">
            <a href="//t.me/loysha" class="footer__link" target="_blank">Telegram</a>
          </div>
          <div class="footer__item">
            <a href="//www.instagram.com/sergeyloysha/" class="footer__link" target="_blank">Instagram</a>
          </div>
          <div class="footer__item">
            <a href="//twitter.com/sergeyloysha" class="footer__link" target="_blank">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

  @import './../../assets/styles/variables';

  .contact {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 2;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba($color-black, .05);
    padding: 2rem 1.5rem;

    &__copy {
      color: rgba($color-black, .3);
    }

    &__list {
      display: flex;
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
