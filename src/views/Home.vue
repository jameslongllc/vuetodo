<template>
    <div class="todo-container-fluid">
        <app-todos></app-todos>
    </div>
</template>

<script>
// @ is an alias to /src
import Todos from "@/components/Todos.vue";

export default {
    name: "home",
    components: {
        appTodos: Todos,
    },
};
</script>

<style >
.todo-container-fluid {
  
    margin-top: .3rem;
}
</style>
