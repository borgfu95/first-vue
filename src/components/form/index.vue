<template lang="pug">
  div.container
    el-form.form(:inline="true", :model="formData")
      el-form-item(label="Feature Worked On")
        el-input(v-model="formData.workOn")
      el-form-item(label="Work Item")
        el-input.textarea(v-model="formData.workItem", type="textarea", resize="none", min-height="80px")
      el-form-item(label="Plan of Next Work Day")
        el-input.textarea(v-model="formData.nextWorkItem", type="textarea", resize="none")
</template>
<script>
export default {
  data () {
    return {
      formData: {
        workOn: 'CloudSearch',
        workItem: '',
        nextWorkItem: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container .form .el-form-item .textarea /deep/ textarea {
  width: 300px;
  height: 80px;
}
</style>
