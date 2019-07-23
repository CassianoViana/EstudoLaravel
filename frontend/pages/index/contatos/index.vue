<template>
  <div>
    <nuxt-link to="cadastro" append>
      <b-btn>Novo</b-btn>
    </nuxt-link>
    <b-row>
      <b-col>
        <b-table :fields="fields" :items="contactsTableItems" show-empty>
          <template slot="actions" slot-scope="data">
            <nuxt-link :to="`cadastro/${data.item.id}`" append>
              <b-button>Editar</b-button>
            </nuxt-link>
            <b-button @click="confirmRemove(data.item)">Excluir</b-button>
          </template>
          <template slot="empty">
            <h4>Não há contatos cadastrados ainda</h4>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  async fetch({ store, error }) {
    try {
      await store.dispatch("contacts/listContacts");
    } catch (e) {
      error(e);
    }
  },
  asyncData() {
    return {
      fields: [
        "vendedor",
        "contato",
        "empresa",
        "telefone",
        "email",
        "validade",
        { key: "actions", label: "Ações" }
      ]
    };
  },
  computed: {
    contacts() {
      return this.$store.getters["contacts/getContacts"];
    },
    contactsTableItems() {
      return this.contacts.map(contact => ({
        id: contact.id,
        vendedor: contact.seller_name,
        empresa: contact.company,
        contato: contact.contact_name,
        telefone: contact.phone,
        email: contact.email,
        validade: contact.expiration_date
      }));
    }
  },
  methods: {
    confirmRemove({ id, contato }) {
      debugger
      this.$bvModal
        .msgBoxConfirm(`O contato ${contato} será removido.`, {
          title: "Remover o contato?",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "Remover",
          cancelTitle: "Cancelar",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true
        })
        .then(value => {
          this.$store.dispatch("contacts/remove", id);
        })
        .catch(err => {
          throw err;
        });
    }
  }
};
</script>

<style>
</style>
