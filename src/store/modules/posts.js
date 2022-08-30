const state = {
  postsData: [],
};

const getters = {
  postsData: (state) => state.postsData,
};

const actions = {
  async fetchPostsData({ commit }) {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    commit("fetchPostsData", data);
  },
  async addPost({ commit }, newPost) {
    const res = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    const data = await res.json();

    commit("addPost", data);
  },
  async updatePost({ commit }, post) {
    const res = await fetch(`http://localhost:3000/posts`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    });
    commit("updatePost", post);
  },
  async deletePost({ commit }, post) {
    if (confirm("Are you sure?")) {
      const res = await fetch(`http://localhost:3000/posts`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(post),
      });
    }
    commit("deletePost", post);
  },
};

const mutations = {
  fetchPostsData: (state, data) => {
    state.postsData = data;
  },
  addPost: (state, newPost) => {
    state.postsData.unshift(newPost);
  },
  deletePost: (state, deletePost) => {
    state.postsData = state.postsData.filter((post) => {
      return deletePost.id != post.id;
    });
  },
  updatePost: (state, updatedPost) => {
    state.postsData.forEach((post, index, arr) => {
      if (arr[index].id == updatedPost.id) {
        arr[index].data = updatedPost.data;
      }
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
