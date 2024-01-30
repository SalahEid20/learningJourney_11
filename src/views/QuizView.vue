<script setup>
    window.scrollTo({
        top: 0,
        left: 0
    })

    import { useRoute, useRouter, RouterView, } from 'vue-router';
    import { ref, computed } from 'vue';
    import quizes from "../data/html_questions.json";
    import QuestionC from "../components/Question.vue";
    import ResultC from "../components/Result.vue";
    
    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const quiz = quizes.find(q => q.id === quizId);
    const QsLength = quiz.questions.length;
    const questionIndex = ref(0);
    const correctAnswersCount = ref(0);
    const showResult = ref(false);

    const questionStatus = computed(() => `${questionIndex.value + 1}/${QsLength}`);
    const barPercentage = computed(() => `${((questionIndex.value + 1)/QsLength) * 100}%`);

    const onChoiceSelected = (isCorrect) => {

        if(isCorrect) {
            correctAnswersCount.value++;
            console.log(correctAnswersCount.value);
        }
        if(QsLength - 1 === questionIndex.value){
            showResult.value = true;
        }
        questionIndex.value++;

    }
</script>

<template>
    <QuestionC
        v-if="!showResult"
        :question="quiz.questions[questionIndex]" 
        :questionStatus="questionStatus" 
        :barPercentage="barPercentage" 
        @selectedChoice="onChoiceSelected"/>

    <ResultC 
        v-else
        :totalQuestions="QsLength"
        :correctAnswersCount="correctAnswersCount"/>
</template>

<!--
    
    const router = useRouter();
    
    
    let question = ref(quiz.questions.find(q => q.id == co));
    let questionId = quiz.questions.find(q => q.id == co).id;
    router.push(`/quiz/${quizId}/${questionId}`);
    function next() {
        return console.log(co++);
        return question = quiz.questions.find(q => q.id == co++);
        router.push(`/quiz/${quizId}/${questionId}`);
    } -->