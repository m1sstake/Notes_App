<template>
  <div class="message" v-if="message">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: null
    }
  },
   created () {
     this.$store.watch(
       (state,getters) => getters.getErrorMessage,
       (text) => {
         this.message = text
       }
     )
  },
}
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  padding: 20px;
}
p {
  color: #ba3838;
}
</style>
