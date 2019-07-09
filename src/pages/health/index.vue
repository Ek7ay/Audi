<template>
    <div class="health">
      <h-title :info="titleInfo"></h-title>
      <div class="imgBox">
        <img :src="imgUrl"/>
        <div class="infoBox">
          <p>{{price}}+{{givingPrice}}=<span>{{totalPrice}}</span>元</p>
          <p>购买&nbsp&nbsp&nbsp&nbsp赠送&nbsp&nbsp&nbsp&nbsp合计</p>
        </div>
      </div>
    </div>
</template>

<script>
    import HTitle from './HTitle'
    export default {
        components: {
          HTitle
        },
        data () {
          return {
            imgUrl: require("../../assets/img/health/Penguinhealthcard.png"),
            titleInfo: "大狗健康：全国各大药店均可使用",
            price: 1000,
          }
        },
        computed: {
          givingPrice () {
            return this.price * 0.1
          },
          totalPrice () {
            return this.price + this.price * 0.1
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .imgBox
    display flex
    justify-content center
    align-items center
    background-color $bgColor
    height 4.2rem
    position relative
    img
      width 6rem
    .infoBox
      width 2.9rem
      height 1rem
      position absolute
      right .94rem
      bottom .90rem
      color $bgColor
      p:first-child
        margin-top 5px
        font-size 16px
        span
          font-size 20px
      p:nth-child(2)
        margin-top 10px
        font-size 14px
</style>
