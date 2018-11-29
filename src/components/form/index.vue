<template lang="pug">
  div.container
    el-form(class="form", :inline="true", :model="formData")
      el-form-item(label="Feature Worked On")
        el-input(v-model="formData.workOn")
      el-form-item(label="Work Item")
        el-input.textarea(v-model="formData.workItem", type="textarea")
      el-form-item(label="Plan of Next Work Day")
        el-input.textarea(v-model="formData.nextWorkItem", type="textarea")
</template>
<script>
export default {
  data () {
    return {
      formData: {
        workOn: '',
        workItem: '',
        nextWorkItem: ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.container .form .el-form-item .textarea {
  width: 300px;
}
</style>
