<template lang="pug">
  el-container
    .data-div(:class="hiddenClass")
      Form.data-form(@onHiddenForm="hiddenForm", @refrashTable="refrashTable")
    el-header
      el-date-picker(v-model="selectedDate", type="date", placeholder="select date", @change="dateChanged")
      Dropdown.dropdown(:userName="currentUser" :list="dropdownList")
      Clock.clear-float
    el-main.main-table
      Table(ref="table", @buttonClick="setDateSelecte")
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
      currentUser: Config.userName,
      selectedDate: '',
      isSavedDR: false
    }
  },
  computed: {
    hiddenClass: function () {
      return this.isSavedDR ? 'hidden' : ''
    }
  },
  mounted: function () {
    if (!Config.userName) {
      router.push('/login')
    }
    let self = this
    let date = new Date()
    let url = Config.DR_SERVER.API + Config.DR_SERVER.GET_DR_BY_DATE.replace('{0}', Config.userName)
      .replace('{1}', date.getFullYear()).replace('{2}', date.getMonth() + 1).replace('{3}', date.getDate())
    Req.sendGetRequest(url).then(function () {
      self.isSavedDR = true
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
      console.log('123')
    },
    hiddenForm () {
      this.hiddenClass = 'hidden'
    },
    logout () {
      Config.userName = null
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
  height: 450px;
}

.el-header .dropdown {
  float: right;
}

.el-header .el-date-editor {
  float: left;
}
</style>
