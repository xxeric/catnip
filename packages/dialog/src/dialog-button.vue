<template>
  <button :class="type" @click="_close">
    <slot>{{text}}</slot>
  </button>
</template>

<script>
export default {
  name: 'CatButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
    text: {
      type: String,
      default: 'Default',
    },
  },
  inject: ['_hideDialog'],
  methods: {
    _close() {
      this.$emit('state')
      this._hideDialog()
    },
  },
}
</script>

<style>
</style>