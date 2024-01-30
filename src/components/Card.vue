<script setup>
    // import { defineProps } from 'vue';
    import { useRouter } from 'vue-router';

    const {quiz} = defineProps(['quiz']);
    const router = useRouter();

    const navigateToQuiz = () => {
        router.push(`/quiz/${quiz.id}`)
    }
</script>

<template>
    <div @click="navigateToQuiz" :key="quiz.id" class="card">
        <img :src="quiz.img" alt="meh">
        <div class="card-text">
            <h2>{{ quiz.name }}</h2>
            <p><span>{{ quiz.questions.length }}</span> Questions</p>
        </div>
    </div>
</template>

<style scoped>
    .card {
        text-decoration: none;
        color: var(--color-text);
        width: 310px;
        overflow: hidden;
        border-radius: 2%;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
        margin-bottom: 30px;
        margin-right: 20px;
        cursor: pointer;
    }

    .card img {
        display: block;
        max-width: 100%;
    }

    .card .card-text {
        padding: 0 10px 10px;
    }
    .card .card-text h2 {
        font-weight: bold;
    }

    span {
        font-weight: bold;
        color: purple;
    }

    @media (max-width: 700px) {
        .card {
            width: 300px;
            margin: 0;
        }
    }
</style>