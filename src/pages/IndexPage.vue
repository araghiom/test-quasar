<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">Resources Dashboard</div>
    
    <div v-if="loading" class="row q-col-gutter-md">
      <div v-for="n in 3" :key="n" class="col-12 col-md-4">
        <q-card>
          <q-skeleton height="200px" square />
          <q-card-section>
            <q-skeleton type="text" width="60%" />
            <q-skeleton type="text" width="40%" />
          </q-card-section>
          <q-card-actions>
            <q-skeleton type="QBtn" />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div v-else class="row q-col-gutter-md">
      <div 
        v-for="resource in resources" 
        :key="resource.id" 
        class="col-12 col-md-4"
      >
        <q-card 
          @click="navigateTo(resource.route)" 
          hover 
          class="cursor-pointer full-height"
        >
          <q-img 
            :src="`https://picsum.photos/500/300?random=${resource.id}`" 
            height="200px"
          >
            <div class="absolute-bottom text-subtitle1 text-center">
              {{ resource.title }}
            </div>
          </q-img>
          
          <q-card-section>
            <div class="text-body2">{{ resource.description }}</div>
          </q-card-section>
          
          <q-card-actions align="right">
            <q-btn 
              flat 
              color="primary" 
              :to="resource.route"
            >
              Explore
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'IndexPage',
  setup() {
    const router = useRouter()
    const loading = ref(true)

    const resources = ref([
      { 
        id: 1, 
        title: 'Tools and Guides', 
        description: 'Comprehensive professional development resources',
        route: '/resources/tools' 
      },
      { 
        id: 2, 
        title: 'News and Information', 
        description: 'Latest updates in your professional field',
        route: '/resources/news' 
      },
      { 
        id: 3, 
        title: 'Related Sites', 
        description: 'Curated external resources and websites',
        route: '/resources/sites' 
      }
    ])

    const navigateTo = (route) => {
      router.push(route)
    }

    onMounted(() => {
      // Simulate loading
      setTimeout(() => {
        loading.value = false
      }, 1000)
    })

    return {
      resources,
      navigateTo,
      loading
    }
  }
}
</script>

<style scoped>
.full-height {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style> 