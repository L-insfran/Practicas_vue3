<script setup>
  import { ref } from 'vue'
  import { useFeedStore } from '../stores/store'

  const  store = useFeedStore()
  const url = ref('')


  function handleSubmit(){
    if(!!url.value){
      store.registerNewSource(url.value)
    }
  }
</script>

<template>
  <div class="header">
    <form action="" @submit.prevent="handleSubmit">
      <input type="url" required v-model="url">
      <button type="submit">Add source</button>
    </form>
  </div>
</template>

<style scoped>
</style>