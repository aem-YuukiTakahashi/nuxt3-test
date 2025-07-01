<template>
  <div class="container">
    <h2>{{ heading }}</h2>
    <p>これはToDoリストです。</p>
    <form @submit.prevent="addTodo">
      <input v-model="newTitle" placeholder="タイトル" required />
      <input v-model="newDescription" placeholder="説明" required />
      <button type="submit">追加</button>
    </form>
    <ul v-if="todoList.length > 0">
      <li v-for="todo in todoList" :key="todo.id" :class="{ completed: todo.completed }">
        <strong>{{ todo.title }}</strong> - {{ todo.description }}
        <input type="checkbox" v-model="todo.completed" />
      </li>
    </ul>
    <p v-else>ToDoリストがありません。</p>

    <NuxtLink to="/" class="link">Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Todo } from '@/types/todo';

definePageMeta({ layout: 'default' });

const heading = ref('ToDoリスト');
const todoList = ref<Todo[]>([]);

const newTitle = ref('');
const newDescription = ref('');

function addTodo() {
  if (!newTitle.value || !newDescription.value) return;
  const newTodo: Todo = {
    id: Date.now(),
    title: newTitle.value,
    description: newDescription.value,
    completed: false
  };
  todoList.value.push(newTodo);
  newTitle.value = '';
  newDescription.value = '';
}
</script>

<style scoped lang="scss">
  div {
    padding: 2rem;
    background: #f5f5f5;
    border-radius: 8px;
  }

  .container {
    min-height: 100vh;
  }

  .completed {
    color: #aaa;
  }

  .link {
    display: inline-block;
    padding: 2rem;
    text-decoration: none;
    color: #000;
    font-size: 1.2rem;
  }

  form {
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    }
  }
</style>
