<template>
  <div class="home">
    <ButtonComp :clickEvent="toggleShowAddPost" :text="showAddPost ? 'Close' : 'Add post'" :color="showAddPost ? 'red' : 'green'"/>
    <AddPost v-if="showAddPost"></AddPost>
    <Posts></Posts>
  </div>
</template>

<script>
// @ is an alias to /src

import AddPost from "../components/home/AddPost.vue";
import Posts from "../components/home/Posts.vue";
import ButtonComp from "../components/common/ButtonComp.vue";
export default {
  name: 'HomeView',
  components: {
    AddPost,
    Posts,
    ButtonComp
  },
  data(){
    return {
      showAddPost : false,
    }
  },
  methods:{
    toggleShowAddPost(){
      this.showAddPost = !this.showAddPost;
    }
  }
}
</script>
