<template lang="pug">
  el-container
    UserComponents(title="Login in", buttonName="Login in", @submitForm="login")
</template>
<script>
import UserComponents from '@/components/user'
import Req from '@/utils/axios'
import Config from '@/config'
import router from '@/router'

export default {
  components: {
    UserComponents
  },
  methods: {
    login (data) {
      let url = Config.DR_SERVER.API + Config.DR_SERVER.LOGIN
      Req.sendPostRequest(url, data).then(function (data) {
        Config.userName = data.userName
        router.push('/main')
      }).catch(function () {
        console.log('Login failed')
      })
    }
  }
}
</script>
<style lang="scss">
</style>
