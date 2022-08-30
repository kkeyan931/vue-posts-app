<template>
    <div>
        <b-editable-table bordered hover class="editable-table" v-model="postsData" :fields="fields"
            @input-change="updatePostHelper">
            <template #cell(delete)="data">
                <BIconTrash class="remove-icon" @click="deletePostHelper(data)"></BIconTrash>
            </template>
        </b-editable-table>
        <!-- <div v-for="post in postsData" :key="post.id">
            <Post :postData="post"></Post>
        </div> -->
    </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Post from "./Post.vue";
import BEditableTable from "bootstrap-vue-editable-table";

export default {
    name: "Posts",
    components: {
        Post,
        BEditableTable
    },
    props: [],
    data() {
        return {
            fields: [
                {
                    key: "id",
                    label: "ID",
                    type: "text",
                    editable: false,
                    class: "id-col",
                },
                {
                    key: "data",
                    label: "Data",
                    type: "text",
                    editable: true,
                    placeholder: "Enter data...",
                    class: "data-col",
                },
                { key: "delete", label: "" },
                // {
                //     key: "createdDate",
                //     label: "Created Date",
                //     type: "date",
                //     editable: false,
                //     class: "date-col",
                //     locale: "en",
                //     "date-format-options": {
                //         year: "numeric",
                //         month: "numeric",
                //         day: "numeric",
                //     },
                // },
            ],
        }
    },
    computed: {
        ...mapGetters(["postsData"])
    },
    methods: {
        ...mapActions([
            "fetchPostsData",
            "updatePost",
            "deletePost"
        ]),
        updatePostHelper(value) {
            this.updatePost({ id: value.item.id, data: value.item.data });
        },
        deletePostHelper(data) {
            this.deletePost(data);
        },
    },
    async created() {
        await this.fetchPostsData();
    },
}
</script>
<style>
thead {
    display: none;
}

tr {
    display: block;
    margin-bottom: 1.5rem;
    padding: 1rem 0.5rem 0.5rem 1rem;
    background-color: transparentize(rgb(147, 137, 137), 0.15);
    box-shadow: 0 0 1rem transparentize(black, 0.9);
}

table.editable-table {
    margin: auto;
}

table.editable-table td {
    vertical-align: middle;
}

.editable-table .data-cell {
    padding: 8px;
    vertical-align: middle;
}


.data-col {
    width: 900px;
}


.id-col {
    width: 50px;
}

.date-col {
    width: 200px;
}

.is-active-col {
    width: 100px;
}

.remove-icon {
    color: red;
    cursor: pointer;
    font-size: 20px;
}
</style>