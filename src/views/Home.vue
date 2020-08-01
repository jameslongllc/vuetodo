<template>
    <div class="todo-container-fluid">
        <Todos />
    </div>
</template>

<script>
// @ is an alias to /src
import Todos from "@/components/Todos.vue";

export default {
    name: "home",
    components: {
        Todos,
    },
};
</script>

<style >
.todo-container-fluid {
    margin-top: 0.3rem;
}
</style>
