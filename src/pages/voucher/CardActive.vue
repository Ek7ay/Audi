<template>
    <div class="carActive">
       <h-title :info="titleInfo"/>
       <field
         v-for="item of fieldInfo"
         :info="item"
         :key="item.id"
       />
       <long-button
         :msg="btnMsg"
         @click.native="jump"
       />
    </div>
</template>

<script>
    import HTitle from '@/common/HTitle'
    import LongButton from '@/common/LongButton'
    import Field from './Field'
    export default {
        components: {
          HTitle,
          LongButton,
          Field
        },
        data () {
          return {
            titleInfo: {
              text: "首次激活需完善个人信心后才能使用",
              isShow: false
            },
            fieldInfo: [{
              id: "001",
              itemName: "姓名",
              placeholder: "请输入姓名",
              isPlaceholderRight: false,
              btnShow: false
            },{
              id: "002",
              itemName: "电话",
              placeholder: "请输入电话号码",
              isPlaceholderRight: false,
              btnShow: false
            },{
              id: "003",
              itemName: "身份证",
              placeholder: "请输入身份证号码",
              isPlaceholderRight: false,
              btnShow: false
            },{
              id: "004",
              itemName: "验证码",
              placeholder: "请输入验证码",
              isPlaceholderRight: false,
              btnShow: true
            }],
            btnMsg: {
              message: "激活并保存",
              color: "#fff",
              backgroundColor: '#FE4437'
            }
          }
        },
        methods: {
          jump () {
            this.$router.push({
              path: "/active-succ"
            })
          }
        }
    }
</script>

<style lang="stylus" scoped>

</style>
