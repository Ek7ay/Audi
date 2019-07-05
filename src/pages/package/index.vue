<template>
    <div class="package">
      <on-off :data="data1"/>
      <navigation/>
    </div>
</template>

<script>
    import Navigation from '@/common/Navigation'
    import OnOff from '../../common/OnOff'
    export default {
        components: {
          Navigation,
          OnOff
        },
        data () {
          return {
            data1: { info: '洗车套餐', bTop: false }
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
