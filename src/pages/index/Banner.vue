<template>
  <div class="banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in bannerList" :key="item.id">
        <img class="banner-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "Banner",
        data () {
          return {
            swiperOption: {
              pagination : '.swiper-pagination',
              loop: true,
            },
            bannerList: [
              {
                id: "01",
                imgUrl: require("../../assets/img/index/banner/bmsc_sdj.png")
              },
              {
                id: "02",
                imgUrl: require("../../assets/img/index/banner/qecw_sdj.png"),
              },
              {
                id: "03",
                imgUrl:  require("../../assets/img/index/banner/wncc_sdj.png"),
              },
              {
                id: "04",
                imgUrl: require("../../assets/img/index/banner/xcd_sdj.png"),
              },
            ],

          }
        }
    }
</script>

<style lang="stylus" scoped>
.banner
  overflow hidden
  width 100%
  height 0
  padding-bottom 38.7%
  background-color #EEE
  >>> .swiper-pagination-bullet-active
    background-color #ffffff
  .banner-img
    width 100%
</style>
