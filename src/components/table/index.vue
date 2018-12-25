<template lang="pug">
  div
    el-table(class="header", :data="tableData", border, :row-style="tableRowStyle", :header-cell-style="tableHeaderColor")
      el-table-column(prop="engineer", label="Engineer", width="85")
      el-table-column(prop="workOn", label="Feature Worked On", width="150")
      el-table-column(prop="workItem", label="Work Item")
      el-table-column(prop="nextWorkItem", label="Plan of Next Work Day")
      el-table-column(label="Edit", width="50")
        template(slot-scope="scope")
          el-button(type="text", icon="el-icon-edit", @click="editDaliyStatus(scope.row)")
    el-button-group.button-group
      el-button.pervious-button(type="primary", @click="viewPerviousDR") Pervious
      el-button.current-button(type="primary", @click="viewCurrentDR") Today
</template>
<script>
import Req from '@/utils/axios'
import Config from '@/config'
import _ from 'lodash'

export default {
  data () {
    return {
      tableData: [],
      dateOffset: 0
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
    viewPerviousDR () {
      let date = new Date()
      if ((date.getDate() + this.dateOffset) > 1) {
        this.dateOffset = this.dateOffset - 1
      }
      this.refrashData()
    },
    viewCurrentDR () {
      this.dateOffset = 0
      this.refrashData()
    },
    async refrashData (date) {
      try {
        if (!date) {
          date = new Date()
        } else {
          this.dateOffset = 0
        }
        let day = date.getDate() + this.dateOffset
        this.$emit('buttonClick', new Date(date.getFullYear(), date.getMonth(), day))
        let dailyStatusUrl = Config.DR_SERVER.API + Config.DR_SERVER.GET_DR_BY_DATE.replace('{0}', date.getFullYear())
          .replace('{1}', date.getMonth() + 1).replace('{2}', day)
        let userListUrl = Config.DR_SERVER.API + Config.DR_SERVER.USER_LIST
        // Get submitted daily status
        let submittedDailyStatus = await Req.sendGetRequest(dailyStatusUrl)
        // Get user list
        let userList = await Req.sendGetRequest(userListUrl)
        // Parse results
        let results = _.map(userList, function (userName) {
          let result
          let groupedStatus = _.groupBy(submittedDailyStatus, function (item) {
            return item.engineer
          })
          let dailyStatus = _.get(groupedStatus, userName)
          if (dailyStatus && dailyStatus.length > 0) {
            result = dailyStatus[0]
          } else {
            result = {
              engineer: userName,
              workOn: 'CloudSearch',
              workItem: '',
              nextWorkItem: ''
            }
          }
          return result
        })
        this.tableData = results
      } catch (error) {
        console.log(error)
      }
    },
    editDaliyStatus (row) {
      this.$emit('editDaliyStatus', row)
    }
  }
}
</script>
<style lang="scss">
.header {
  width: 100%;
}

.button-group {
  margin-top: 20px;
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

.el-table .cell {
  white-space: pre-line;
}
</style>
