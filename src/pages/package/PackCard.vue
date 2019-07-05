<template>
    <div class="packCard">
      <div class="card">
        <div class="imgBox">
          <img :src="imgUrl"/>
          <span class="oSpan">标准洗车</span>
          <span class="tSpan">10次套餐</span>
        </div>
        <div class="info">
          <p>洗车A套餐</p>
          <p>5座及以下小型轿车</p>
          <p>有效期至：2019-09-03</p>
          <p>状态：可使用</p>
        </div>
        <button>去使用</button>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
          return {
            imgUrl: require("../../assets/img/voucher/Voucherbackground@2x.png")
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .packCard
    background-color $bgColor
    border-top .01rem solid #EFEFEF
    .card
      height 2.5rem
      display flex
      padding 0 .30rem
      align-items center
      .imgBox
        position relative
        img
          width 1.5rem
          height 1.8rem
        span
          color $bgColor
          position absolute
        .oSpan
          top .52rem
          left .20rem
        .tSpan
          top .96rem
          left .18rem
      .info
        padding-left .20rem
        font-size .30rem
        white-space nowrap
        flex 1
        p:first-child
          font-size .32rem
          margin-bottom .22rem
        p:nth-child(2)
          margin-bottom .22rem
        p:nth-child(3)
          margin-bottom .22rem
        p:last-child
          color red
      button
        width 1.5rem
        min-width 1.5rem
        height .60rem
        border-radius .1rem
        background-color #ff6156
        color #fff
        font-size .30rem



</style>
