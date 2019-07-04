<template>
    <div class="voucher">
        <on-off :data="data1"/>
        <navigation/>
    </div>
</template>

<script>
    import Navigation from '@/common/Navigation'
    import OnOff from './Onoff'
    export default {
        components: {
            Navigation,
            OnOff
        },
        data () {
          return {
            data1: { 'info': '大狗健康', 'bTop': false },
            data2: { 'info': '代驾服务', 'bTop': true }
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
