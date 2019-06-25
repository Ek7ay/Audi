<template>
    <div class="navigation">
      <div @click="condition('o')">
        <img :src="ImgUrl[0]"/>
        <p :class="{ 'switch': isActive[0]}">首页</p>
      </div>
      <div @click="condition('t')">
        <img :src="ImgUrl[1]"/>
        <p :class="{ 'switch': isActive[1]}">卡券</p>
      </div>
      <div @click="condition('s')">
        <img :src="ImgUrl[2]"/>
        <p :class="{ 'switch': isActive[2]}">套餐</p>
      </div>
      <div @click="condition('f')">
        <img :src="ImgUrl[3]"/>
        <p :class="{ 'switch': isActive[3]}">我的</p>
      </div>
    </div>
</template>

<script>
    export default {
        data () {
          return {
            isActive: [true, false, false, false],
            ImgUrl: [
              require("../pages/navigation/Shopping-mall.png"),
              require("../pages/navigation/Card-not-selected.png"),
              require("../pages/navigation/Packagenotselected@2x.png"),
              require("../pages/navigation/My.png")
            ]
          }
        },
        methods: {
          condition (data) {
            switch (data) {
              case "o":
                this.isActive = [true, false, false, false];
                this.ImgUrl = [
                  require("../pages/navigation/Shopping-mall.png"),
                  require("../pages/navigation/Card-not-selected.png"),
                  require("../pages/navigation/Packagenotselected@2x.png"),
                  require("../pages/navigation/My.png")
                ];
                break;
              case "t":
                this.isActive = [false, true, false, false];
                this.ImgUrl = [
                  require("../pages/navigation/Home-page-unchecked.png"),
                  require("../pages/navigation/Card-selected.png"),
                  require("../pages/navigation/Packagenotselected@2x.png"),
                  require("../pages/navigation/My.png")
                ];
                break;
              case "s":
                this.isActive = [false, false, true, false];
                this.ImgUrl = [
                  require("../pages/navigation/Home-page-unchecked.png"),
                  require("../pages/navigation/Card-not-selected.png"),
                  require("../pages/navigation/Selectedpackage@2x.png"),
                  require("../pages/navigation/My.png")
                ];
                break;
              case "f":
                this.isActive = [false, false, false, true];
                this.ImgUrl = [
                  require("../pages/navigation/Home-page-unchecked.png"),
                  require("../pages/navigation/Card-not-selected.png"),
                  require("../pages/navigation/Packagenotselected@2x.png"),
                  require("../pages/navigation/My-choice.png")
                ];
                break;
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.navigation
  height 1rem
  display flex
  justify-content space-between
  align-items center
  background-color $bgColor
  width 100%
  position absolute
  bottom 0
  div
    width 25%
    text-align center
    img
      width 25%
    p
      text-align center
      margin-top 4%
      font-size .24rem
    .switch
      color red
</style>
