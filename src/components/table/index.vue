<template lang="pug">
  div
    el-table(class="header", :data="tableData", border, :row-style="tableRowStyle", :header-cell-style="tableHeaderColor")
      el-table-column(prop="engineer", label="Engineer", width="80")
      el-table-column(prop="workOn", label="Feature Worked On", width="150")
      el-table-column(prop="workItem", label="Work Item")
      el-table-column(prop="nextWorkItem", label="Plan of Next Work Day")
</template>
<script>
import Req from '@/utils/axios'

export default {
  data () {
    return {
      tableData: []
    }
  },
  created: function () {
    this.refrashData()
  },
  methods: {
    tableRowStyle ({ row, rowIndex }) {
      return 'background-color: #1c2128;color: #fff;font-size: 12px;'
    },
    tableHeaderColor ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #1c2128;color: #fff;font-weight: 500;font-size: 14px;'
      }
    },
    refrashData () {
      let url = 'http://localhost:10010/dailyStatus/year/2018/month/12/day/2'
      let self = this
      Req.sendGetRequest(url).then(function (data) {
        self.tableData = data
      })
    }
  }
}
</script>
<style lang="scss">
.header {
  width: 100%;
}

.el-table--enable-row-hover .el-table__body tr:hover>td {
  background-color: #1c2128 !important;
}

.el-table--border, .el-table--group{
    border-color: #6a6a6a;
  }

.el-table--border::after, .el-table--group::after, .el-table::before{
  background: #6a6a6a;
}

.el-table td, .el-table th.is-leaf {
  border-color: #6a6a6a;
}
</style>
