<template lang="pug">
  div.container(:class="hiddenClass")
    el-form.form(:model="formData")
      el-form-item(label="Feature Worked On")
        el-input(v-model="formData.workOn")
      el-form-item(label="Work Item")
        el-input.textarea(v-model="formData.workItem", type="textarea", resize="none", min-height="80px")
      el-form-item(label="Plan of Next Work Day")
        el-input.textarea(v-model="formData.nextWorkItem", type="textarea", resize="none")
      el-form-item
        el-button(type="primary", icon="el-icon-edit", @click="onSave") Save
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
      }
    }
  },
  props: {
    hiddenClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    onSave () {
      let date = new Date()
      let data = {
        engineer: Config.userName.trim(),
        workOn: this.formData.workOn.trim(),
        workItem: this.formData.workItem.trim(),
        nextWorkItem: this.formData.nextWorkItem.trim(),
        year: date.getFullYear().toString(),
        month: (date.getMonth() + 1).toString(),
        day: (date.getDate()).toString()
      }
      let url = Config.DR_SERVER.API + Config.DR_SERVER.ADD_DR
      let self = this
      Req.sendPostRequest(url, data).then(function () {
        self.$message({
          message: 'Saving DR success',
          type: 'success'
        })
        self.$emit('refrashTable')
        self.hiddenClass = 'hidden'
        self.$emit('onHiddenForm')
      }).catch(function (error) {
        console.log(error)
        self.$message.error('Saving DR failed')
      })
    },
    onCancel () {
      this.hiddenClass = 'hidden'
      this.$emit('onHiddenForm')
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
