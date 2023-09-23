<script setup lang="ts">
import {reactive} from "vue";
import {removeHtmlTags} from "../util/html.ts";

const newestPost = reactive({
    fetchedAll: false,
    title: "",
    thumbnail: "",
    date: "",
    link: "",
    excerpt: ""
})

fetch('https://spookylib.com/wp-json/wp/v2/posts?per_page=1')
    .then(res => res.json())
    .then(async ([post]) => {
        newestPost.title = post.title.rendered
        newestPost.link = `/articles?p={post.id}`
        newestPost.date = post.date
        newestPost.excerpt = removeHtmlTags(post.excerpt.rendered)
        console.log(post)
        const thumbnailId = post.featured_media
        return fetch(`https://spookylib.com/wp-json/wp/v2/media/${thumbnailId}`).then(res => res.json())
    })
    .then(media => {
        console.log(media)
        newestPost.thumbnail = media.source_url
        newestPost.fetchedAll = true
    })
    .then(() => {
        console.log(newestPost)
    })
</script>


<template>
    <div id="newest-post-wrapper">
        <a v-if="newestPost.fetchedAll" id="newest-post" :href="newestPost.link">
            <span style="color: rgb(128,128,128);">New</span>
            <h3>{{ newestPost.title }}</h3>
            <img id="newest-post-thumbnail" decoding="async" width="1280" height="720" :src="newestPost.thumbnail" alt="">
            <div id="newest-post-excerpt">{{ newestPost.excerpt }}</div>
        </a>
    </div>
    <div id="current-articles">
        <div class="carousel">

        </div>
        <div>

        </div>
    </div>
</template>

<style scoped>
#newest-post-thumbnail {
    max-width: 100%;
    height: auto;
}
#newest-post {
    color: #333333;
    text-decoration: none;
    padding: 1em;
    display: block;
    background: white;
}
#newest-post h3 {
    margin: 0;
}
#newest-post-excerpt {
    margin-top: .25em;
}
</style>