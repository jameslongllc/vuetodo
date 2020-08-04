<template>
    <div v-if="!editMode" class="todo-item">
        <div class="todo-item-content">
            <div class="todo-item-content-title">{{ title }}</div>
            <div class="todo-item-content-description">{{ description }}</div>
        </div>
        <div class="app-buttons app-form">
            <button @click="editMode = true" class="app-button btn-warning btn-sm">Edit</button>
            <button @click="deleteTodo" class="app-button btn-danger btn-sm">Delete</button>
        </div>
    </div>
    <div v-else class="todo-item">
        EDIT MODE!!!
        <form class="app-form">
            <div class="form-control">
                <label class="label">Title</label>
                <input v-model="todo.title" class="form-input" type="text" />
            </div>
            <div class="form-control">
                <label class="label">Description</label>
                <textarea v-model="todo.description" class="form-input" name id cols="30" rows="2"></textarea>
            </div>
            <div class="app-error">
                <div class="form-error">{{formError}}</div>
            </div>
            <div class="app-buttons">
                <button @click.prevent="editTodo" class="app-button btn-warning btn-sm">Update</button>
                <button @click.prevent="editMode=false" class="app-button btn-danger btn-sm">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
import store from "../store";
export default {
    props: {
        _id: {
            type: String,
            required: true,
        },
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
            todo: {
                _id: this._id,
                title: this.title,
                description: this.description,
            },
        };
    },
    methods: {
        editTodo() {
            store.dispatch("updateTodo", { ...this.todo });
            this.editMode = false;
        },
        deleteTodo() {
            store.dispatch("deleteTodo", this.todo._id);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>