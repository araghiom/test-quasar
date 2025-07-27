<template>
  <header 
    class="flex items-center justify-center full-width q-mb-md position-relative" 
    style="border-radius: 8px; background-color: #E9E1CE; padding: 16px; margin-left: -24px; margin-right: -24px;"
  >
    <div class="absolute-left q-ml-md" @click="goBack">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        class="cursor-pointer"
      >
        <path 
          fill="black" 
          d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
        />
      </svg>
    </div>
    <h2 class="text-center" style="font-size: 16px; margin: 0;">{{ title }}</h2>
  </header>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'ResourceHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const router = useRouter()

    const goBack = () => {
      router.go(-1)
    }

    return {
      goBack
    }
  }
}
</script>

<style scoped>
.position-relative {
  position: relative;
}

.absolute-left {
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
}
</style> 