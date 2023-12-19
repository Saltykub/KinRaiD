import axios from 'axios';
const baseUrl = '';
const getAll = () => {
    return axios.get(baseUrl).then(res => res.data);
}
const create = (newObj) => {
    return axios.post(baseUrl,newObj).then(res => res.data);
}
const update = (newObj,id) => {
    return axios.put(`${baseUrl}/${id}`,newObj).then(res => res.data);
}
const erase = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(res => res.data);
}
export default {getAll,create,update,erase};