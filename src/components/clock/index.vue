<template lang="pug">
  div.clock
    p.date {{date}}
    p.time {{time}}

</template>
<script>
// import _ from 'lodash'
export default {
  data () {
    return {
      date: '',
      time: '',
      week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    }
  },
  mounted: function () {
    setInterval(this.updateTime, 1000)
    this.updateTime()
  },
  methods: {
    updateTime () {
      let cd = new Date()
      this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()]
    },
    zeroPadding (num, digit) {
      let zero = ''
      for (let i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>
<style lang="scss">
p {
  margin: 0;
  padding: 0;
}

.clock {
  color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}
.clock .time {
  letter-spacing: 0.05em;
  font-size: 14px;
  padding: 5px 0;
}
.clock .date {
  letter-spacing: 0.1em;
  font-size: 14px;
}
</style>
