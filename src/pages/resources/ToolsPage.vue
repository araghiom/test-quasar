<template>
  <q-page padding class="page-with-top-margin">
    <resource-header title="Tools and Guides" />

    <div class="row q-col-gutter-md">
      <div 
        v-for="tool in tools" 
        :key="tool.id" 
        class="col-12 col-md-4"
      >
        <q-card hover>
          <q-img 
            :src="`https://picsum.photos/500/300?random=${tool.id}`" 
            height="200px"
          />
          
          <q-card-section>
            <div class="text-h6">{{ tool.title }}</div>
            <div class="text-subtitle2 text-grey">{{ tool.category }}</div>
          </q-card-section>
          
          <q-card-section>
            <p>{{ tool.description }}</p>
          </q-card-section>
          
          <q-card-actions align="right">
            <q-btn 
              flat 
              color="primary" 
              :href="tool.link" 
              target="_blank"
            >
              Access Tool
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import ResourceHeader from '@/components/ResourceHeader.vue'

export default {
  name: 'ToolsPage',
  components: {
    ResourceHeader
  },
  setup() {
    const tools = [
      {
        id: 1,
        title: 'Professional Development Toolkit',
        category: 'Career Growth',
        description: 'Comprehensive resources for professional skill enhancement.',
        link: '#'
      },
      {
        id: 2,
        title: 'Learning Management System',
        category: 'Education',
        description: 'Online platform for continuous learning and training.',
        link: '#'
      },
      {
        id: 3,
        title: 'Career Assessment Tool',
        category: 'Personal Development',
        description: 'Detailed career path and skill gap analysis.',
        link: '#'
      }
    ]

    return {
      tools
    }
  }
}
</script>

<style scoped>
.page-with-top-margin {
  margin-top: 100px;
}
</style> 