import Invoice from '@/models/Invoice'
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    invoices: [] as Invoice[],
    selected: [] as Invoice[],
  },
  
  mutations: {
    addInvoice(state, invoice: Invoice) {
      (state.invoices as Invoice[]).push(invoice)
    },

    updateSelected(state, selectedInvoices: Invoice[]) {
      state.selected = selectedInvoices
    },

    deleteInvoices(state) {
      state.invoices = (state.invoices as Invoice[]).filter((invoice: Invoice) =>
        (state.selected as Invoice[]).filter((selected: Invoice) => invoice.productName === selected.productName ).length === 0
      )

      state.selected = []
    },
  },
  
  actions: {
    addInvoiceAction ({ commit }, invoice: Invoice) {
      commit('addInvoice', invoice)
    },

    updateSelectedAction ({ commit }, selectedInvoices: Invoice[]) {
      commit('updateSelected', selectedInvoices)
    },

    deleteInvoicesAction ({ commit }) {
      commit('deleteInvoices')
    },
  },

  plugins: [new VuexPersistence().plugin]
})
