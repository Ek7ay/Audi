<template>
    <div class="order">
        <order-card
            v-for="item of cardInfo"
            :info="item"
            :key="item.id"
            @click.native="toDetail"
        />
    </div>
</template>

<script>
    import OrderCard from './OrderCard'
    export default {
        components: {
            OrderCard
        },
        data () {
            return {
                cardInfo: [
                  {
                      id: "001",
                      imgUrl: require("../../assets/img/order/Vehicleinspection@2x.png"),
                      name: "车辆事故检测",
                      orderNum: "48814545458715",
                      time: "2018-8-15 11:25:00",
                      price: 149,
                      num: 1,
                      state: "01",
                  },{
                      id: "002",
                      imgUrl: require("../../assets/img/order/Carwarranty@2x.png"),
                      name: "爱车保修检测",
                      orderNum: "488145454545",
                      time: "2018-8-15 11:24:00",
                      price: 99,
                      num: 9,
                      state: "01",
                  },{
                      id: "003",
                      imgUrl: require("../../assets/img/order/Drivingservice@2x.png"),
                      name: "代驾服务",
                      orderNum: "4881454545225",
                      time: "2018-8-15 02:24:36",
                      price: 700,
                      num: 1,
                      state: "01",
                  },{
                      id: "004",
                      imgUrl: require("../../assets/img/order/Carwashingservice@2x.png"),
                      name: "大狗洗车服务",
                      orderNum: "4881454545441",
                      time: "2018-8-15 08:24:22",
                      price: 290,
                      num: 30,
                      state: "01",
                  },{
                      id: "005",
                      imgUrl: require("../../assets/img/order/Carvaluation@2x.png"),
                      name: "爱车估值",
                      orderNum: "488145454155",
                      time: "2018-8-15 11:36:15",
                      price: 15,
                      num: 10,
                      state: "01",
                  },{
                      id: "006",
                      imgUrl: require("../../assets/img/order/Insuranceclaim@2x.png"),
                      name: "出险理赔",
                      orderNum: "488144981196",
                      time: "2018-8-15 11:24:35",
                      price: 15,
                      num: 1,
                      state: "01",
                  },{
                      id: "007",
                      imgUrl: require("../../assets/img/order/Highincidenceofviolation@2x.png"),
                      name: "违章高发",
                      orderNum: "4881454549698",
                      time: "2018-8-15 10:24:24",
                      price: 15,
                      num: 1,
                      state: "01",
                  },{
                      id: "008",
                      imgUrl: require("../../assets/img/order/Penguinhealth@2x.png"),
                      name: "企鹅健康",
                      orderNum: "4881454579",
                      time: "2018-8-15 06:24:29",
                      price: 1000,
                      num: 5,
                      state: "01",
                  },{
                      id: "009",
                      imgUrl: require("../../assets/img/order/Transferofstandingbean@2x.png"),
                      name: "站豆转让",
                      orderNum: "48814569849",
                      time: "2018-8-15 09:35:00",
                      price: 100,
                      num: 1,
                      state: "01",
                  },{
                      id: "010",
                      imgUrl: require("../../assets/img/order/illegalquery@2x.png"),
                      name: "违章查询",
                      orderNum: "4881454556894",
                      time: "2018-8-15 09:24:12",
                      price: 10,
                      num: 1,
                      state: "01",
                  },{
                      id: "011",
                      imgUrl: require("../../assets/img/order/Top-upoilcard@2x.png"),
                      name: "中国石油卡油卡充值",
                      orderNum: "488145499769",
                      time: "2018-8-15 09:24:36",
                      price: 100,
                      num: 60,
                      state: "01",
                  },{
                      id: "012",
                      imgUrl: require("../../assets/img/order/Prepaidrecharge@2x.png"),
                      name: "话费充值",
                      orderNum: "488145465987",
                      time: "2018-8-15 11:24:45",
                      price: 10,
                      num: 1,
                      state: "01",
                  },{
                      id: "013",
                      imgUrl: require("../../assets/img/order/Etcpstop@2x.png"),
                      name: "ETCP停车券",
                      orderNum: "4881454987962",
                      time: "2018-8-15 22:22:10",
                      price: 10,
                      num: 100,
                      state: "01",
                  },{
                      id: "014",
                      imgUrl: require("../../assets/img/order/Refuelingprepaidcardpurchase@2x.png"),
                      name: "中国石化加油充值卡采购",
                      orderNum: "488145469789",
                      time: "2018-8-15 23:24:53",
                      price: 100000,
                      num: 25,
                      state: "01",
                  },{
                      id: "015",
                      imgUrl: require("../../assets/img/order/CarWash@2x.png"),
                      name: "洗车卡交易",
                      orderNum: "488145497986",
                      time: "2018-8-15 20:00:00",
                      price: 180,
                      num: 800,
                      state: "01",
                  }
                ]
            }
        },
        methods: {
          toDetail () {
            this.$router.push({
              path: "/order-details"
            })
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
