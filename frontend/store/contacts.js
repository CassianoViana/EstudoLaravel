export const state = () => ({
  contacts: [],
  contact: {}
});

export const mutations = {
  add(state, contact) {
    contact.id = state.contacts.length;
    state.contacts.push(contact);
  },
  replace(state, { oldContact, newContact }) {
    let index = state.contacts.indexOf(oldContact);
    state.contacts[index] = newContact;
  },
  remove(state, { contact }) {
    state.contacts.splice(state.contacts.indexOf(contact), 1);
  },
  setContact(state, contact) {
    state.contact = contact;
  },
  setContacts(state, contacts) {
    state.contacts = contacts || [];
  }
};

export const getters = {
  getContact(state) {
    return state.contact;
  },
  getContacts(state) {
    return state.contacts;
  }
};

export const actions = {
  async save({ commit, dispatch }, contact) {
    if (!contact.id) {
      await this.$axios.$post("/api/contacts", contact);
    } else {
      await this.$axios.$put(`/api/contacts/${contact.id}`, contact);
    }
    dispatch("listContacts");
  },
  async listContacts({ commit, dispatch }) {
    let contacts = await this.$axios.$get("/api/contacts");
    commit("setContacts", contacts);
  },
  async remove({ commit, dispatch }, id) {
    let contact = await this.$axios.$delete("/api/contacts/" + id);
    dispatch("listContacts");
  },
  async getContactById({ state }, id) {
    if(id){
      return this.$axios.$get(`/api/contacts/${id}`);
    }else{
      return {};
    }
  },
  async loadContact({ commit, dispatch }, id) {
    let contact = await dispatch("getContactById", id);
    if (!contact) {
      contact = {
        seller_name: "",
        contact_name: "",
        company: "",
        email: "",
        phone: "",
        contact_date: "",
        expiration_date: ""
      };
    }
    commit("setContact", contact);
  }
};
