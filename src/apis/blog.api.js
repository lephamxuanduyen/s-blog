import request from "../utils/request";

export const getBlogs = () => {
  const URL = "blogs";
  return request.get(URL);
};

export const postBlog = ( blog ) => {
  const URL = "blogs";
  request.post(URL, blog)
}

export const deleteBlog = (id) => {
  const URL = "blogs";
  return request.delete(`${URL}/${id}`)
}

export const getDetailBlog = (id) => {
  const URL_BLOG_DETAIL = `blogs/${id}`;
  return request.get(URL_BLOG_DETAIL);
};
