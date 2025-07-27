<template>
  <q-page padding class="page-with-top-margin">
    <resource-header title="Page Not Found" />
    
    <div class="text-center q-mt-xl">
      <q-icon name="error_outline" size="100px" color="negative" />
      <h1 class="text-h4 q-mt-md">404 - Page Not Found</h1>
      <p class="text-subtitle1 q-mt-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <q-btn 
        color="primary" 
        label="Go to Home" 
        to="/" 
        class="q-mt-lg"
      />
    </div>
  </q-page>
</template>

<script>
import ResourceHeader from '@/components/ResourceHeader.vue'

export default {
  name: 'NotFoundPage',
  components: {
    ResourceHeader
  }
}
</script>

<style scoped>
.page-with-top-margin {
  margin-top: 100px;
}
</style> 