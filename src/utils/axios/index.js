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
    if (error.response.status === 400) {
      return Promise.reject(error.response.data)
    }
    return Promise.reject(new Error('Failed to send post request'))
  })
}

function sendPutRequest (url, data) {
  return axios.put(url, data).then(function (res) {
    console.log(`Put request send success, response ${res}`)
    return res.data
  }).catch(function (error) {
    console.log(error)
    return Promise.reject(new Error('Failed to send post request'))
  })
}

export default {
  sendGetRequest: sendGetRequest,
  sendPostRequest: sendPostRequest,
  sendPutRequest: sendPutRequest
}
