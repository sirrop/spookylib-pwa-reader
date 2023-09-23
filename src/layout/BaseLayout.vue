<script setup lang="ts">
import ApplicationHeader from "../components/ApplicationHeader.vue";
import ApplicationFooter from "../components/ApplicationFooter.vue";
import MobileFooterBar from "../components/MobileFooterBar.vue";
</script>

<template>
    <ApplicationHeader />
    <main id="main">
        <slot></slot>
    </main>
    <MobileFooterBar />
    <ApplicationFooter />
</template>

<style scoped>
#main {
    min-height: calc(100vh - 44px);
    margin-bottom: 44px;
}
</style>