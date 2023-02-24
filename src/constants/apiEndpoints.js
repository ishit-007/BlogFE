export const BACKEND_URL = "http://localhost:8080/";

export const GET_BLOG_DATA = {
    method: 'GET',
    url: 'blog-posts'
};
export const UPDATE_BLOG_DATA = (blogId) => ({
    method: 'PUT',
    url: `blog-posts/${blogId}`
})