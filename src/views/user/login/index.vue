<template lang="pug">
  el-container
    .login
      el-row(class="login-label-row")
        span(class="login-label") Login in
      el-row
        el-input(class="userName", v-model="userName", placeholder="Please Input User Name", clearable)
      el-row
        el-input(class="password", v-model="password", placeholder="Please Input Password", type="password", clearable)
      el-row
        el-button(type="primary", size="medium", @click="login") Login in
</template>
<script>
import router from '@/router'

export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      router.push('/main')
    }
  }
}
</script>
<style lang="scss">
*, ::after, ::before {
    box-sizing: border-box;
}
$backage_ground_color: #20262e;
$input_width: 100%;

.login {
  width: 25%;
  margin: auto;
  margin-top: 15%;
}

.login .login-label-row {
  float: left;
  margin-bottom: 10px;
}

.userName, .password, .login-label {
  width: $input_width;
  margin-bottom: 5px;
}

.login .el-input__inner {
  background-color: $backage_ground_color;
  color: #fff;
}

.login-label {
  color: #fff;
  font-size: 20px;
}

.login .el-button {
  margin-top: 10px;
  float: right;
}
</style>
