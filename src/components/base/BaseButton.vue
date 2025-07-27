<template>
  <q-btn
    :label="label"
    :icon="icon"
    :color="color"
    :class="classes"
    :flat="flat"
    :round="round"
    :dense="dense"
    @click="handleClick"
  >
    <slot></slot>
  </q-btn>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    flat: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    classes: {
      type: [String, Array],
      default: ''
    }
  },
  emits: ['click'],
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script> 