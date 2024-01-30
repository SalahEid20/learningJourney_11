<script setup>

// import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(["selectedChoice"]);

const {question, questionStatus, barPercentage} = defineProps(['question', 'questionStatus', 'barPercentage']);

const emitSelectedChoice = function (isCorrect) {
    emit("selectedChoice", isCorrect);
}

</script>

<template>
    <main>
        <p>{{ questionStatus }}</p>
        <p class="bar">
            <p :style="{width: barPercentage}"></p>
        </p>
        <h1>{{ question.text }}</h1>
        <div v-for="option in question.options">
            <input type="radio" name="choice" :id="option.id" @click="emitSelectedChoice(option.isCorrect)">
            <label :for="option.id">{{ option.text }}</label>
        </div>
    </main>
</template>

<style scoped>
    main {
        margin-top: 100px;
        margin-left: 50px;
        padding: 10px;
    }

    .bar {
        height: 6px;
        width: 100px;
        border: 1px solid black;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 20px;
    }

    .bar p {
        height: 100%;
        background-color: blue;
    }

    div {
        font-size: 16px;
        margin: 10px;
    }

    label {
        margin-left: 10px;
    }

    label, input {
        cursor: pointer;
    }
</style>