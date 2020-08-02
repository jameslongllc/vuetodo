<template>
    <div class="todo-item">
        <div class="todo-item-content">
            <div class="todo-item-content-title">{{ title }}</div>
            <div class="todo-item-content-description">{{ description }}</div>
        </div>
        <div class="app-buttons">
            <button @click="editTodo" class="app-button btn-warning btn-sm">Edit</button>
            <button @click="deleteTodo" class="app-button btn-danger btn-sm">Delete</button>
        </div>
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
methods:{
    editTodo(){
        alert('Editing Todo!')
    },
    deleteTodo(){
        alert('Confirm Todo Deletion!')
    }
}
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
</style>