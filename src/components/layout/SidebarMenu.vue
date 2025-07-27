<template>
  <div class="sidebar-menu">
    <q-list class="grid-container">
      <div class="resources-section">
        <q-item-label header>Resources Overview</q-item-label>
        
        <div class="grid-items">
          <q-item 
            v-for="item in resourcesOverview" 
            :key="item.id"
            clickable 
            :to="item.route"
            class="grid-item"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>{{ item.label }}</q-item-section>
          </q-item>
        </div>
      </div>
      
      <div class="related-sites-section">
        <q-item-label header>Related Sites</q-item-label>
        
        <div class="grid-items">
          <q-item 
            v-for="item in relatedSites" 
            :key="item.id"
            clickable 
            :to="item.route"
            class="grid-item"
          >
            <q-item-section avatar>
              <q-icon :name="item.icon" />
            </q-item-section>
            <q-item-section>{{ item.label }}</q-item-section>
          </q-item>
        </div>
      </div>
    </q-list>
  </div>
</template>

<script>
import { SIDEBAR_MENU } from '@/constants/sidebarMenu'

export default {
  name: 'SidebarMenu',
  setup() {
    const resourcesOverview = SIDEBAR_MENU.RESOURCES_OVERVIEW
    const relatedSites = SIDEBAR_MENU.RELATED_SITES

    return {
      resourcesOverview,
      relatedSites
    }
  }
}
</script>

<style scoped>
.sidebar-menu {
  width: 100%;
  display: block;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 16px;
}

.resources-section,
.related-sites-section {
  display: flex;
  flex-direction: column;
}

.grid-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 8px;
}

.grid-item {
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
}

.grid-item:hover {
  background-color: rgba(0,0,0,0.05);
}

.q-item-label {
  margin-bottom: 8px;
}
</style> 