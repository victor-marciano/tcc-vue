<template>
  <div class="content">
      <keep-alive>
        <router-view/>            
      </keep-alive>
  </div>
</template>

<script>

export default {
    name: 'Content'    
}
</script>

<style lang="scss">
    .content {    
        overflow: hidden;    
    }
</style>