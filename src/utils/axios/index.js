import axios from 'axios'

function sendGetRequest (url) {
  return axios.get(url).then(function (res) {
    console.log(`Get request send success, response ${res}`)
    return res.data
  }).catch(function (error) {
    console.log(error)
    return Promise.reject(new Error('Failed to send get request'))
  })
}

function sendPostRequest (url, data) {
  return axios.post(url, data).then(function (res) {
    console.log(`Post request send success, response ${res}`)
    return res.data
  }).catch(function (error) {
    console.log(error)
    return Promise.reject(new Error('Failed to send post request'))
  })
}

export default {
  sendGetRequest: sendGetRequest,
  sendPostRequest: sendPostRequest
}
