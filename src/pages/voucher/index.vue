<template>
    <div class="voucher">
        <on-off :data="data1"/>
        <info-card :cardInfo="cardData"/>
        <info-card :cardInfo="cardData"/>
        <info-card :cardInfo="cardData"/>
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
            cardData: {
              project: "大狗健康",
              price: "2000",
              date: "2019-01-01",
              state: "未激活"
            }
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
