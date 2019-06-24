<template>
    <div class="user">
      <div class="imgBox">
        <img :src="headPortrait"/>
      </div>
      <div class="info">
        <div class="infoTop">Yu.Yang.</div>
        <div class="infoBottom">站豆：2000
         <img :src="Problem"/>
        </div>
      </div>
      <div class="btn">
        <button>激活兑换码</button>
        <img :src="Customer"/>
      </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        data () {
          return {
            headPortrait: require("../../assets/img/index/Headportrait@2x.png"),
            Problem: require("../../assets/img/index/Problem@2x.png"),
            Customer: require("../../assets/img/index/Customerservice@2x.png"),
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.user
  background-color $bgColor
  height 1.09rem
  display flex
  justify-content space-between
  .imgBox
    width 1.2rem
    line-height 1.09rem
    img
      width .80rem
      height .80rem
      margin-left .25rem
  .info
    flex 1
    .infoTop
      font-size .30rem
      padding .28rem 0 0 .10rem
    .infoBottom
      font-size .24rem
      padding .08rem 0 0 .10rem
      color #949493
      position relative
      img
        width .30rem
        height .30rem
        margin-left .10rem
        position absolute
        top .04rem
        left 1.40rem
  .btn
    width 3.12rem
    line-height 1.09rem
    button
      padding .04rem .22rem
      background-color #ffffff
      border .02rem solid #FF4332
      color #FF4332
      border-radius .06rem
    img
      width .50rem
      height .50rem
      margin-left .30rem
</style>
