<template>
    <div class="title">
        {{titleInfo}}
      <img :src="imgUrl"/>
    </div>
</template>

<script>
    export default {
        props: {
          info: {
            type: String
          }
        },
        data () {
          return {
            imgUrl: require("../../assets/img/health/explain@2x.png"),
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
</style>
