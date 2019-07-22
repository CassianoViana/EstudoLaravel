import Vue from "vue";

export default context => {
  const $toast = {
    success(title, message) {
      context.store.commit("setToast", {
        title: title,
        variant: "success",
        message: message
      });
    }
  };

  Vue.prototype.$toast = $toast;
};
