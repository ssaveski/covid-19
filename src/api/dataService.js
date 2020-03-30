import axios from 'axios'

export default {
    getData(body) {
        return axios.get('https://corona.lmao.ninja/all', body)
    },
}


