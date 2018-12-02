import axios from 'axios'

function sendGetRequest (url) {
  return axios.get(url).then(function (res) {
    console.log(`Get request send success, response ${res}`)
    return res.data
  }).catch(function (error) {
    console.log(error)
  })
}

function sendPostRequest (url, data) {
  return axios.post(url, data).then(function (res) {
    console.log(`Post request send success, response ${res}`)
  }).catch(function (error) {
    console.log(error)
  })
}

export default {
  sendGetRequest: sendGetRequest,
  sendPostRequest: sendPostRequest
}
