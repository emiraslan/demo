<template>
  <div class="title">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TitleComponent',
  props: {
    msg: String,
  },
});
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
</style>
