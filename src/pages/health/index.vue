<template>
    <div class="health">
      <h-title :info="titleInfo"></h-title>
      <div class="imgBox">
        <img :src="imgUrl"/>
        <div class="infoBox">
          <p>{{price}}+{{givingPrice}}=<span>{{totalPrice}}</span>元</p>
          <p>购买&nbsp&nbsp&nbsp&nbsp赠送&nbsp&nbsp&nbsp&nbsp合计</p>
        </div>
      </div>
      <div class="priceBox">
        <div
          class="priceItem"
          v-for="(item, index) of priceList"
          :key="index"
          @click="select(item, index)"
        >
          <div :class="{ priceContent: true, change: index === selected ? true : false }">
            {{item}}元
          </div>
        </div>
      </div>
      <div class="payBox">
        <div class="top">
          <p>选择支付方式</p>
          <p>站豆可用余额&nbsp<span>{{yuEr}}</span>&nbsp个</p>
        </div>
        <div
          class="bottom"
          v-for="(item, index) of repayStyle"
          :key="index"
          @click="paySelect(index)"
        >
          <div><img :src="index === paySe ? selectedImgUrl : unselectedImgUrl"/>{{item}}</div>
          <div :class="{ hide: index === paySe ? false : true }">{{price}}&nbsp{{unit}}</div>
        </div>
      </div>
      <long-button
        :msg="btnMsg"
        @click.native="confirm"
      />
    </div>
</template>

<script>
    import HTitle from './HTitle'
    import LongButton from '@/common/LongButton'
    export default {
        components: {
          HTitle,
          LongButton,
        },
        data () {
          return {
            imgUrl: require("../../assets/img/health/Penguinhealthcard.png"),
            titleInfo: "大狗健康：全国各大药店均可使用",
            price: 100,
            priceList: [100, 200, 500, 1000, 2000, 3000],
            selected: 0,
            paySe: 3,
            unit: "站豆",
            yuEr: 2000,
            unselectedImgUrl: require("../../assets/img/health/Nopaymentselected@2x.png"),
            selectedImgUrl: require("../../assets/img/health/Purchasesuccess@2x.png"),
            payStyleList: ["001", "002"],
            btnMsg: "确认支付"
          }
        },
        computed: {
          givingPrice () {
            return this.price * 0.1
          },
          totalPrice () {
            return this.price + this.price * 0.1
          },
          repayStyle () {
            const list = this.payStyleList.map(item => {
                if(item === "001") { return "站豆支付" }
                if(item === "002") { return "微信支付" }
              });
            return list;
          }
        },
        methods: {
          select (item, index) {
            this.selected = index;
            this.price = item;
          },
          paySelect(index) {
            this.paySe = index;
            switch (index) {
              case 0:
                this.unit = "站豆";
                break;
              case 1:
                this.unit = "元";
                break;
              default:
                break;
            }
          },
          confirm () {
            alert("事件触发成功")
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .imgBox
    display flex
    justify-content center
    align-items center
    background-color $bgColor
    padding .20rem 0
    position relative
    img
      width 90%
    .infoBox
      width 2.9rem
      height 1rem
      position absolute
      right .94rem
      bottom .90rem
      color $bgColor
      p:first-child
        margin-top 5px
        font-size 16px
        span
          font-size 20px
      p:nth-child(2)
        margin-top 10px
        font-size 14px
  .priceBox
    background-color $bgColor
    border-top .01rem solid #F2F2F2
    padding .20rem .10rem 0 .10rem
    overflow hidden
    .priceItem
      width 33.3%
      height 1.6rem
      float left
      display flex
      justify-content center
      .priceContent
        width 92%
        height 1.4rem
        background-color #FFEBEB
        border .01rem solid #FE5347
        color #FE4437
        font-size .40rem
        border-radius .16rem
        display flex
        align-items center
        justify-content center
      .change
        color $bgColor
        background-color #FE4437
  .payBox
    background-color $bgColor
    margin-top .20rem
    padding .40rem .20rem
    .top
      display flex
      justify-content space-between
      font-size .28rem
      p:first-child
        font-size .32rem
      span
        color red
    .bottom
      display flex
      justify-content space-between
      font-size .28rem
      margin-top .50rem
      div:first-child
        font-size .32rem
        img
          width .36rem
          margin-right .20rem
          position relative
          bottom .06rem
      div:nth-child(2)
        color red
      .hide
        display none
</style>
