<template>
    <div class="title">
        {{titleInfo.text}}
      <img
        :src="imgUrl"
        :class="{ hide: !titleInfo.isShow}"
      />
    </div>
</template>

<script>
    export default {
        props: {
          info: {
            type: Object
          }
        },
        data () {
          return {
            imgUrl: require("../assets/img/health/explain@2x.png"),
            titleInfo: this.info
          }
        }
    }
</script>

<style lang="stylus" scoped>
  .title
    height 1rem
    background-color #FEECE9
    display flex
    justify-content center
    align-items center
    color #FF0038
    font-size .32rem
    position relative
    img
      width .32rem
      position absolute
      right .30rem
      top .32rem
    .hide
      display none
</style>
