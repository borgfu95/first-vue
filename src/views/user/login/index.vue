<template lang="pug">
  el-container
    .team-name
      img(:src="imgUrl")
    UserComponents(title="Login in", buttonName="Login in", @submitForm="login")
</template>
<script>
import UserComponents from '@/components/user'
import Req from '@/utils/axios'
import Config from '@/config'
import router from '@/router'
export default {
  data () {
    return {
      imgUrl: require('@/assets/images/services.jpg')
    }
  },
  mounted: function () {
    if (sessionStorage.userName && sessionStorage.userName !== 'null') {
      router.push('/dailyReport')
    }
  },
  components: {
    UserComponents
  },
  methods: {
    login (data) {
      let self = this
      let url = Config.DR_SERVER.API + Config.DR_SERVER.LOGIN
      Req.sendPostRequest(url, data).then(function (data) {
        self.$message({
          message: 'Success in login',
          type: 'success'
        })
        sessionStorage.userName = data.userName
        router.push('/dailyReport')
      }).catch(function () {
        console.log('Login failed')
        self.$message.error('Failed to login')
      })
    }
  }
}
</script>
<style lang="scss">
.el-container {
  position: relative;
}

.el-container .team-name {
  position: absolute;
  left: 34%;
}
</style>
