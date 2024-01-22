import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Archizavr/Real-Vue-3-Demo',
  withCredentials: false,
  headers: {
    Accept: 'aplication/json',
    'Content-Type': 'aplication/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
