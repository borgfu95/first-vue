<template lang="pug">
  div
    el-table(class="header", :data="tableData", border, :row-style="tableRowStyle", :header-cell-style="tableHeaderColor", row-class-name="table-row")
      el-table-column(prop="engineer", label="Engineer", width="80")
      el-table-column(prop="workOn", label="Feature Worked On", width="150")
      el-table-column(prop="workItem", label="Work Item", width="500")
      el-table-column(prop="nextWorkItem", label="Plan of Next Work Day", width="500")
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          engineer: 'Borg Fu',
          workOn: 'CloudSearch',
          workItem: '1. Worked on defect #3430 - [cq-admin-ui] Cascade rules: The "+" button does not work after triggered the Clear operation.',
          nextWorkItem: '1. Work on defect fixing.'
        },
        {
          engineer: 'Borg Fu',
          workOn: 'CloudSearch',
          workItem: '1. Worked on defect #3430 - [cq-admin-ui] Cascade rules: The "+" button does not work after triggered the Clear operation.',
          nextWorkItem: '1. Work on defect fixing.'
        },
        {
          engineer: 'Borg Fu',
          workOn: 'CloudSearch',
          workItem: '1. Worked on defect #3430 - [cq-admin-ui] Cascade rules: The "+" button does not work after triggered the Clear operation.',
          nextWorkItem: '1. Work on defect fixing.'
        },
        {
          engineer: 'Borg Fu',
          workOn: 'CloudSearch',
          workItem: '1. Worked on defect #3430 - [cq-admin-ui] Cascade rules: The "+" button does not work after triggered the Clear operation.',
          nextWorkItem: '1. Work on defect fixing.'
        }
      ]
    }
  },
  methods: {
    tableRowStyle ({ row, rowIndex }) {
      return 'background-color: #1c2128;color: #fff;font-size: 12px;409eff'
    },
    tableHeaderColor ({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'background-color: #1c2128;color: #fff;font-weight: 500;font-size: 14px;'
      }
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
