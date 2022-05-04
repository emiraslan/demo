<template>
  <div class="invoice-list">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="invoices"
      item-key="productName"
      show-select
      class="elevation-1"
    >
      <template v-slot:[`item.price`]="{ item }">
        <span>${{ item.price }}</span>
      </template>
      <template v-slot:[`item.sum`]="{ item }">
        <span>${{ item.qty * item.price }}</span>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import Invoice from '@/models/Invoice';
import Vue from 'vue';
import { mapActions } from 'vuex'


export default Vue.extend({
  name: 'InvoiceListComponent',

  data: () => ({
    selected: [] as Invoice[],
    headers: [
      {
        text: 'Product name',
        align: 'start',
        sortable: true,
        value: 'productName',
      },
      {
        text: 'Price',
        align: 'start',
        sortable: true,
        value: 'price',
      },
      {
        text: 'Qty',
        align: 'start',
        sortable: true,
        value: 'qty',
      },
      {
        text: 'Sum',
        align: 'start',
        sortable: true,
        value: 'sum',
      },
    ],
  }),

  computed: {
    invoices () {
      return this.$store.state.invoices
    }
  },

  watch: {
    selected: {
      handler(newSelected) {
        this.updateSelected(newSelected)
      },
      immediate: true
    }
  },

  methods: {
    ...mapActions({
      updateSelected: 'updateSelectedAction',
    })
  },
});
</script>

<style lang="scss" scoped>
.invoice-list {
  margin: 20px 0;
}
</style>
