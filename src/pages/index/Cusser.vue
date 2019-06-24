<template>
    <div class="cusser">
      <div class="cus-left">
        <img src="../../assets/img/index/Customerservice@2x.png"/>
        <span>客服电话</span>
      </div>
      <div class="cus-right">
        <span>400-888-8888</span>
        <img src="../../assets/img/index/Enter@2x.png"/>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.cusser
  margin-top .20rem
  line-height 0.88rem
  background-color $bgColor
  display flex
  justify-content space-between
  .cus-left
    width 2.4rem
    img
      width .40rem
      margin-left .25rem
      position relative
      bottom .04rem
    span
      font-size .28rem
      margin-left .15rem
  .cus-right
    width 2.5rem
    span
      color #8D8D8C
    img
      width .12rem
      margin-left .20rem
      position relative
      bottom .04rem
</style>
