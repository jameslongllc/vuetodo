<template>
    <div v-if="!editMode" class="todo-item">
        <div class="todo-item-content">
            <div class="todo-item-content-title">{{ title }}</div>
            <div class="todo-item-content-description">{{ description }}</div>
        </div>
        <div class="app-buttons app-form ">
            <button @click="editMode = true" class="app-button btn-warning btn-sm">Edit</button>
        </div>
    </div>
    <div v-else class="todo-item">
        EDIT MODE!!!
        <form class="app-form">
            <div class="form-control">
                <label class="label">Title</label>
                <input class="form-input" type="text" />
            </div>
            <div class="form-control">
                <label class="label">Description</label>
                <textarea class="form-input" name id cols="30" rows="2"></textarea>
            </div>
            <div class="app-error">
                <div class="form-error">{{formError}}</div>
            </div>
            <div class="app-buttons">
                <button @click="editTodo" class="app-button btn-warning btn-sm">Update</button>
                <button @click="deleteTodo" class="app-button btn-danger btn-sm">Delete</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
            default: "Default description",
        },
    },
    data() {
        return {
            editMode: false,
        };
    },
    methods: {
        editTodo() {
            alert("Editing Todo!");
        },
        deleteTodo() {
            alert("Confirm Todo Deletion!");
        },
    },
};
</script>

<style lang="scss" scoped>


</style>