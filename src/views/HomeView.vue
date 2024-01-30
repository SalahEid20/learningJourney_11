<script setup>
    import q from "../data/html_questions.json";
    import { ref, watch } from "vue";
    import Card from "../components/Card.vue";

    const quizes = ref(q);
    const search = ref("");

    watch(search, () => {
        quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
    });
</script>

<template>
    <div class="container">
        <header>
            <h1>Quizes</h1>
            <input v-model="search" type="text" placeholder="Search...">
        </header>
        <div class="options-container">
            <Card v-for="quiz in quizes" :quiz="quiz"/>
        </div>
    </div>
</template>

<style scoped>
.container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 20px;
    }

    header {
        margin-bottom: 30px;
        margin-top: 60px;
        display: flex;
        align-items: center;
    }

    header h1 {
        font-weight: bold;
        margin-right: 30px;
    }

    header input {
        border: none;
        background-color: rgba(128, 128 , 128, .1);
        padding: 10px;
        border-radius: 5px;
    }

    .options-container {
        display: flex;
        flex-wrap: wrap;
        
    }

    @media (max-width: 700px) {
        .options-container {
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin-bottom: 30px;
        }
    }
</style>