<template lang="pug">
  el-container
    el-main.main-table
      Table
    el-footer
      el-container
        el-main
          Form.footer-form
        el-footer
          el-button(type="primary", @click="onSave") Save
          el-button(type="success", @click="onSent") Sent
</template>
<script>
import Table from '@/components/table'
import Form from '@/components/form'
// import router from '@/router'

export default {
  data () {
    return {
    }
  },
  components: {
    Table,
    Form
  },
  methods: {
    onSave () {
      // router.push('/view')
    },
    onSent () {}
  }
}
</script>
<style lang="scss" scoped>
.footer-form {
  float: left;
}

.main-table {
  height: 500px;
}
</style>
