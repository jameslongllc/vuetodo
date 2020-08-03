<template>
    <div v-if="!editMode" class="todo-item">
        <div class="todo-item-content">
            <div class="todo-item-content-title">{{ title }}</div>
            <div class="todo-item-content-description">{{ description }}</div>
        </div>
        <div class="app-buttons">
            <button @click="editMode = true " class="app-button btn-warning btn-sm">Edit</button>
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
                <textarea  class="form-input" name id cols="30" rows="5"></textarea>
            </div>
            <div class="app-error">
                <div class="form-error">{{formError}}</div>
            </div>
            <div class="app-buttons">
                <button @click="editTodo " class="app-button btn-warning btn-sm">Edit</button>
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
.todo {
    &-item {
        background-color: gray;
        min-height: 70px;
        margin: 10px;
        padding: 10px;
        color: white;
        border-radius: 5px;
        font-size: 23px;
    }
    &-item-edit {
        display: block;
        color: black;
        margin: 12px;
    }
    &-item-content-title {
        font-weight: bold;
    }
    &-item-content-description {
        font-size: 19px;
    }
}

.app {
    &buttons {
        display: inline-block;
        align-items: center;
    }
    &-button {
        line-height: 0.5rem;
        padding-bottom: 0.5rem;
        margin-right: 10px;
    }
}

app-form-edit{
    display: block;
    background-color: black;
}
</style>