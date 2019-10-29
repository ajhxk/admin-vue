import Mock from 'mockjs'
// import { param2Obj } from '../src/utils'
import { mocks } from './apis'

const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`/mock${url}`),
    type: type || 'get',
    response (req, res) {
      res.join(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}

export default mocks.map(route => {
  return responseFake(route.url, route.type, route.response)
})
