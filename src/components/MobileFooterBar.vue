<script setup lang="ts">

</script>

<template>
    <div id="mobile-footer-bar" class="fixed-bottom bg-light">
        <router-link to="/" class="mobile-footer-button">
            <div class="mobile-footer-button-icon">
                <i class="bi bi-house"></i>
            </div>
            <div class="mobile-footer-button-text">
                ホーム
            </div>
        </router-link>
        <router-link to="/articles" class="mobile-footer-button">
            <div class="mobile-footer-button-icon">
                <i class="bi bi-file-post"></i>
            </div>
            <div class="mobile-footer-button-text">
                記事
            </div>
        </router-link>
        <router-link to="/search" class="mobile-footer-button">
            <div class="mobile-footer-button-icon">
                <i class="bi bi-search"></i>
            </div>
            <div class="mobile-footer-button-text">
                検索
            </div>
        </router-link>
        <router-link to="/for-you" class="mobile-footer-button">
            <div class="mobile-footer-button-icon">
                <i class="bi bi-person-circle"></i>
            </div>
            <div class="mobile-footer-button-text">
                For You
            </div>
        </router-link>
    </div>
</template>

<style scoped>
#mobile-footer-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 1;
    padding: 0 1em;
}

.mobile-footer-button {
    text-decoration: none;
    color: #333;
    padding: .25em 0;
}
.mobile-footer-button-icon {
    text-align: center;
    font-size: 1.25em;
}
.mobile-footer-button-text {
    font-size: .75em;
    margin-top: .25em;
}
</style>