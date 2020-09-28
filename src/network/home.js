import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page) {
      return request({
        // baseURL = "http://152.136.185.210:8000/api/z8"
        // url:'http://152.136.185.210:8000/api/z8/home/data?type=pop&page',
        url:'http://152.136.185.210:8000/api/z8/home/data',
        params:{
          type,
          page
        }
      })
}
