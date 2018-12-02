<template lang="pug">
  div.container
    el-form.form(:inline="true", :model="formData")
      el-form-item(label="Feature Worked On")
        el-input(v-model="formData.workOn", @change="changeWorkOn")
      el-form-item(label="Work Item")
        el-input.textarea(v-model="formData.workItem", @change="changeWorkItem", type="textarea", resize="none", min-height="80px")
      el-form-item(label="Plan of Next Work Day")
        el-input.textarea(v-model="formData.nextWorkItem", @change="changeNextWorkItem", type="textarea", resize="none")
</template>
<script>
// import _ from 'lodash'
export default {
  data () {
    return {
      formData: {
        workOn: 'CloudSearch',
        workItem: '',
        nextWorkItem: ''
      }
    }
  },
  methods: {
    changeWorkOn () {
      this.$emit('transferWorkOn', this.formData.workOn)
    },
    changeWorkItem () {
      this.$emit('transferWorkItem', this.formData.workItem)
    },
    changeNextWorkItem () {
      this.$emit('transferNextWorkItem', this.formData.nextWorkItem)
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
