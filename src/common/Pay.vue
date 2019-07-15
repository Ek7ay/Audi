<template>
    <div class="pay">
        <div class="top">
          <div>选择支付方式</div>
          <div>站豆可用余额&nbsp;<span>{{info.totalBean}}</span>&nbsp;个</div>
        </div>
        <div
          class="bottom"
          v-for="(item, index) of payList"
          :key="index"
        >
          <div @click="paySelect(index)"><img :src="index === paySe ? SelectedUrl : noSelectedUrl"/>{{item}}</div>
          <div v-show="index === paySe ? true : false">{{info.bean}}{{unit}}</div>
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
              // totalBean: 2000,
              // bean: 15,
              // payStyleList: ["001", "002"],
              pay: this.info,
              paySe: "",
              unit: "站豆",
              noSelectedUrl: require("../assets/img/health/Nopaymentselected@2x.png"),
              SelectedUrl: require("../assets/img/health/Selectivepayment@2x.png"),
            }
        },
        computed: {
          payList () {
            const list = this.pay.payStyleList.map(item => {
              if (item === "001") { return "站豆支付" }
              if (item === "002") { return "微信支付" }
            });
            return list;
          }
        },
        methods: {
          paySelect (index) {
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
            this.$emit("getIndex", index);
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .pay
    padding .44rem .30rem
    background-color $bgColor
    .top
      display flex
      justify-content space-between
      align-items center
      div:first-child
        font-size .30rem
      div:last-child
        font-size .28rem
        span
          color $redColor
    .bottom
      display flex
      justify-content space-between
      align-items center
      margin-top .52rem
      div:first-child
        font-size .30rem
        img
          width .36rem
          position relative
          bottom .04rem
          margin-right .25rem
      div:last-child
        font-size .28rem
        color $redColor

</style>
