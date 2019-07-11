<template>
    <div class="carActive">
     <h-title :info="titleInfo"/>
    </div>
</template>

<script>
    import HTitle from '@/common/HTitle'
    export default {
        components: {
          HTitle,
        },
        props: {

        },
        data () {
          return {
            titleInfo: {
              text: "首次激活需完善个人信心后才能使用",
              isShow: false
            },
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
