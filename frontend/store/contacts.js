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
    if (!!contact.id) {
      let oldContact = await dispatch("getContactById", contact.id);
      commit("replace", oldContact, contact);
    } else {
      await this.$axios.$post("/api/contacts", contact);
      dispatch("listContacts");
    }
  },
  async listContacts({ commit, dispatch }) {
    let response = await this.$axios.$get("/api/contacts");
    commit("setContacts", response.data);
  },
  async remove({ commit, dispatch }, id) {
    let contact = await dispatch("getContactById", id);
    commit("remove", contact);
  },
  async getContactById({ state }, id) {
    return state.contacts.filter(contact => contact.id == id)[0];
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
