<template>
    <div class="city">
        <div
          class="cityItem"
          v-for="(item, index) of cityList"
          :key="index"
        >
          <div>{{item.jane}}<span>{{item.province}}</span></div>
          <div>
            <img :src="imgUrl"/>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
          return {
            imgUrl: require("../../assets/img/health/Selectivepayment@2x.png"),
            cityList: [
              {
                jane: "京",
                province: "北京"
              },
              {
                jane: "津",
                province: "天津"
              },
              {
                jane: "渝",
                province: "重庆"
              },
              {
                jane: "沪",
                province: "上海"
              },{
                jane: "冀",
                province: "河北"
              },{
                jane: "晋",
                province: "山西"
              },{
                jane: "辽",
                province: "辽宁"
              },{
                jane: "吉",
                province: "吉林"
              },{
                jane: "黑",
                province: "黑龙江"
              },{
                jane: "苏",
                province: "江苏"
              },{
                jane: "浙",
                province: "浙江"
              },{
                jane: "皖",
                province: "安徽"
              },{
                jane: "闽",
                province: "福建"
              },{
                jane: "赣",
                province: "江西"
              },{
                jane: "鲁",
                province: "山东"
              },{
                jane: "豫",
                province: "河南"
              },{
                jane: "鄂",
                province: "湖北"
              },{
                jane: "湘",
                province: "湖南"
              },{
                jane: "粤",
                province: "广东"
              },{
                jane: "琼",
                province: "海南"
              },{
                jane: "川",
                province: "四川"
              },{
                jane: "贵",
                province: "贵州"
              },{
                jane: "云",
                province: "云南"
              },{
                jane: "陕",
                province: "陕西"
              },{
                jane: "甘",
                province: "甘肃"
              },{
                jane: "青",
                province: "青海"
              },{
                jane: "台",
                province: "台湾"
              },{
                jane: "蒙",
                province: "内蒙古"
              },{
                jane: "桂",
                province: "广西"
              },{
                jane: "宁",
                province: "宁夏"
              },{
                jane: "新",
                province: "新疆"
              },{
                jane: "藏",
                province: "西藏"
              },{
                jane: "港",
                province: "香港"
              },{
                jane: "澳",
                province: "澳门"
              }
            ]
          }
        }
    }
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .city
    background-color $bgColor
    .cityItem
      padding 0 .40rem 0 .30rem
      border-bottom .01rem solid #d9dbe0
      height .98rem
      display flex
      justify-content space-between
      align-items center
      div:first-child
        font-size .30rem
        color black
        span
          margin-left .30rem
      div:last-child
        img
          width .36rem
</style>
