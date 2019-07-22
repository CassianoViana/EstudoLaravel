<!-- O sistema deve permitir o cadastro de contatos com os campos nome do
vendedor, nome da empresa, nome do contato, e-mail, telefone, data de contato e
data de validade. (RN01, RN02) -->
<template>
  <div>
    <button @click="fill">Test</button>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Nome do vendedor" label-for="input-1">
        <b-form-input id="input-1" v-model="contact.seller_name" required autofocus></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nome da empresa" label-for="input-2">
        <b-form-input id="input-2" v-model="contact.company"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Nome do contato" label-for="input-3">
        <b-form-input id="input-3" v-model="contact.contact_name" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="E-mail" label-for="input-4">
        <b-form-input id="input-4" v-model="contact.email" type="email" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Telefone" label-for="input-5">
        <b-form-input id="input-5" v-model="contact.phone" required></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Data de contato" label-for="input-6">
        <b-form-input id="input-6" v-model="contact.contact_date" type="date"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Data de validade" label-for="input-7">
        <b-form-input id="input-7" v-model="contact.expiration_date" type="date"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Salvar</b-button>
      <b-button type="reset" variant="danger">Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    await store.dispatch("contacts/loadContact", params.id);
  },
  data() {
    return {
      show: true
    };
  },
  computed: {
    contact: {
      get() {
        return this.$store.getters["contacts/getContact"];
      },
      set(contact) {
        this.$store.commit("contacts/setContact", contact);
      }
    }
  },
  methods: {
    fill() {
      this.contact = {
        seller: {
          name: "Abc",
          company: "abccompany"
        },
        contact: {
          name: "Joao silav",
          email: "abc@mail",
          phone: "123123123123"
        }
      };
    },
    async onSubmit(evt) {
      evt.preventDefault();
      await this.$store.dispatch("contacts/save", this.contact);
      this.$toast.success('Sucesso', 'O contato foi salvo');
      this.$router.back();
    },
    onReset(evt) {
      this.$router.back();
    }
  }
};
</script>
<style>
</style>
