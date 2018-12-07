const config = {
  DR_SERVER: {
    API: 'http://192.168.17.76:10010',
    ADD_DR: '/dailyStatus',
    GET_DR_BY_DATE: '/dailyStatus/year/{0}/month/{1}/day/{2}',
    GET_USER_DR: '/dailyStatus/engineer/{0}/year/{1}/month/{2}/day/{3}',
    LOGIN: '/user/login',
    REGISTER: '/user/register'
  }
}

export default config
