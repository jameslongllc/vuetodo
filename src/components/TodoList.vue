<template>
    <div class="todo-list">
        <div v-if="todos && todos.length > 0">
            <todo-item
                v-for="todo in todos"
                :key="todo._id"
                :_id="todo._id"
                :title="todo.title"
                :description="todo['description']"
            />
        </div>
        <div v-else>
            <h5>No Todo's. Create Something Todo!!!!</h5>
        </div>
    </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
    components: {
        TodoItem,
    },
    props: {
        todos: {
            required: true,
            type: Array,
        },
    },
};
</script>

