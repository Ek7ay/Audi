<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <img :src="item.imgUrl"/>
            <p>{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: "Icons",
        data () {
          return {
            swiperOption: {},
            iconList: [{
              id: "001",
              imgUrl: require("../../assets/img/index/icons/Rechargecenter@2x.png"),
              desc: "充值中心"
            },{
              id: "002",
              imgUrl: require("../../assets/img/index/icons/Tradingmarket@2x.png"),
              desc: "交易市场"
            },{
              id: "003",
              imgUrl: require("../../assets/img/index/icons/Parkingservice@2x.png"),
              desc: "停车服务"
            },{
              id: "004",
              imgUrl: require("../../assets/img/index/icons/Carwashingservice@2x.png"),
              desc: "洗车服务"
            },{
              id: "005",
              imgUrl: require("../../assets/img/index/icons/Penguinhealth@2x.png"),
              desc: "企鹅健康"
            },{
              id: "006",
              imgUrl: require("../../assets/img/index/icons/Driver'slicensedifference@2x.png"),
              desc: "驾照查分"
            },{
              id: "007",
              imgUrl: require("../../assets/img/index/icons/Illegalinvestigation@2x.png"),
              desc: "违章查办"
            },{
              id: "008",
              imgUrl: require("../../assets/img/index/icons/Finesremitted@2x.png"),
              desc: "罚单代缴"
            },{
              id: "009",
              imgUrl: require("../../assets/img/index/icons/Drivingservice@2x.png"),
              desc: "代驾服务"
            },{
              id: "010",
              imgUrl: require("../../assets/img/index/icons/Carwarranty@2x.png"),
              desc: "爱车保养"
            },{
              id: "011",
              imgUrl: require("../../assets/img/index/icons/Vehicleinspection@2x.png"),
              desc: "车辆检测"
            },{
              id: "012",
              imgUrl: require("../../assets/img/index/icons/Highincidenceofillegalactivities@2x.png"),
              desc: "违章高发"
            },{
              id: "013",
              imgUrl: require("../../assets/img/index/icons/Rescueservice@2x.png"),
              desc: "救援服务"
            },{
              id: "014",
              imgUrl: require("../../assets/img/index/icons/Carvaluation@2x.png"),
              desc: "爱车估计"
            },{
              id: "015",
              imgUrl: require("../../assets/img/index/icons/Claimsinquiry@2x.png"),
              desc: "出险理赔"
            },{
              id: "016",
              imgUrl: require("../../assets/img/index/icons/vehiclemaintenance@2x.png"),
              desc: "车辆保养"
            },]
          }
        },
        computed: {
          pages () {
            const pages = [];
            this.iconList.forEach((item, index) => {
              const page = Math.floor(index / 8);
              if (!pages[page]) {
                pages[page] = [];
              }
              pages[page].push(item)
            });
            return pages;
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/mixin.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  /*.icons*/
  /*  overflow hidden*/
  /*  height 0*/
  /*  padding-bottom 50%*/
    .icon
      float left
      width 25%
      height 0
      padding-bottom 25%
      overflow hidden
      text-align center
      img
        width 45%
        margin-top 22%
      p
        font-size .16rem
        margin-top 10%
        ellipsis()
</style>
