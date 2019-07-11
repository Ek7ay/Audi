<template>
    <div class="carActive">
       <h-title :info="titleInfo"/>
       <field/>
    </div>
</template>

<script>
    import HTitle from '@/common/HTitle'
    import Field from '@/common/Field'
    export default {
        components: {
          HTitle,
          Field
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
