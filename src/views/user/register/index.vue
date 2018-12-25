<template lang="pug">
  el-container
    .team-name
      img(:src="imgUrl")
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
      let self = this
      let url = Config.DR_SERVER.API + Config.DR_SERVER.REGISTER
      Req.sendPostRequest(url, data).then(function () {
        self.$message({
          message: 'Success in register',
          type: 'success'
        })
        router.push('/login')
      }).catch(function (error) {
        self.$message.error(error.message)
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
