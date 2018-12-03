<template lang="pug">
  el-container
    el-main.main-table
      Table(ref="table")
    el-footer
      el-container
        el-main
          Form.footer-form(@transferWorkOn="getWorkOn", @transferWorkItem="getWorkItem", @transferNextWorkItem="getNextWorkItem")
        el-footer
          el-button(type="primary", @click="onSave") Save
          el-button(type="success", @click="onSent") Sent
</template>
<script>
import Table from '@/components/table'
import Form from '@/components/form'
import Req from '@/utils/axios'
import Config from '@/config'

export default {
  data () {
    return {
      workOn: 'CloudSearch',
      workItem: '',
      nextWorkItem: ''
    }
  },
  props: {
  },
  components: {
    Table,
    Form
  },
  methods: {
    onSave () {
      let date = new Date()
      let data = {
        engineer: Config.userName,
        workOn: this.workOn,
        workItem: this.workItem,
        nextWorkItem: this.nextWorkItem,
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
        self.$refs.table.refrashData()
      }).catch(function (error) {
        console.log(error)
        self.$message.error('Saving DR failed')
      })
    },
    onSent () {},
    getWorkOn (data) {
      this.workOn = data
    },
    getWorkItem (data) {
      this.workItem = data
    },
    getNextWorkItem (data) {
      this.nextWorkItem = data
    }
  }
}
</script>
<style lang="scss" scoped>
.footer-form {
  float: left;
}

.main-table {
  height: 450px;
}
</style>
