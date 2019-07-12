<template>
  <div class="order-card">
    <div class="top">
      <div>
        <img :src="cardInfo.imgUrl"/>
        <span>{{cardInfo.price}}&nbsp;站豆</span>
      </div>
      <div>
        <p>{{cardInfo.name}}</p>
        <p>订单号：{{cardInfo.orderNum}}</p>
        <p>{{cardInfo.time}}</p>
      </div>
      <div>
        <p>{{cardInfo.price}}</p>
        <p>{{tradingState}}</p>
      </div>
    </div>
    <div class="bottom">
      <span>共{{cardInfo.num}}件商品</span>
      合计：<span>{{cardInfo.price}}</span>&nbsp;站豆
    </div>
  </div>
</template>

<script>
  export default {
    props: {
        info: {
          type: Object
        }
    },
    data () {
        return {
            // cardInfo: {
            //     imgUrl: require("../../assets/img/order/Vehicleinspection@2x.png"),
            //     name: "车辆事故检测",
            //     orderNum: "48814545488715",
            //     time: "2018-8-15 11:24:00",
            //     price: 149,
            //     num: 1,
            //     state: "01",
            // }
            cardInfo: this.info
        }
    },
    computed: {
        tradingState () {
            if (this.cardInfo.state === "01") { return "交易成功" }
            if (this.cardInfo.state === "02") { return "交易失败" }
        }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .order-card
    background-color $bgColor
    margin-bottom .20rem
    .top
      height 2.1rem
      display flex
      justify-content space-between
      padding 0 .3rem
      border-bottom .01rem solid #efefef
      div:first-child
        position relative
        img
          width 2.1rem
          margin-top .30rem
        span
          position absolute
          top .41rem
          left .36rem
          font-size .24rem
          color $bgColor
      div:nth-child(2)
        flex 1
        color #2f2f2f
        position relative
        white-space nowrap
        p:first-child
          font-size .32rem
          position absolute
          top .46rem
          left .20rem
        p:nth-child(2)
          font-size .26rem
          position absolute
          top 1.08rem
          left .20rem
        p:last-child
          font-size .24rem
          position absolute
          top 1.54rem
          left .20rem
          color #787878
      div:last-child
        text-align right
        p:first-child
          font-size .36rem
          color #2f2f2f
          margin-top .32rem
        p:last-child
          font-size .24rem
          color #fe4437
          margin-top .84rem
    .bottom
      font-size .22rem
      height .70rem
      line-height .70rem
      padding 0 .30rem
      text-align right
      color #787878
      span:first-child
        margin-right .28rem
      span:last-child
        font-size .28rem
        color #fe4437
</style>
