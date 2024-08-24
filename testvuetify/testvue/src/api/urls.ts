export const baseUrl = "http://localhost:4000/"

export const postsURL = {
    getAll:'posts',
    get: (id: string) => `posts/${id}`,
    create: 'posts',
    edit: (id: String) => `posts/${id}`,
    delete: (id: string) => `posts/${id}`,
}