<template>
    <div class="voucher">
        <on-off :data="data1"/>
        <info-card
          v-for="item in cardList"
          :cardInfo="item"
          :key="item.id"
        />
        <navigation/>
    </div>
</template>

<script>
    import Navigation from '@/common/Navigation'
    import OnOff from './Onoff'
    import InfoCard from './InfoCard'
    export default {
        components: {
            Navigation,
            OnOff,
            InfoCard
        },
        data () {
          return {
            data1: { 'info': '大狗健康', 'bTop': false },
            data2: { 'info': '代驾服务', 'bTop': true },
            cardList: [{
              id: "01",
              project: "大狗健康",
              price: "2000",
              date: "2019-01-01",
              state: "001",
              btnState: "a"
            },{
              id: "02",
              project: "大狗健康",
              price: "3000",
              date: "2019-07-05",
              state: "002",
              btnState: "b"
            },{
              id: "03",
              project: "大狗健康",
              price: "5000",
              date: "2019-07-10",
              state: "003",
              btnState: "c"
            }]
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
