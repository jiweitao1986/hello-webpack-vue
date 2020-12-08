<template>
  <div>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/hello">Hello</router-link> |
      <router-link to="/news">News</router-link> |
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {},
};
</script>