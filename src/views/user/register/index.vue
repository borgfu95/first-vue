<template lang="pug">
  el-container
    UserComponents(title="Register", buttonName="Register", @submitForm="register")
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
    register (data) {
      let url = Config.DR_SERVER.API + Config.DR_SERVER.REGISTER
      Req.sendPostRequest(url, data).then(function () {
        router.push('/login')
      }).catch(function () {
        console.log('Register failed')
      })
    }
  }
}
</script>
<style lang="scss">
</style>
