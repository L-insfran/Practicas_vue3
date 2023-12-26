<script >
  import InputTag from '@/components/InputTag.vue'

  export default{
    components: {
      InputTag
    },
    methods: {
      handleTagsChange(tags){
        console.log(tags)
      }
    },
  }
</script>

<template>
  <InputTag @onTagsChange="handleTagsChange"/>
</template>

<style scoped>

</style>
