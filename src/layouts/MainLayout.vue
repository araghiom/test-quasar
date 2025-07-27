<template>
  <q-layout view="hHh lpR fFf">
    <layout-primary-header />
    <layout-secondary-header />
    <layout-sidebar-menu />
    
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <layout-app-footer />
  </q-layout>
</template>

<script>
import LayoutPrimaryHeader from '@/components/layout/PrimaryHeader.vue'
import LayoutSecondaryHeader from '@/components/layout/SecondaryHeader.vue'
import LayoutSidebarMenu from '@/components/layout/SidebarMenu.vue'
import LayoutAppFooter from '@/components/layout/AppFooter.vue'

export default {
  name: 'MainLayout',
  components: {
    LayoutPrimaryHeader,
    LayoutSecondaryHeader,
    LayoutSidebarMenu,
    LayoutAppFooter
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 