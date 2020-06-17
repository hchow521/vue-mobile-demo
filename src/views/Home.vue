<template>
  <div>
    <h1>主页</h1>
    <button @click="$router.push('/number')">管理</button>
    <button @click="$router.push('/call')">拨号</button>
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  export default {

  }
</script>
