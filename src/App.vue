<template>
  <div>
    <header-nav></header-nav>
    <router-view />
    <div class="hidden">
      죄송합니다...ㅎㅎㅎ 더 열심히 공부하겠습니다. 사랑합니다 병찬쌤 S2 -일준-
    </div>
    <div class="hidden">난 죄송하지 않아요 -성훈-</div>
  </div>
</template>

<script>
import HeaderNav from "@/components/common/HeaderNav.vue";
export default {
  components: {
    HeaderNav,
  },
};
</script>

<style>
.hidden {
  visibility: hidden;
}
</style>
