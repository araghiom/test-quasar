<template>
  <q-footer class="bg-primary text-white" style="height: 100px; min-height: 100px;">
    <q-toolbar class="full-height">
      <q-toolbar-title class="full-width">
        <div class="row items-center justify-between full-height q-px-md">
          <div class="row items-center">
            <q-icon name="copyright" class="q-mr-sm" size="32px" />
            <span class="text-h5">© {{ currentYear }}  Organization</span>
          </div>
          
          <div class="row items-center">
            <q-btn-group flat>
              <q-btn 
                flat 
                label="Privacy Policy" 
                class="text-white q-mr-sm"
              />
              <q-btn 
                flat 
                label="Terms of Service" 
                class="text-white q-mr-sm"
              />
              <q-btn 
                flat 
                label="Contact Us" 
                class="text-white"
              />
            </q-btn-group>
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      currentYear
    }
  }
}
</script>

<style scoped>
.full-height {
  height: 100%;
}
.full-width {
  width: 100%;
}
</style> 