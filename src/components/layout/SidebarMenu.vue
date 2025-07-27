<template>
  <q-drawer 
    v-model="leftDrawerOpen"
    show-if-above
    bordered
    class="bg-accent"
    :width="250"
  >
    <q-list>
      <q-item-label header>Resources</q-item-label>
      
      <q-item clickable to="/resources/overview">
        <q-item-section avatar>
          <q-icon name="dashboard" />
        </q-item-section>
        <q-item-section>Resources Overview</q-item-section>
      </q-item>
      
      <q-item clickable to="/resources/tools">
        <q-item-section avatar>
          <q-icon name="build" />
        </q-item-section>
        <q-item-section>Tools and Guides</q-item-section>
      </q-item>
      
      <q-item clickable to="/resources/news">
        <q-item-section avatar>
          <q-icon name="article" />
        </q-item-section>
        <q-item-section>News and Information</q-item-section>
      </q-item>
      
      <q-item clickable to="/resources/sites">
        <q-item-section avatar>
          <q-icon name="link" />
        </q-item-section>
        <q-item-section>Related Sites</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SidebarMenu',
  setup() {
    const leftDrawerOpen = ref(true)

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer
    }
  }
}
</script> 