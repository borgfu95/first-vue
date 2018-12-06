<template lang="pug">
  div.dropdown
    el-dropdown(@command="handleCommand")
      span.el-dropdown-link  Hi {{ userName }}
        i(class="el-icon-arrow-down el-icon--right")
      el-dropdown-menu(slot="dropdown")
        el-dropdown-item(v-for="(item, index) in list", :key="item.name", :command="index") {{ item.name }}

</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    userName: {
      type: String
    },
    list: {
      type: Array
    }
  },
  methods: {
    handleCommand (command) {
      this.handleClick(command)
    },
    handleClick (index) {
      this.list[index].method()
    }
  }
}
</script>
<style lang="scss">
</style>
