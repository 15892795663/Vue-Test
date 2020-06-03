import axios from 'axios'

 const instance = axios.create({
   baseURL:"https://vueblog-7b388.firebaseio.com"
 })
export  default instance

