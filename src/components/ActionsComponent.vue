<template>
  <div class="actions">

    <div class="top">
      <v-text-field v-model="editedInvoice.productName" label="Product name" outlined></v-text-field>
      <v-text-field v-model="editedInvoice.price" prefix="$" label="Price" type="number" outlined></v-text-field>
      <v-text-field v-model="editedInvoice.qty" label="Qty" type="number" outlined></v-text-field>

      <v-btn @click="addInvoiceAction" :disabled="disableAdd"> 
        Add
      </v-btn>
    </div>

    <slot />

    <div class="bottom">
      <v-btn @click="deleteInvoices" :disabled="$store.state.selected.length === 0">
        Delete selected
      </v-btn>

      <p>Total: <strong>${{ totalSum }}</strong></p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Invoice from '../models/Invoice'
import { mapActions } from 'vuex'

export default Vue.extend({
  name: 'ActionsComponent',

  data() {
    return {
      editedInvoice: {} as Invoice,
    }
  },

  computed: {
    totalSum (): number {
      return (this.$store.state.invoices as Invoice[]).reduce(
        (acc, obj) => acc + (obj.qty * obj.price),
        0
      )
    },

    disableAdd(): boolean {
      return !(!!this.editedInvoice.productName && !!this.editedInvoice.price && !!this.editedInvoice.qty)
    }
  },

  methods: {
    ...mapActions({
      addInvoice: 'addInvoiceAction',
      deleteInvoices: 'deleteInvoicesAction',
    }),

    addInvoiceAction() {
      this.addInvoice({...this.editedInvoice})
      this.editedInvoice = {} as Invoice
    }
  }
});
</script>

<style lang="scss" scoped>
.actions {
  margin: 30px 0;
  
  .top {
    display: flex;

    .v-text-field {
      padding: 0 !important;
      width: 200px;
      margin-right: 10px;
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
