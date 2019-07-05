<template>
    <div class="package">
      <on-off :data="data1"/>
      <pack-card/>
      <navigation/>
    </div>
</template>

<script>
    import Navigation from '@/common/Navigation'
    import OnOff from '../../common/OnOff'
    import PackCard from './PackCard'
    export default {
        components: {
          Navigation,
          OnOff,
          PackCard
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
