<template>
  <div 
    class="primary-header bg-primary text-white" 
  >
    <q-toolbar class="full-height">
      <q-toolbar-title class="full-width">
        <div class="row items-center justify-between full-height q-px-md">
          <div class="row items-center">
            <q-icon name="dashboard" class="q-mr-sm" size="32px" />
            <span class="text-h5">Application Name</span>
          </div>
      
          <div class="row items-center">
            <div class="q-mr-md">
              <p class="text-body1 q-ma-none text-white">Go to:</p>
              <q-menu>
                <q-list>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="star" />
                    </q-item-section>
                    <q-item-section>
                      <p class="text-body1 q-ma-none">Ratings</p>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="badge" />
                    </q-item-section>
                    <q-item-section>
                      <p class="text-body1 q-ma-none">Designators</p>
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-icon name="search" />
                    </q-item-section>
                    <q-item-section>
                      <p class="text-body1 q-ma-none">Credential Search</p>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </div>

            <q-btn-group flat class="q-mr-md">
              <q-btn 
                flat 
                round 
                dense 
                icon="search" 
                size="lg" 
                class="text-white"
                @click="showSearchDialog = true"
              />
            </q-btn-group>

            <q-btn-group flat>
              <q-btn 
                flat 
                label="Ratings" 
                class="text-white q-mr-sm"
              />
              <q-btn 
                flat 
                label="Designators" 
                class="text-white q-mr-sm"
              />
              <q-btn 
                flat 
                label="Credential Search" 
                class="text-white"
              />
            </q-btn-group>
          </div>
        </div>
      </q-toolbar-title>
    </q-toolbar>

    <q-dialog v-model="showSearchDialog">
      <q-card style="width: 500px">
        <q-card-section>
          <div class="text-h6">Search</div>
        </q-card-section>

        <q-card-section>
          <q-input 
            v-model="searchQuery" 
            outlined 
            placeholder="Enter search terms"
            @keyup.enter="performSearch"
          >
            <template v-slot:append>
              <q-btn 
                flat 
                round 
                dense 
                icon="search" 
                @click="performSearch"
              />
            </template>
          </q-input>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Search" color="primary" @click="performSearch" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PrimaryHeader',
  setup() {
    const showSearchDialog = ref(false)
    const searchQuery = ref('')

    const performSearch = () => {
      if (searchQuery.value.trim()) {
        console.log('Searching for:', searchQuery.value)
        showSearchDialog.value = false
      }
    }

    return {
      showSearchDialog,
      searchQuery,
      performSearch
    }
  }
}
</script>

<style scoped>
.primary-header {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
}

.full-height {
  height: 100%;
}

.full-width {
  width: 100%;
}
</style> 