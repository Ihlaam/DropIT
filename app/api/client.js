import {create} from 'apisauce';
const ip = require('ip');

const apiClient = create
 ({
    baseURL:`${ip.address()}:4000/api/`
})

export default apiClient;