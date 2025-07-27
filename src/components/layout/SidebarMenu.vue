<template>
  <q-drawer 
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    class="bg-white"
    :width="250"
    :style="{ paddingTop: '200px' }"
  >
    <q-list>
      <q-item-label header>Resources Overview</q-item-label>
      
      <q-item 
        v-for="item in resourcesOverview" 
        :key="item.id"
        clickable 
        :to="item.route"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>{{ item.label }}</q-item-section>
      </q-item>
      
      <q-item-label header>Related Sites</q-item-label>
      
      <q-item 
        v-for="item in relatedSites" 
        :key="item.id"
        clickable 
        :to="item.route"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>{{ item.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { ref } from 'vue'
import { SIDEBAR_MENU } from '@/constants/sidebarMenu'

export default {
  name: 'SidebarMenu',
  setup() {
    const leftDrawerOpen = ref(true)
    const resourcesOverview = SIDEBAR_MENU.RESOURCES_OVERVIEW
    const relatedSites = SIDEBAR_MENU.RELATED_SITES

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      resourcesOverview,
      relatedSites,
      toggleLeftDrawer
    }
  }
}
</script> 

<style scoped>
.q-item {
  transition: background-color 0.3s ease;
}
.q-item:hover {
  background-color: rgba(0,0,0,0.05);
}
</style> 