import Api from '@/services/Api'

export default {
  fetchServer () {
    return Api().get('/server')
  }
}
