import Vue from "vue";

export default context => {
  const $toast = {
    success(title, message) {
      context.store.commit("setToast", {
        title: title,
        variant: "success",
        message: message
      });
    },
    error(title, message) {
      context.store.commit("setToast", {
        title: title,
        variant: "danger",
        message: message
      });
    }
  };

  Vue.prototype.$toast = $toast;
};
