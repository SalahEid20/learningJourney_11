<script setup>
    import {RouterLink} from "vue-router";
</script>

<template>
    <ul>
        <li><RouterLink active-class="active" to="/">Home</RouterLink></li>
        <li><RouterLink active-class="active" to="/about">About</RouterLink></li>
    </ul>
</template>

<style scoped>
    ul {
        padding: 0 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 50px;
        list-style: none;
        gap: 20px;
        box-shadow: 1px 1px 10px black;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: white;
    }
    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
    }
    .active {
        color: red;
    }
</style>