<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        Amiraslan Bakhshili
      </div>

      <v-spacer></v-spacer>

      <v-switch
        v-model="$vuetify.theme.dark"
        class="d-flex align-center"
        label="Dark mode"
      />
    </v-app-bar>

    <v-main>
      <div class="content">
        <TitleComponent msg="Vue Invoice Calculator"/>
        <ActionsComponent>
          <InvoiceListComponent/>
        </ActionsComponent>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import ActionsComponent from './components/ActionsComponent.vue'
import TitleComponent from './components/TitleComponent.vue'
import InvoiceListComponent from './components/InvoiceListComponent.vue'

export default Vue.extend({
  name: 'App',

  components: {
    ActionsComponent,
    TitleComponent,
    InvoiceListComponent
  },
});
</script>

<style lang="scss" scoped>

.content {
  margin: 80px auto;
  border: 1px solid #eee;
  width: 800px;
  padding: 60px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 10%);
}

</style>
