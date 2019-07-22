<template>
  <div>
    <toast ref="toast" />
    <nuxt />
  </div>
</template>
<script>
import Toast from "~/components/Toast";
export default {
  components: {
    Toast
  }
};
</script>