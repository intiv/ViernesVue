<template>
  <div>
    <div>
      <router-link to="/">
        <button type="button" name="button">Inti</button>
      </router-link>

      <router-link to="/hello">
        <button type="button" name="button">Hello</button>
      </router-link>
    </div>

    <div>
      <router-view>

      </router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>
