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
export default {
    name: "Todos",
    components: {
        TodoList,
        TodoCreate,
    },
    data() {
        return {
            todos: [
                {
                    _id: "1",
                    title: "Walk The Dog",
                    description: "Go to forrest near the Zoo",
                },
                {
                    _id: "2",
                    title: "Buy some bread",
                    description: "Preferably Potato",
                },
                {
                    _id: "3",
                    title: "Learn programming",
                    description: "Now is the time to learn",
                },
                {
                    _id: "4",
                    title: "Learn Web Development",
                    description: "Create Web-Base Software",
                },
            ],
        };
    },
    methods: {
        createTodo(todo) {
            this.todos.push(todo);
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
        min-height: 400px;
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
}
</style>
