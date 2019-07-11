<template>
    <div :class="{ field: true, placeholder: allocation.isPlaceholderRight }">
        <div class="itemName">{{allocation.itemName}}</div>
        <input
          type="text"
          v-model="inputInfo"
          :placeholder="allocation.placeholder"
        >
        <div>
          <img
            :src="imgUrl"
            :class="{ hide: !clearShow }"
            @click="clear"
          />
        </div>
        <button v-if="allocation.btnShow">获取验证码</button>
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
            imgUrl: require("../../assets/img/common/Delete@2x.png"),
            inputInfo: "",
            clearShow: false,
            allocation: this.info
          }
        },
        watch: {
          inputInfo (data) {
            this.clearShow = data === "" ? false : true;
          }
        },
        methods: {
          clear () {
            this.inputInfo = "";
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixin.styl'
  .placeholder
    placeholder()
  .field
    background-color $bgColor
    border-top .01rem solid #F0F0F0
    height 1.1rem
    font-size .30rem
    padding 0 .30rem
    display flex
    justify-content space-between
    align-items center
    .itemName
      width 1rem
      min-width 1rem
      position relative
      bottom .01rem
    input
      flex 1
      height 1.08rem
      padding-right .20rem
    img
      width .34rem
      position relative
      top .01rem
    .hide
      display none
    button
      width 2rem
      min-width 2rem
      height .70rem
      border-radius .10rem
      font-size .28rem
      color $bgColor
      background-color #fe4437
      margin-left 10px
</style>
