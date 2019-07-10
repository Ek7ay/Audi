<template>
    <div class="btnBox">
      <div class="btn">
        {{message}}
      </div>
    </div>
</template>

<script>
    export default {
        props: {
          msg: {
            type: String
          }
        },
        data () {
          return {
            message: this.msg
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
      color $bgColor
      background-color #FE4437
</style>
