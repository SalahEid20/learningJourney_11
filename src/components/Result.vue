<script setup>
    // import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';

    const {totalQuestions, correctAnswersCount} = defineProps(['totalQuestions', 'correctAnswersCount'])
</script>

<template>
    <div class="results">
        <p>Your result Is... </p>
        <h1>
            {{ `${correctAnswersCount} / ${totalQuestions}` }}
        </h1>
        <RouterLink to="/">Home Page</RouterLink>
    </div>
</template>

<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}
p {
    font-size: 25px;   
}
h1 {
    font-size: 80px;
}
a {
    padding: 10px;
    border-radius: 50%;
    background-color: grey;
    font-weight: bold;
    margin: 20px auto 0;
    display: block;
    width: fit-content;
    transition: background-color .2s;
}
a:hover {
    background-color: lightgray;
}
</style>