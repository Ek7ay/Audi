<template>
    <div :class="{ too: true, tooBor: data.bTop }" @click="switchover()">
      {{data.info}}
      <img :src="imgUrl"/>
    </div>
</template>

<script>
    export default {
        props: {
          data: {
            type: Object
          }
        },
        data () {
            return {
              imgUrl: require("../assets/img/voucher/Enter@2x.png"),
            }
        },
        methods: {
          switchover () {
            this.imgUrl = this.imgUrl === require("../assets/img/voucher/Enter@2x.png")
              ? require("../assets/img/voucher/drop-down@2x.png")
              : require("../assets/img/voucher/Enter@2x.png");
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.tooBor
  border-top 0.01rem solid #EFEFEF
.too
  line-height .88rem
  background-color $bgColor
  font-size .32rem
  color #414141
  padding 0 .30rem
  img
    float right
    margin-top .26rem
</style>
