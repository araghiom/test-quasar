<template>
  <div 
    class="secondary-header bg-secondary text-white" 
    style="height: 50px; min-height: 50px;"
  >
    <q-toolbar class="full-height">
      <q-toolbar-title class="full-width row items-center justify-between" style="padding-left: 100px;">
        <div class="row">
          <q-btn-group flat>
            <q-btn-dropdown 
              v-for="category in categories" 
              :key="category.id"
              flat 
              class="text-white" 
              :label="category.label"
            >
              <q-list>
                <q-item 
                  v-for="subItem in category.items" 
                  :key="subItem.id" 
                  clickable 
                  v-close-popup 
                  @click="selectSubMenuItem(category, subItem)"
                  :to="subItem.route"
                >
                  <q-item-section avatar>
                    <q-icon :name="subItem.icon" />
                  </q-item-section>
                  <q-item-section>
                    <p class="text-body1 q-ma-none">{{ subItem.label }}</p>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-btn-group>
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </div>
</template>

<script>
import { ref } from 'vue'
import { HEADER_CATEGORIES } from '@/constants/headerCategories'

export default {
  name: 'SecondaryHeader',
  setup() {
    const categories = HEADER_CATEGORIES

    const selectedSubMenuItems = ref({})

    const selectSubMenuItem = (category, subItem) => {
      selectedSubMenuItems.value[category.label] = subItem
      console.log(`Selected ${category.label} Submenu:`, subItem.label)
    }

    return {
      categories,
      selectedSubMenuItems,
      selectSubMenuItem
    }
  }
}
</script>

<style scoped>
.secondary-header {
  height: 50px;

}

.full-width {
  width: 100%;
}
</style> 