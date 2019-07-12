<template>
  <div class="anyBox">
    <div class="details">
      <div class="cell cell-back">
        订单信息
      </div>
      <div class="cell">
        <div>订单编号</div>
        <div>54545454878689835165</div>
      </div>
      <div class="cell">
        <div>商品</div>
        <div>企鹅健康服务</div>
      </div>
      <div class="cell">
        <div>价值</div>
        <div><span>{{price}}</span>&nbsp;元</div>
      </div>
      <div class="cell">
        <div>购买日期</div>
        <div>2018-08-27 20:45:30</div>
      </div>
      <div class="cell">
        <div>有效期至</div>
        <div>2018-10-10</div>
      </div>
      <div class="cell">
        <div>状态</div>
        <div><span>已激活</span></div>
      </div>
      <div class="cell">
        <div>激活日期</div>
        <div>2018-08-27 20:45:30</div>
      </div>
      <div class="cell">
        <div>激活姓名</div>
        <div>王楠楠</div>
      </div>
      <div class="cell">
        <div>手机号码</div>
        <div>{{phNum}}</div>
      </div>
      <div class="cell">
        <div>订单总价</div>
        <div><span>{{price}}站豆</span></div>
      </div>
    </div>
    <long-button
      :msg="btnMsg"
      @click.native="goHome"
    />
  </div>

</template>

<script>
    import LongButton from '@/common/LongButton'
    export default {
        components: {
          LongButton
        },
        data () {
          return {
            price: 1000,
            phNum: 17610159688,
            btnMsg: {
              message: "返回首页",
              color: "#fff",
              backgroundColor: '#FE4437'
            }
          }
        },
        methods: {
          goHome () {
            this.$router.push({
              path: "/"
            })
          }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.details
  background-color $bgColor
  .cell
    padding 0 .30rem
    height .98rem
    font-size .30rem
    display flex
    justify-content space-between
    align-items center
    border-top .01rem solid #EFEFEF
    div:first-child
      color #2f2f2f
      width 1.6rem
    div:last-child
      flex 1
      font-size .26rem
      color #787878
      span
        color #fe4437
  .cell-back
    background-color #F6F6F8
    color #5e5e5e
</style>
