<template>
    <div class="btnBox">
      <div class="btn" :style="{ color: info.color, backgroundColor: info.backgroundColor }">
        {{info.message}}
      </div>
    </div>
</template>

<script>
    export default {
        props: {
          msg: {
            type: Object
          }
        },
        data () {
          return {
            info: this.msg
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .btnBox
    padding 0 .30rem
    margin-top .60rem
    .btn
      line-height .80rem
      text-align center
      border-radius .10rem
      font-size .32rem
      border .01rem solid #FE4437
</style>
