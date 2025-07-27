<template>
  <q-layout view="hHh lpR fFf" class="flex flex-column fixed-layout">
    <header class="flex-none">
      <layout-primary-header />
      <layout-secondary-header />
      <layout-sidebar-menu />
    </header>
    
    <q-page-container class="flex-grow overflow-auto w-full">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <footer class="flex-none">
      <comment-footer />
    </footer>
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
    LayoutAppFooter,
  }
}
</script>

<style lang="scss" scoped>
.fixed-layout {
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  width: 100%;
}

.w-full {
  width: 100%;
}

.overflow-auto {
  overflow-y: auto;
  height: calc(100vh - (header height + footer height));
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 