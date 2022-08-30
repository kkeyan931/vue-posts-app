<template>
    <div>
        <p style="display : inline">{{ postData.data }}</p>
        <button @click="deletePostHelper">x</button>
        <button @click="updatePostHelper">update</button>
        <input type="text" v-model="updatedPost">
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    name: "Post",
    components: {

    },
    props: ["postData"],
    data() {
        return {
            updatedPost: "",
        }
    },
    computed: {

    },
    methods: {
        ...mapActions([
            "updatePost",
            "addPost",
            "deletePost"
        ]),
        deletePostHelper() {
            this.deletePost(this.postData);
        },
        updatePostHelper() {
            this.updatePost({ id: this.postData.id, data: this.updatedPost });
        }

    },
}
</script>
<style>
</style>