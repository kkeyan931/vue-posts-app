<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="toHome">go back</button>
  </div>
</template>

<script>
  export default {
  name: 'AboutView',
  components: {
  },
  methods: {
    toHome(){
      this.$router.push('/');
    }
  }
}
</script>
