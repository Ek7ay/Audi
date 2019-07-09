<template>
    <div class="health">
      <h-title :info="titleInfo"></h-title>
    </div>
</template>

<script>
    import HTitle from './HTitle'
    export default {
        components: {
          HTitle
        },
        data () {
          return {
            titleInfo: "大狗健康：全国各大药店均可使用"
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
