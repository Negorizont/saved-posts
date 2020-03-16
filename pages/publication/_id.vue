<template>
  <h1>{{ user }}</h1>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(
      'https://5e63f7a3782c970014a89ee5.mockapi.io/api/post/' + params.id
    )
    return { user }
  }
}
</script>
