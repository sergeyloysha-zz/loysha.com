<template>
  <section class="section section_intro intro">
    <div class="container">
      <div class="gist intro__gist">
        <header class="header gist__header">
          <div class="header__photo">
            <img src="./../../assets/photo.png" srcset="./../../assets/photo@2x.png 2x" alt="">
          </div>
          <div class="header__info">
            <h3 class="person header__person">Sergey Loysha</h3>
            <p class="position header__position">Front-end Developer / Digital Product Designer</p>
          </div>
        </header>
        <div class="gist__line">
          <h1>Currently front-end developer at <a href="//darwinapps.com" target="_blank">@darwinapps</a>. Also crafting front-end & design for digital products &ndash; exclusively for founders and startups.</h1>
        </div>
        <div class="clients gist__clients">
          <div class="clients__heading">Previously / Clients:</div>
          <div class="clients__list">
            <div class="clients__item">Illustria Designs</div>
            <div class="clients__item">SplitMetrics</div>
            <div class="clients__item">Instinctools GmbH</div>
            <div class="clients__item">Playlists.net</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

  @import './../../assets/styles/vendor/normalize';
  @import './../../assets/styles/variables';
  @import './../../assets/styles/functions';

  .intro {
    position: relative;
    padding: 5rem 0;

    display: flex;
    align-items: center;

    z-index: 1;
  }

  .gist {
    &__header {
      margin-bottom: 5rem;
    }

    &__line {
      max-width: cell(10);

      h1 {
        font-weight: 300;
        font-size: 3.8rem;
        margin: 0;
      }

      a {
        display: inline-block;
        position: relative;
        color: $color-blue;
        text-decoration: none;

        &::after {
          content: '';
          position: absolute;
          bottom: .5rem;
          width: 100%;
          left: 0;
          height: .2rem;
          background: rgba($color-blue, .6);
          border-radius: 2rem
        }

        &:hover {
          &::after {
            background: $color-blue;
          }
        }
      }
    }

    &__clients {
      margin-top: 3rem;
    }
  }

  .clients {
    display: flex;
    align-items: center;

    &__heading {
      font-weight: 500;
      margin-right: 2rem;
      color: $color-blue;
    }

    &__list {
      display: flex;
      align-items: center;
    }

    &__item {
      color: rgba($color-black, .5);
      margin-right: .5rem;

      &::after {
        content: ',';
      }

      &:last-child {
        margin-bottom: 0;

        &::after {
          content: '';
        }
      }
    }
  }

  .header {
    display: flex;
    align-items: center;

    &__photo {
      flex-shrink: 0;
      width: 6.4rem;
      margin-right: 2rem;
      border-radius: 100%;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }

    &__person {

    }

    &__position {

    }
  }

  .person {
    font-weight: 500;
    font-size: 2.2rem;
    margin: 0;
  }

  .position {
    font-size: 1.6rrem;
    margin: 0;
  }

</style>
