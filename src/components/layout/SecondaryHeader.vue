<template>
  <q-header 
    class="bg-secondary text-white" 
    style="top: 100px; height: 50px; min-height: 50px;"
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
  </q-header>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SecondaryHeader',
  setup() {
    const categories = [
      {
        id: 1,
        label: 'Get Certified',
        items: [
          { 
            id: 1, 
            label: 'Certification Levels', 
            icon: 'school' 
          },
          { 
            id: 2, 
            label: 'Exam Preparation', 
            icon: 'book' 
          }
        ]
      },
      {
        id: 2,
        label: 'Explore Occupations',
        items: [
          { 
            id: 1, 
            label: 'Career Paths', 
            icon: 'work' 
          },
          { 
            id: 2, 
            label: 'Job Market Insights', 
            icon: 'insights' 
          }
        ]
      },
      {
        id: 3,
        label: 'Develop Professionally',
        items: [
          { 
            id: 1, 
            label: 'Training Programs', 
            icon: 'trending_up' 
          },
          { 
            id: 2, 
            label: 'Skill Development', 
            icon: 'psychology' 
          }
        ]
      },
      {
        id: 4,
        label: 'Resources',
        items: [
          { 
            id: 1, 
            label: 'Learning Materials', 
            icon: 'library_books' 
          },
          { 
            id: 2, 
            label: 'Community Forums', 
            icon: 'forum' 
          }
        ]
      },
      {
        id: 5,
        label: 'Support',
        items: [
          { 
            id: 1, 
            label: 'Help Center', 
            icon: 'help' 
          },
          { 
            id: 2, 
            label: 'Contact Support', 
            icon: 'contact_support' 
          }
        ]
      }
    ]

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
.full-width {
  width: 100%;
}
</style> 