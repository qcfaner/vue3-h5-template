<template>
  <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
import {computed, reactive, toRefs} from "vue";

export default {
  props: {
    iconClass: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      iconName: computed(() => `#icon-${props.iconClass}`)
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>