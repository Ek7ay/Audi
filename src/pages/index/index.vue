<template>
  <div class="main">
    <div class="carousel-box">
      <img :src="imgPrompt"/>
      <div class="rotaryContainer">
        <div class="rotaryBlockFirst">
          尊敬的客户您好，为了保护您的账号安全，本平台从2018年6月起将全面禁止充值。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        imgPrompt: require("../../assets/img/index/Prompt@2x.png")
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .main
    background-color #ffffff
    .carousel-box
      background-color #FFFCCB
      padding 0 .36rem 0 .82rem
    .carousel-box img
      position absolute
      left .36rem
      top .24rem
      width .30rem
    .rotaryContainer
      height .80rem
      line-height .80rem
      overflow hidden
      position relative
      .rotaryBlockFirst
        animation rotaryBlockFirst 20s linear infinite
        overflow hidden
        white-space nowrap
        position absolute
        color #FF4332
      @keyframes rotaryBlockFirst
        0%
          left 0
        100%
          left -80%
      @media screen and (max-width: 1250px)
        @keyframes rotaryBlockFirst
          0%
            left 0
          100%
            left -1200px
          /*1200px为文本的长度，利用多媒体查询，当屏幕宽度太小时，就设置滚动距离为文本的长度*/
</style>
