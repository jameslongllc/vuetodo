<template>
    <div class="todo-wrapper">
        <div class="todo-container">
            <div class="todo-create-btn-container">
                <todo-create @formSubmitted="createTodo" />
            </div>
            <!-- <TodoList /> -->
            <todo-list :todos="todos" />
        </div>
    </div>
</template>

<script>
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
// import store from "../store/index";
import store from "../store";
export default {
    name: "Todos",
    components: {
        TodoList,
        TodoCreate,
    },
    data() {
        return {
            todos: store.state.todos,
        };
    },
    created() {
        this.todos = store.dispatch("initStore");
    },
    methods: {
        createTodo(todo) {
            store.dispatch("createTodo", todo);
            // store.createTodo(todo);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
/* creating a variable in scss */
$color-red: red;

.todo {
    &-container {
        width: 400px;
        min-height: 150px;
        background-color: #ededed;
        border-radius: 5px;
        text-align: center;
    }
    &-wrapper {
        /* flexible styling */
        display: flex;
        /* it defines alignment along the main axis */
        justify-content: center;
        /*flex-direction: column;*/
        width: 100%;
        /*height: 2000px;*/
    }
    &-create-btn-container {
        margin: 10px;
    }
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
.app-form {
    .label {
        display: block;
        font-size: 18px;
        font-weight: bold;
    }
    .form-input {
        padding: 10px;
        font-size: 17px;
        width: 100%;
    }
    .form-control {
        margin-bottom: 10px;
        height: auto;
        border: none;
        text-align: left;
    }

    .app {
        &buttons {
            display: inline-block;
            align-items: center;
        }
        &-button {
            width: 30%;
            line-height: 0.5rem;
            padding-bottom: 0.5rem;
            margin-right: 10px;
        }
    }
}
</style>
