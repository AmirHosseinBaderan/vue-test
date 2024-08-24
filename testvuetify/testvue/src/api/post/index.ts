
import { Post } from "@/model/post";
import { apiCall, request } from ".."
import { baseUrl, postsURL } from "../urls";

const _axios = apiCall(baseUrl);

export const postApiCalls = {
    getAll: () => new Promise((resolve, reject) => {
        request(_axios, "GET", postsURL.getAll).then((res) => {
            resolve(res.data)
        }).catch((e) => reject(e))
    }),
    delete: (id: string) => new Promise((resolve, reject) => {
        request(_axios, "DELETE", postsURL.delete(id)).then((res) => {
            resolve(res.data)
        }).catch((e) => reject(e))
    }),
    create: (post: Post) => new Promise((resolve, reject) => {
        request(_axios, "POST", postsURL.create, post).then((res) => {
            resolve(res.data)
        }).catch((e) => reject(e))
    }),
    update: (id: String, post: Post) => new Promise((resolve, reject) => {
        request(_axios, "PUT", postsURL.edit(id), post).then((res) => {
            resolve(res.data)
        }).catch((e) => reject(e))
    }),
}