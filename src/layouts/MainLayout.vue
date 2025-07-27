<template>
  <q-layout view="hHh lpR fFf" class="flex flex-column fixed-layout">
    <header class="header-container">
      <layout-primary-header />
      <layout-secondary-header />
    </header>
    
    <main class="main-grid">
      <layout-sidebar-menu class="sidebar" />
      <q-page-container class="page-content flex-grow overflow-auto w-full">
        <router-view v-slot="{ Component }" class="page-content-container">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page-container>
    </main>

    <footer class="footer-container">
      <layout-comment-footer />
      <layout-app-footer />

    </footer>
  </q-layout>
</template>

<script>
import LayoutPrimaryHeader from '@/components/layout/PrimaryHeader.vue'
import LayoutSecondaryHeader from '@/components/layout/SecondaryHeader.vue'
import LayoutSidebarMenu from '@/components/layout/SidebarMenu.vue'
import LayoutAppFooter from '@/components/layout/AppFooter.vue'
import LayoutCommentFooter from '@/components/layout/CommentFooter.vue'
export default {
  name: 'MainLayout',
  components: {
    LayoutPrimaryHeader,
    LayoutSecondaryHeader,
    LayoutSidebarMenu,
    LayoutAppFooter,
    LayoutCommentFooter
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

.header-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 150px;
}
.main-grid {
  width:  100%;
  display: grid;
  grid-template-columns: 250px 1fr
  ;
  height: calc(100vh - 150px - 200px); 
  padding: 0 10px;
}


.sidebar {
  width: 300px;
  overflow-y: auto;
  background-color: white;
}

.page-content {
  overflow-y: auto;
}

.w-full {
  width: 100%;
}

.overflow-auto {
  overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.footer-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
}
</style> 