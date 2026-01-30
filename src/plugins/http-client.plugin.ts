import axios from 'axios';

export const httpClientPlugin = {
    get: async (url: string) => {
        const { data } = await axios.get(url);
        return data;
    },

    post: async (url: string, body: any) => {
        console.log('post')
    },

    put: async (url: string, body: any) => {
        console.log('put')
    },

    delete: async (url: string) => {
        console.log('delete')
    }
}