<template>
    <div class="insurance">
        <div class="imgBox">
          <img :src="imgUrl"/>
        </div>

        <div class="plateBox">
          <div>车牌号码</div>
          <div class="plateImgBox">
            <img :src="imgUrl1"/>
            <span>京</span>
          </div>
          <input type="text" placeholder="输入车牌号码">
        </div>

        <div class="lastTime">
          <div>
            查看上次查询结果
            <img :src="imgUrl2"/>
          </div>
        </div>

        <pay :info="pay" @getIndex="getIn"/>

        <long-button :msg="btnMsg"/>
    </div>
</template>

<script>
    import Pay from '@/common/Pay'
    import LongButton from '@/common/LongButton'
    export default {
        components: {
            Pay,
            LongButton
        },
        data () {
            return {
                imgUrl: require("../../assets/img/insurance/banner@2x.png"),
                imgUrl1: require("../../assets/img/insurance/Selectlicenseplate@2x.png"),
                imgUrl2: require("../../assets/img/insurance/Queryresult@2x.png"),
                pay: {
                  totalBean: 2000,
                  bean: 15,
                  payStyleList: ["001", "002"],
                },
                btnMsg: {
                  message: "确认支付",
                  color: "#fff",
                  backgroundColor: '#FE4437'
                }
            }
        },
        methods: {
          getIn (data) {
            alert( "支付方式" + data);
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.insurance
  .imgBox
    padding-bottom 38.7%
    height 0
    background-color #eee
    img
      width 100%
  .plateBox
    height 1.2rem
    background-color $bgColor
    margin-top .30rem
    padding 0 .30rem
    display flex
    justify-content space-between
    align-items center
    font-size .30rem
    color #2f2f2f
    .plateImgBox
      margin 0 .20rem 0 .40rem
      position relative
      span
        color #379aff
        position absolute
        top .20rem
        left .18rem
      img
        width .64rem
    input
      flex 1

  .lastTime
    height 1.08rem
    line-height 1.08rem
    font-size .28rem
    color #3ba2fe
    padding 0 .30rem
    div
      width 2.68rem
      float right
    img
      width .24rem
      margin-left .12rem
      position relative
      bottom .03rem
</style>
