<template>
  <div class="app-footer bg-primary text-white">
    <div class="footer-content">
      <div class="row items-center justify-between full-height">
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
    </div>
  </div>
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
.app-footer {
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
}

.footer-content {
  width: 100%;
  padding: 0 16px;
}

.full-height {
  height: 100%;
}

.full-width {
  width: 100%;
}
</style> 