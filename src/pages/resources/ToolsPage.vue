<template>
  <q-page padding class="page-with-top-margin" style="background-color: #EEF1EF;">
    <resource-header title="Tools and Guides" />

    <div class="row q-col-gutter-md">
      <div 
        v-for="tool in tools" 
        :key="tool.id" 
        class="col-12 col-md-4"
      >
        <base-card
          :image="`https://picsum.photos/500/300?random=${tool.id}`"
          :title="tool.title"
          :description="tool.description"
          :icon="tool.icon || 'build'"
          :date="tool.category"
          :list="tool.features"
        >
          <template #actions>
            <q-btn 
              flat 
              color="primary" 
              :href="tool.link" 
              target="_blank"
            >
              Access Tool
            </q-btn>
          </template>
        </base-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import ResourceHeader from '@/components/ResourceHeader.vue'
import BaseCard from '@/components/base/BaseCard.vue'

export default {
  name: 'ToolsPage',
  components: {
    ResourceHeader,
    BaseCard
  },
  setup() {
    const tools = [
      {
        id: 1,
        title: 'Professional Development Toolkit',
        category: 'Career Growth',
        description: 'Comprehensive resources for professional skill enhancement.',
        link: '#',
        icon: 'work',
        features: [
          { 
            label: 'Skill Assessment', 
            icon: 'analytics',
            caption: 'Identify your strengths and weaknesses'
          },
          { 
            label: 'Learning Paths', 
            icon: 'school',
            caption: 'Personalized career development routes'
          },
          { 
            label: 'Progress Tracking', 
            icon: 'track_changes',
            caption: 'Monitor your professional growth'
          }
        ]
      },
      {
        id: 2,
        title: 'Learning Management System',
        category: 'Education',
        description: 'Online platform for continuous learning and training.',
        link: '#',
        icon: 'school',
        features: [
          { 
            label: 'Course Library', 
            icon: 'library_books',
            caption: 'Extensive range of online courses'
          },
          { 
            label: 'Interactive Modules', 
            icon: 'computer',
            caption: 'Engaging learning experiences'
          },
          { 
            label: 'Certification', 
            icon: 'verified',
            caption: 'Earn professional certificates'
          }
        ]
      },
      {
        id: 3,
        title: 'Career Assessment Tool',
        category: 'Personal Development',
        description: 'Detailed career path and skill gap analysis.',
        link: '#',
        icon: 'analytics',
        features: [
          { 
            label: 'Personality Assessment', 
            icon: 'psychology',
            caption: 'Understand your work style'
          },
          { 
            label: 'Career Matching', 
            icon: 'work',
            caption: 'Find ideal career opportunities'
          },
          { 
            label: 'Skill Gap Analysis', 
            icon: 'trending_up',
            caption: 'Identify areas for improvement'
          }
        ]
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
  background-color: #EEF1EF;
}
</style> 