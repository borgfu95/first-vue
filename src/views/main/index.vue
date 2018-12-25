<template lang="pug">
  el-container
    .data-div(:class="hiddenClass")
      Form.data-form(ref="editForm", @onHiddenForm="hiddenForm", @refrashTable="refrashTable")
    el-header
      el-date-picker(v-model="selectedDate", type="date", placeholder="select date", @change="dateChanged")
      Dropdown.dropdown(:userName="currentUser" :list="dropdownList")
      Clock.clear-float
    el-main.main-table
      Table(ref="table", @buttonClick="setDateSelecte", @editDaliyStatus="editDaliyStatus")
    el-footer
      el-button(type="success", @click="onSent") Sent
</template>
<script>
import Dropdown from '@/components/dropdown'
import Clock from '@/components/clock'
import Table from '@/components/table'
import Form from '@/components/second-form'
import Config from '@/config'
import router from '@/router'
import Req from '@/utils/axios'

export default {
  data () {
    return {
      workOn: 'CloudSearch',
      workItem: '',
      nextWorkItem: '',
      dropdownList: [{name: 'Logout', method: this.logout}],
      currentUser: sessionStorage.userName,
      selectedDate: '',
      isNeedHiddenForm: false
    }
  },
  computed: {
    hiddenClass: {
      get () {
        return this.isNeedHiddenForm ? 'hidden' : ''
      }
    }
  },
  mounted: function () {
    if (!sessionStorage.userName) {
      router.push('/login')
    }
    let self = this
    let date = new Date()
    let url = Config.DR_SERVER.API + Config.DR_SERVER.GET_USER_DR.replace('{0}', sessionStorage.userName)
      .replace('{1}', date.getFullYear()).replace('{2}', date.getMonth() + 1).replace('{3}', date.getDate())
    Req.sendGetRequest(url).then(function () {
      self.isNeedHiddenForm = true
      self.$refs.editForm.formStatus = 'add'
    }).catch(function (error) {
      console.log(error)
    })
  },
  props: {
  },
  components: {
    Table,
    Form,
    Clock,
    Dropdown
  },
  methods: {
    onSent () {
      let self = this
      let mailData = Config.MAIL_HEADER + Config.MAIL_TABLE_HEADER
      for (let item of this.$refs.table.tableData) {
        let p = Config.MAIL_P.replace('{{0}}', item.engineer.toString().replace(/\n/g, '<br />'))
        mailData += ('<TR>' + Config.MAIL_TD.replace('{{0}}', p))
        p = Config.MAIL_P.replace('{{0}}', item.workOn.toString().replace(/\n/g, '<br />'))
        mailData += Config.MAIL_TD.replace('{{0}}', p)
        p = Config.MAIL_P.replace('{{0}}', item.workItem.toString().replace(/\n/g, '<br />'))
        mailData += Config.MAIL_TD.replace('{{0}}', p)
        p = Config.MAIL_P.replace('{{0}}', item.nextWorkItem.toString().replace(/\n/g, '<br />'))
        mailData += (Config.MAIL_TD.replace('{{0}}', p) + '</TR>')
      }
      mailData += ('<TABLE>' + Config.MAIL_END)
      let postData = {content: mailData}
      let url = Config.DR_SERVER.API + Config.DR_SERVER.SEND_MAIL
      Req.sendPostRequest(url, postData).then(function (result) {
        self.$message({
          message: result.message,
          type: 'success'
        })
      }).catch(function (error) {
        self.$message.error(error.message)
      })
    },
    hiddenForm () {
      this.isNeedHiddenForm = true
    },
    logout () {
      sessionStorage.userName = null
      router.push('/login')
    },
    dateChanged () {
      this.$refs.table.refrashData(this.selectedDate)
    },
    refrashTable () {
      this.$refs.table.refrashData()
    },
    setDateSelecte (date) {
      this.selectedDate = date
    },
    editDaliyStatus (row) {
      this.isNeedHiddenForm = false
      this.$refs.editForm.formData.workOn = row.workOn
      this.$refs.editForm.formData.workItem = row.workItem
      this.$refs.editForm.formData.nextWorkItem = row.nextWorkItem
      this.$refs.editForm.formStatus = 'edit'
    }
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  position: relative;
}

.el-container .data-div {
  position: absolute;
  border: 1px;
  border-color: #525355;
  border-style: solid;
  width: 340px;
  z-index: 100;
  background-color: #1c2128;
  left: 500px;
  top: 125px;
}

.el-container .data-div .data-form {
  margin-left: 20px;
}

.data-form {
  float: left;
}

.main-table {
  height: 500px;
}

.el-header .dropdown {
  float: right;
}

.el-header .el-date-editor {
  float: left;
}
</style>
