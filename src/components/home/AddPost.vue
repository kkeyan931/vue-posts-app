<template>
    <div>
        <form>
            <textarea v-model="postData" class="textinput" placeholder="Enter data..."></textarea>
            <br/>
            <ButtonComp :clickEvent="onSubmit" :text="'Add'" :color="'green'" />
            <!-- <button @click="onSubmit">Add</button> -->
        </form>
    </div>
</template>
<script>
import ButtonComp from "../common/ButtonComp.vue";
import { mapActions } from "vuex";
export default {
    name: "AddPost",
    components: {
        ButtonComp
    },
    data() {
        return {
            postData: ""
        }
    },
    computed: {

    },
    methods: {
        ...mapActions([
            "addPost",
        ]),
        onSubmit(e) {
            e.preventDefault();
            this.addPost({ data: this.postData })
            this.postData = ""
        }
    },
}
</script>
<style>
.textinput {
    float: center;
    width: 90%;
    min-height: 100px;
    outline: none;
    resize: none;
    border: 1px solid grey;
}
</style>