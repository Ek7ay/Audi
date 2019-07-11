<template>
    <div class="paySu">
      <div class="imgBox">
        <img :src="imgUrl"/>
        激活成功
      </div>

      <div class="codeBox">
        <img :src="erURL"/>
      </div>

      <div class="textBox">
        长按二维码关注大狗科技
      </div>

      <long-button
        class="btn1"
        :msg="btn1"
        @click.native="goHome"
      />
    </div>
</template>

<script>
    import LongButton from '@/common/LongButton'
    export default {
        components: {
          LongButton
        },
        data () {
          return {
            imgUrl: require("../../assets/img/health/Purchasesuccess@2x.png"),
            erURL: require("../../assets/img/voucher/QRcode@2x.png"),
            payInfo: "",
            btn1: {
              message: "返回首页",
              color: "#fff",
              backgroundColor: '#FD4437'
            }
          }
        },
        methods: {
          goHome () {
            this.$router.push({
              path: "/"
            })
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.paySu
  .imgBox
    text-align center
    margin-top 1.2rem
    font-size .40rem
    img
      width .48rem
      position relative
      bottom .06rem
  .codeBox
    margin-top 1rem
    text-align center
    img
      width 3rem
  .textBox
    font-size .40rem
    margin-top .80rem
    text-align center
  .btn1
    margin-top 1rem

</style>
