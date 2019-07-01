<template>
    <div class="myIcons">
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
        data () {
          return {
            swiperOption: {},
            iconList: [{
              id: '001',
              imgUrl: require("../../assets/img/my/icons/Billdetails@2x.png"),
              desc: '账户明细'
            },{
              id: '002',
              imgUrl: require("../../assets/img/my/icons/Myorder@2x.png"),
              desc: '我的订单'
            },{
              id: '003',
              imgUrl: require("../../assets/img/my/icons/Myvoucher@2x.png"),
              desc: '我的卡券'
            },{
              id: '004',
              imgUrl: require("../../assets/img/my/icons/Mygascard@2x.png"),
              desc: '我的加油卡'
            },{
              id: '005',
              imgUrl: require("../../assets/img/my/icons/termofservice@2x.png"),
              desc: '服务条款'
            },{
              id: '006',
              imgUrl: require("../../assets/img/my/icons/faq@2x.png"),
              desc: '常见问题'
            },{
              id: '007',
              imgUrl: require("../../assets/img/my/icons/Billdetails@2x.png"),
              desc: '账户明细'
            },{
              id: '008',
              imgUrl: require("../../assets/img/my/icons/Myorder@2x.png"),
              desc: '我的订单'
            },{
              id: '009',
              imgUrl: require("../../assets/img/my/icons/Myvoucher@2x.png"),
              desc: '我的卡券'
            },{
              id: '010',
              imgUrl: require("../../assets/img/my/icons/Mygascard@2x.png"),
              desc: '我的加油卡'
            },{
              id: '011',
              imgUrl: require("../../assets/img/my/icons/termofservice@2x.png"),
              desc: '服务条款'
            }]
          }
        },
        computed: {
          pages () {
            const pages = [];
            this.iconList.forEach((item, index) => {
              const page = Math.floor(index / 6);
              if (!pages[page]) {
                pages[page] = [];
              }
              pages[page].push(item);
            });
            return pages;
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.myIcons
  padding-bottom 59.9%
  width 90%
  background-color $bgColor
  margin 1.8rem auto 0 auto
  border-radius .2rem
  height 0
  box-shadow: 0 .04rem #E3E3E5;
  .icon
    width 33.3%
    padding-bottom 33.3%
    height 0
    float left
    overflow hidden
    text-align center
    img
      width 25%
      margin-top 26%
    p
      margin-top 10%
      font-size .32rem
      color #2E2E2E
</style>
