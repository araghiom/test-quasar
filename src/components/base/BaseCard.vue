<template>
  <q-card 
    :class="['base-card', cardClasses]" 
    :flat="flat"
    :bordered="bordered"
    :hover="hover"
  >
    <q-card-section v-if="title" class="card-header">
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-card-section>
      <slot></slot>
    </q-card-section>

    <q-card-actions v-if="$slots.actions" align="right">
      <slot name="actions"></slot>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    flat: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: true
    },
    hover: {
      type: Boolean,
      default: false
    },
    cardClasses: {
      type: [String, Array],
      default: ''
    }
  }
}
</script>

<style scoped>
.base-card {
  transition: all 0.3s ease;
}
.base-card.hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}
.card-header {
  background-color: rgba(0,0,0,0.05);
}
</style> 