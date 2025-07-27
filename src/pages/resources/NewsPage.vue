<template>
  <q-page padding class="page-with-top-margin">
    <resource-header title="News" />

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
        v-for="article in articles" 
        :key="article.id" 
        class="col-4"
      >
        <base-card
          :image="article.image"
          :title="article.title"
          :date="article.date"
          :description="article.summary"
          icon="article"
        >
          <template #actions>
            <q-btn 
              flat 
              color="primary" 
              @click="readMore(article)"
            >
              Read More
            </q-btn>
          </template>
        </base-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import ResourceHeader from '@/components/ResourceHeader.vue'
import BaseCard from '@/components/base/BaseCard.vue'

export default {
  name: 'NewsPage',
  components: {
    ResourceHeader,
    BaseCard
  },
  setup() {
    const loading = ref(true)
    const articles = ref([
      {
        id: 1,
        title: 'Professional Development Trends',
        date: 'March 15, 2024',
        summary: 'Explore the latest insights into emerging career development strategies and how professionals can stay ahead in a rapidly changing job market. Discover key trends that are shaping the future of work and personal growth.',
        image: 'https://picsum.photos/seed/news1/600/400'
      },
      {
        id: 2,
        title: 'Technology in Learning',
        date: 'February 20, 2024',
        summary: 'Dive deep into how AI and machine learning are transforming education and professional training. Understand the impact of technological advancements on skill acquisition and continuous learning.',
        image: 'https://picsum.photos/seed/news2/600/400'
      },
      {
        id: 3,
        title: 'Career Adaptation Skills',
        date: 'January 10, 2024',
        summary: 'Learn critical strategies for staying relevant in a rapidly changing job market. Gain insights into developing adaptability, resilience, and continuous learning mindset.',
        image: 'https://picsum.photos/seed/news3/600/400'
      }
    ])

    const readMore = (article) => {
      // Placeholder for article detail navigation
      console.log('Read more about:', article.title)
    }

    onMounted(() => {
      // Simulate loading
      setTimeout(() => {
        loading.value = false
      }, 1000)
    })

    return {
      articles,
      readMore,
      loading
    }
  }
}
</script>

<style scoped>
.page-with-top-margin {
  margin-top: 100px;
}
</style> 