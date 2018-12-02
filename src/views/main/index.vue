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
// import router from '@/router'

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
      let data = {
        engineer: 'Borg Fu',
        workOn: this.workOn,
        workItem: this.workItem,
        nextWorkItem: this.nextWorkItem,
        year: '2018',
        month: '12',
        day: '2'
      }
      let url = 'http://localhost:10010/dailyStatus'
      Req.sendPostRequest(url, data).then(function () {
        this.$refs.table.refrashData()
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
