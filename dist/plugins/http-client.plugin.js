"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPlugin = void 0;
const axios_1 = __importDefault(require("axios"));
exports.httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios_1.default.get(url);
        return data;
    },
    post: async (url, body) => {
        console.log('post');
        throw new Error('Not implemented');
    },
    put: async (url, body) => {
        console.log('put');
        throw new Error('Not implemented');
    },
    delete: async (url) => {
        console.log('delete');
        throw new Error('Not implemented');
    }
};
//# sourceMappingURL=http-client.plugin.js.map