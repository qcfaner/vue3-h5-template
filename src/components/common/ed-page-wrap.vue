<template>
  <div>
    <template v-if="$slots.header">
      <div style="position: fixed; z-index: 999;">
        <ed-status-bar style="background: #FFFFFF; "></ed-status-bar>
        <slot name="header"></slot>
      </div>
      <div>
        <ed-status-bar></ed-status-bar>
        <div style="height: var(--van-nav-bar-height);"></div>
      </div>
    </template>
    <ed-status-bar v-else></ed-status-bar>
    <slot/>
  </div>
</template>

<script>
export default {
}
</script>