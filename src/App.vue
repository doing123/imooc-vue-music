<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from '@/components/m-header/m-header'

  export default {
    components: {
      MHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "~@/common/stylus/variable";

  #app
    color: $color-theme
</style>
