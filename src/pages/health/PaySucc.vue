<template>
    <div class="paySu">
      <div class="imgBox">
        <img :src="imgUrl"/>
        支付成功
      </div>
      <div class="mesBox">
        您已获得&nbsp<span>{{payInfo.price}}</span>&nbsp元大狗健康权益
      </div>
      <long-button
        class="btn1"
        :msg="btn1"
      />
      <long-button
        :msg="btn2"
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
            payInfo: "",
            btn1: {
              message: "去激活",
              color: "#FD4437",
              backgroundColor: '#F6F6F8'
            },
            btn2: {
              message: "返回首页",
              color: "#fff",
              backgroundColor: '#FE4437'
            }
          }
        },
        created() {
          const payInfo = this.$route.query.payInfo;
          if (payInfo) {
            this.payInfo = payInfo;
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
.paySu
  .imgBox
    text-align center
    margin-top 1.2rem
    font-size 20px
    img
      width .48rem
      position relative
      bottom .06rem
  .mesBox
    text-align center
    margin-top .80rem
    font-size 16px
    span
      color red
  .btn1
    margin-top 1.2rem

</style>
