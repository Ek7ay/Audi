<template>
    <div class="cell">
      <div class="message">{{message}}</div>
      <div class="phone">{{phone}}</div>
      <div class="arrow">
        <img :src="imgUrl"/>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
          return {
              message: "咨询帮助",
              phone: "400-888-8888",
              imgUrl: require("../assets/img/my/Consultinghelptoenter@2x.png")
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.cell
  width 90%
  height .88rem
  margin .32rem auto 0 auto
  background-color $bgColor
  box-shadow 0 .04rem #E3E3E5
  border-radius .20rem
  display flex
  align-items center
  .message
    width 1.6rem
    padding-left .46rem
    font-size .32rem
    color #2f2f2f
  .phone
    flex 1
    text-align right
    font-size .28rem
    color #767676
  .arrow
    width .44rem
    padding-right .40rem
    text-align right
    img
      width 7px
</style>
