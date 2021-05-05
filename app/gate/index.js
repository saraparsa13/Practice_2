import api from './api';

const methods = {
  delete: (url, data = {}) => api.delete(url, data),
  get: (url, data = {}) => api.get(url, data),
  patch: (url, data = {}) => api.patch(url, data),
  post: (url, data = {}) => api.post(url, data),
  put: (url, data = {}) => api.put(url, data),
};

const auth = {
  // checkMe: () => api.get('check/me'),
  // checkUser: () => api.get('check/user'),
  // checkVer: () => api.get('check/ver'),

  signIn: (data) => api.post('auth/login', data),
  // signInConfirmation: (data) => api.post('sign-in-confirmation', data),

  // signOut: () => api.signOut('sign-out'),

  // resend : (data) => api.post('auth/resend', data),

  signUp: (data) => api.post('auth/register', data),
  // signUpConfirmation: (data) => api.post('auth/verify', data),
};

const resend = (data) => {
  return api.get('auth/resend', data)
}
const verify = (data) => {
  return api.post('auth/verify', data)
}
const renderPosts = (pageIndex, limit) => {
  return api.get(`ig/posts?page=${pageIndex}&limit=${limit}`)
}
const renderComments = (postId, page) => {
  return api.get(`ig/comments?post_id=${postId}&page=${page}`)
}

const addComment = (data) => {
  return api.post('ig/comments', data)
}

export default {
  getRepositories: (query) =>
    api.get(`/search/repositories?q=${query}&sort=stars`, {}),
  // any: someId => api.get(`/any/${someId}`),
  // any: data => api.post('/any', data),
  ...methods,
  ...auth,
  resend,
  verify,
  renderPosts,
  renderComments,
  addComment,
};
