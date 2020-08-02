<template>
    <div class="container-fluid">
        <Header />

        <router-view></router-view>
    </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Header from "./components/Header";

export default {
    components: {
        Header,
    },
};
</script>

<style scoped>
.container-fluid {
    margin-top: 0.2rem;
}

</style>
