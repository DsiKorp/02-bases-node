const axios = require('axios');

const httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url);
        return data;
    },

    post: async (url, body) => {
        console.log('post')
    },

    put: async (url, body) => {
        console.log('put')
    },

    delete: async (url) => {
        console.log('delete')
    }
}

module.exports = {
    // se renombra a http para facilitar su uso
    http: httpClientPlugin,
};