<template lang="pug">
  el-container
    .title
      el-row(class="title-label-row")
        span(class="title-label") {{title}}
      el-row
        el-input(class="userName", v-model="userName", placeholder="Please Input User Name", @keyup.13.native="submit", clearable)
      el-row
        el-input(class="password", v-model="password", placeholder="Please Input Password", @keyup.13.native="submit", type="password", clearable)
      el-row.submit-button-row
        el-button.submit-button(type="primary", size="medium", @click="submit") {{buttonName}}
      el-row
        router-link.btn-register(to="/register", :style="{display: isDisplay}") register
</template>
<script>
export default {
  data () {
    return {
      imgUrl: require('@/assets/images/services.jpg'),
      userName: '',
      password: ''
    }
  },
  computed: {
    isDisplay () {
      return this.title === 'Login in' ? 'inherit' : 'none'
    }
  },
  props: {
    title: {
      type: String
    },
    buttonName: {
      type: String
    }
  },
  methods: {
    submit (e) {
      if (e.keyCode && e.keyCode !== 13) {
        return
      }
      if (!this.userName) {
        this.$message({
          message: 'Please input userName',
          type: 'warning'
        })
        return
      }
      if (!this.password) {
        this.$message({
          message: 'Please input password',
          type: 'warning'
        })
        return
      }
      this.$emit('submitForm', {userName: this.userName, password: this.password})
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

.title {
  width: 25%;
  margin: auto;
  margin-top: 15%;
}

.title .title-label-row {
  float: left;
  margin-bottom: 10px;
}

.userName, .password, .title-label {
  width: $input_width;
  margin-bottom: 5px;
}

.title .el-input__inner {
  background-color: $backage_ground_color;
  color: #fff;
}

.title-label {
  color: #fff;
  font-size: 20px;
}

.title .el-button {
  margin-top: 10px;
  float: right;
}

.title .btn-register {
  float: right;
  color: #409eff;
  font-size: 14px;
}

.title .submit-button-row .submit-button {
  background-color: #1c2128;
  color: #409eff;
}
</style>
