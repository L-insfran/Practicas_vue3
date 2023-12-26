<script setup>
  import InputFrom from './InputForm.vue'
  import PeopleView from './PeopleView.vue'
</script>

<template>
  <div class="contaiener">
    <InputFrom />
    <PeopleView />
  </div>
</template>

<style scoped>
  .contaiener {
    display: flex;
    background-color: rgba(8, 15, 9, 0.842);
  }
</style>