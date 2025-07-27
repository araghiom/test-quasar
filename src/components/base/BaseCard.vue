<template>
  <q-card class="base-card">
    
    <q-card-section class="base-card-header">
      <div class="flex items-center">
        <q-icon :name="icon" size="24px" class="q-mr-md" />
        <div class="text-h6">{{ title }}</div>
      </div>
    </q-card-section>
    
    <q-img 
      v-if="image"
      :src="image" 
      class="base-card-image"
      height="300px"
    />
    <q-separator />
    
    <q-card-section>
      <div class="row">
        <div class="col-12">
          <div v-if="date" class="text-subtitle2 text-grey q-mb-sm">{{ date }}</div>
          <div class="text-body1">{{ description }}</div>
          
          <div class="q-mt-md" v-if="$slots.actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    image: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: 'article'
    },
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      default: null
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.base-card {
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
}

.base-card-header {
  background-color: #f5f5f5;
}

.base-card-image {
  object-fit: cover;
}
</style> 