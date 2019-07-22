<template>
  <div>
  </div>
</template>
<script>
export default {
  computed: {
    toast(){
      return this.$store.getters['getToast'];
    }
  },
  watch: {
    toast({ title, variant, message }){
      this.$bvToast.toast(message, {
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        title: title,
        autoHideDelay: 5000
      });
    }
  }
}
</script>