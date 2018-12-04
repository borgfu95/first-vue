<template lang="pug">
  div.clock
    h1 Borg
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
      week: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
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
  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
}
.clock .time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
}
.clock .date {
  letter-spacing: 0.1em;
  font-size: 24px;
}
</style>
