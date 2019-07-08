<template>
    <div class="packCard">
      <div class="card">
        <div class="imgBox">
          <img :src="imgUrl"/>
          <span class="oSpan">{{packData.pName}}</span>
          <span class="tSpan">{{packData.times}}次套餐</span>
        </div>
        <div class="info">
          <p>{{packData.packName}}</p>
          <p>{{packData.packModel}}</p>
          <p>有效期至：{{packData.packTime}}</p>
          <p>状态：{{state}}</p>
        </div>
        <button>去使用</button>
      </div>
      <div class="detailBox">
        <div class="detail">
          <p>{{packData.pName}}可用次数&nbsp&nbsp×&nbsp{{packData.times}}次</p>
          <p>
            消费明细
            <img :src="detailImgUrl"/>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props: {
          packData: {
            type: Object
          }
        },
        data () {
          return {
            imgUrl: require("../../assets/img/voucher/Voucherbackground@2x.png"),
            detailImgUrl: require("../../assets/img/package/Entryofconsumptiondetails@2x.png"),
            pName: "标准洗车",
            times: 10,
            packName: "洗车A套餐",
            packModel: "5座及以下小型轿车",
            packTime: "2019-09-03",
            packState: "001",
          }
        },
        computed: {
          state () {
            if (this.packData.packState === "001") {
              return "可使用"
            }
            if (this.packData.packState === "002") {
              return "已完成"
            }
            if (this.packData.packState === "003") {
              return "已失效"
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .packCard
    background-color $bgColor
    border-top .01rem solid #EFEFEF
    .card
      height 2.5rem
      display flex
      padding 0 .30rem
      align-items center
      .imgBox
        position relative
        img
          width 1.5rem
          height 1.8rem
        span
          color $bgColor
          position absolute
        .oSpan
          top .52rem
          left .20rem
        .tSpan
          top .96rem
          left .18rem
      .info
        padding-left .20rem
        font-size .30rem
        white-space nowrap
        flex 1
        p:first-child
          font-size .32rem
          margin-bottom .22rem
        p:nth-child(2)
          margin-bottom .22rem
        p:nth-child(3)
          margin-bottom .22rem
        p:last-child
          color red
      button
        width 1.5rem
        min-width 1.5rem
        height .60rem
        border-radius .1rem
        background-color #FFA330
        color #fff
        font-size .30rem
    .detailBox
      background-color $bgColor
      height .78rem
      padding-right .30rem
      .detail
        border-top .01rem solid #F8F8F8
        height .78rem
        width calc(100% - 1.8rem)
        float right
        display flex
        justify-content space-between
        align-items center
        color #A5A5A5
        white-space nowrap
        img
          width .14rem
          margin-left .06rem
          position relative
          bottom .02rem
</style>
