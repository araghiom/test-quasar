<template>
  <q-page padding>
    <resource-header 
      :title="title" 
      :icon="icon" 
    />
    <slot></slot>
  </q-page>
</template>

<script>
import ResourceHeader from '@/components/ResourceHeader.vue'

export default {
  name: 'BasePage',
  components: {
    ResourceHeader
  },
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'dashboard'
    }
  }
}
</script>

<style scoped>
.page-header {
  width: 100%;
  border-radius: 0;
}
.full-width {
  width: 100%;
}
.page-content {
  padding-top: 16px;
}
</style> 