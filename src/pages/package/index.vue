<template>
    <div class="package">
      <on-off
        :data="data1"
        @click.native="cardHide"
      />
      <pack-card
        v-show="isSHOW"
        v-for="item of packList"
        :packData="item"
        :key="item.id"
      />
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
            isSHOW: true,
            packList: [
              {
                id: "01",
                pName: "标准洗车",
                times: 10,
                packName: "洗车A套餐",
                packModel: "5座及以下小型轿车",
                packTime: "2019-10-03",
                packState: "001"
              },
              {
                id: "02",
                pName: "高级洗车",
                times: 20,
                packName: "洗车B套餐",
                packModel: "5座及以下小型轿车",
                packTime: "2019-09-03",
                packState: "002"
              },
              {
                id: "03",
                pName: "至尊洗车",
                times: 30,
                packName: "洗车C套餐",
                packModel: "5座及以下小型轿车",
                packTime: "2019-12-03",
                packState: "003"
              }
            ]
          }
        },
        methods: {
          cardHide () {
            this.isSHOW = this.isSHOW === true ? false : true;
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
