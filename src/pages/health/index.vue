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
      <div class="priceBox">
        <div
          class="priceItem"
          v-for="(item, index) of priceList"
          :key="index"
          @click="select(item, index)"
        >
          <div :class="{ priceContent: true, change: index === selected ? true : false }">
            {{item}}元
          </div>
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
            price: 100,
            priceList: [100, 200, 500, 1000, 2000, 3000],
            selected: 0
          }
        },
        computed: {
          givingPrice () {
            return this.price * 0.1
          },
          totalPrice () {
            return this.price + this.price * 0.1
          }
        },
        methods: {
          select (item, index) {
            this.selected = index;
            this.price = item;
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
    padding .20rem 0
    position relative
    img
      width 90%
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
  .priceBox
    background-color $bgColor
    border-top .01rem solid #F2F2F2
    padding .20rem .10rem 0 .10rem
    overflow hidden
    .priceItem
      width 33.3%
      height 1.6rem
      float left
      display flex
      justify-content center
      .priceContent
        width 92%
        height 1.4rem
        background-color #FFEBEB
        border .01rem solid #FE5347
        color #FE4437
        font-size .40rem
        border-radius .16rem
        display flex
        align-items center
        justify-content center
      .change
        color $bgColor
        background-color #FE4437
</style>
