<template>
    <div class="package">
      <on-off :data="data1"/>
      <pack-card :packData="packData"/>
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
            data1: { info: '洗车套餐', bTop: false },
            packData: {
              pName: "标准洗车",
              times: 10,
              packName: "洗车A套餐",
              packModel: "5座及以下小型轿车",
              packTime: "2019-09-03",
              packState: "002"
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
