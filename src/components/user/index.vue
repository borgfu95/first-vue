<template lang="pug">
  el-container
    .title
      el-row(class="title-label-row")
        span(class="title-label") {{title}}
      el-row
        el-input(class="userName", v-model="userName", placeholder="Please Input User Name", clearable)
      el-row
        el-input(class="password", v-model="password", placeholder="Please Input Password", type="password", clearable)
      el-row
        el-button(type="primary", size="medium", @click="submit") {{buttonName}}
      el-row
        router-link.btn-register(to="/register", :style="{display: isDisplay}") register
</template>
<script>
export default {
  data () {
    return {
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
    submit () {
      if (this.userName && this.password) {
        this.$emit('submitForm', {userName: this.userName, password: this.password})
      }
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
  color: white;
  font-size: 14px;
}
</style>
