<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class="icon">
            <img :src="rec"/>
            <p>充值中心</p>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="icon">
            <img :src="rec"/>
            <p>充值中心</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: "Icons",
        data () {
          return {
            rec: require("../../assets/img/index/icons/Rechargecenter@2x.png"),
            swiperOption: {},
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixin.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  /*.icons*/
  /*  overflow hidden*/
  /*  height 0*/
  /*  padding-bottom 50%*/
    .icon
      float left
      width 25%
      height 0
      padding-bottom 25%
      overflow hidden
      text-align center
      img
        width 45%
        margin-top 22%
      p
        font-size .16rem
        margin-top 10%




</style>
