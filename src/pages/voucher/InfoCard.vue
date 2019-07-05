<template>
    <div class="infoCard">
      <div class="imgBox">
        <img src="../../assets/img/voucher/Voucherbackground@2x.png"/>
        <span>{{cardInfo.price}}</span>
      </div>
      <div class="info">
        <p>{{cardInfo.project}}：价值<span>{{cardInfo.price}}</span>元</p>
        <p>有效期至：{{cardInfo.date}}</p>
        <p>状态：{{state}}</p>
      </div>
      <button :class="{ cut: cutActive, hid: hidActive }">{{btnState}}</button>
    </div>
</template>

<script>
    export default {
        props: {
            cardInfo: {
            type: Object
          }
        },
        data () {
          return {
            cutActive: true,
            hidActive: false,
          }
        },
        computed: {
          state () {
            if (this.cardInfo.state === "001") { return "未激活" }
            if (this.cardInfo.state === "002") { return "已激活" }
            if (this.cardInfo.state === "003") { return "已过期" }
          },
          btnState () {
            if (this.cardInfo.btnState === "a") {
              this.cutActive = true;
              this.hidActive = false;
              return "激活"
            }
            if (this.cardInfo.btnState === "b") {
              this.cutActive = false;
              this.hidActive = false;
              return "使用说明"
            }
            if (this.cardInfo.btnState === "c") {
              this.hidActive = true;
              return ""
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.infoCard
  height 2.2rem
  background-color $bgColor
  border-top .01rem solid #EFEFEF
  padding 0 .30rem
  display flex
  align-items center
  position relative
  .imgBox
    span
      position absolute
      top .94rem
      left .62rem
      font-size .40rem
      color $bgColor
    img
      width 1.5rem
  .info
    padding-left .20rem
    flex 1
    font-size .30rem
    white-space nowrap
    p:first-child
      font-size .32rem
      margin-bottom .22rem
      span
        color red
    p:nth-child(2)
      margin-bottom .22rem
    p:nth-child(3)
      color red
  button
    width 1.5rem
    min-width 1.5rem
    height .60rem
    border-radius .1rem
    background-color #ff6156
    color #fff
    font-size .30rem
  .cut
    background-color #FFA330
  .hid
    display none
</style>
