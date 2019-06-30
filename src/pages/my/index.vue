<template>
  <div class="my">
    <div class="redBack"></div>
    <div class="card">
        <div class="cardTop">
            <img class="portrait" :src="portraitUrl">
            <div class="editBox">
              <span>苗苗</span><img class="edit" :src="editUrl">
            </div>
            <div class="codeBox">
              激活兑换码
              <img :src="codeUrl">
            </div>
        </div>
        <div class="cardBottom">

        </div>
    </div>
    <navigation></navigation>
  </div>
</template>

<script>
  import Navigation from '@/common/Navigation'

  export default {
    name: "index",
    components: {
      Navigation
    },
    data() {
      return {
        portraitUrl: require("../../assets/img/my/Headportrait@2x.png"),
        editUrl: require("../../assets/img/my/Edit@2x.png"),
        codeUrl: require("../../assets/img/my/Activateredemptioncodeentry@2x.png"),
      }
    }
  }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixin.styl'
.my
    .redBack
        height 3rem
        background-color red
    .card
        width 90%
        height 3rem
        position absolute
        top 1.5rem
        left 50%
        transform translateX(-50%)
        background-color $bgColor
        border-radius .2rem
        display flex
        flex-flow column
        justify-content space-between
        .cardTop
            flex 1
            border-bottom .02rem solid #33333324
            text-align center
            font-size .24rem
            position relative
            .portrait
              width 1.2rem
              position relative
              bottom .66rem
            .editBox
              position relative
              bottom .30rem
              .edit
                width .22rem
                margin-left .1rem
                position relative
                bottom .02rem
            .codeBox
              background-color red
              width 1.7rem
              line-height .52rem
              position absolute
              right 0rem
              top 0.5rem
              border-bottom-left-radius .34rem
              border-top-left-radius .34rem
              color $bgColor
              font-size .24rem
              padding-left .04rem
              img
                width .12rem
                position relative
                bottom .02rem
        .cardBottom
            flex 1
</style>