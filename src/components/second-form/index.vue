<template lang="pug">
  div.container
    el-form.form(:model="formData")
      el-form-item(label="Feature Worked On")
        el-input(v-model="formData.workOn")
      el-form-item(label="Work Item")
        el-input.textarea(v-model="formData.workItem", type="textarea", resize="none", min-height="80px")
      el-form-item(label="Plan of Next Work Day")
        el-input.textarea(v-model="formData.nextWorkItem", type="textarea", resize="none")
      el-form-item
        el-button(type="primary", icon="el-icon-edit", @click="onSubmitForm") Save
        el-button(type="danger", icon="el-icon-delete", @click="onCancel") Cancel
</template>
<script>
import Req from '@/utils/axios'
import Config from '@/config'
// import _ from 'lodash'
export default {
  data () {
    return {
      formData: {
        workOn: 'CloudSearch',
        workItem: '',
        nextWorkItem: ''
      },
      formStatus: 'add'
    }
  },
  methods: {
    onSubmitForm () {
      let date = new Date()
      let workOn = this.formData.workOn.trim()
      let workItem = this.formData.workItem.trim()
      let nextWorkItem = this.formData.nextWorkItem.trim()
      if (!workOn) {
        this.$message.error('Feature worked on can not be empty')
        return
      }
      if (!workItem) {
        this.$message.error('Work item can not be empty')
        return
      }
      if (!nextWorkItem) {
        this.$message.error('Plan of next work day can not be empty')
        return
      }
      let data = {
        engineer: sessionStorage.userName.trim(),
        workOn: workOn,
        workItem: workItem,
        nextWorkItem: nextWorkItem,
        year: date.getFullYear().toString(),
        month: (date.getMonth() + 1).toString(),
        day: (date.getDate()).toString()
      }
      let url = Config.DR_SERVER.API + Config.DR_SERVER.ADD_DR
      let self = this
      if (this.formStatus === 'add') {
        Req.sendPostRequest(url, data).then(function () {
          self.$message({
            message: 'Saving DR success',
            type: 'success'
          })
          self.$emit('refrashTable')
          self.$emit('onHiddenForm')
        }).catch(function (error) {
          console.log(error)
          self.$message.error('Saving DR failed')
        })
      } else {
        Req.sendPutRequest(url, data).then(function () {
          self.$message({
            message: 'Update DR success',
            type: 'success'
          })
          self.$emit('refrashTable')
          self.$emit('onHiddenForm')
        }).catch(function (error) {
          console.log(error)
          self.$message.error('Update DR failed')
        })
      }
    },
    onCancel () {
      this.$emit('onHiddenForm')
    }
  }
}
</script>
<style lang="scss" scoped>
.container .form .el-form-item .textarea /deep/ textarea {
  width: 300px;
  height: 80px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
