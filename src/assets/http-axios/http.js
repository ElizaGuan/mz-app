import axios from 'axios';
import http from '../../../maoyan4/src/utils/http';

var http = function http({url, method, data}){
    let option = {
        url: url,
        method: method,
        baseURL: "http://localhost:3000/banner/search",
        // timeout: 2000
    }
    // 给 option 添加 数据选项
    if(method == 'GET'){
        options.params = data;
    }else if(method == "POST"){
        options.data = data;
    }

    return axios(options);
}
export default function httpAxios(){
    return new Promise((resolve,reject)=>{
        console.log(http)
        // http.then((res)=>{
        //     console.log(res.data)
        // })
        // .catch(()=>{
        //     console.log(err.message)
        // })
    })
}