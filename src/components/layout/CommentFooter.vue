<template>
  <footer 
    class="" 
    style="height: 100px; border-radius: 8px; background-color: #E9E1CE; padding: 16px; margin-left: -24px; margin-right: -24px;"
  >

  </footer>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'CommentFooter',
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

</style>
