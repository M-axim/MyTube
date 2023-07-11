<template lang="pug">
.container-fluid.mt-3
    .filter-line.gap-2.d-lg-flex.w-100.mt-2.mb-2.d-none.order-4
        FilterLine(v-for="filterItem in filterItems" v-bind:identificator="filterItem.identificator" v-bind:text="filterItem.text")

    Spinner(v-if="loading")
    .row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-lg-4.row-cols-xxl-5.g-2(v-else)
        VideoBlock(v-for="videoItem in videoLists" 
        v-bind:videoCoverAddress="videoItem.videoCoverAddress" 
        v-bind:authorIconAddress="videoItem.authorIconAddress" 
        v-bind:title="videoItem.title"
        v-bind:author="videoItem.author" 
        v-bind:views="videoItem.views"
        v-bind:time="videoItem.time"
        v-bind:type="videoItem.type"
        v-bind:spectators="videoItem.spectators")
    
</template>
    
<script>
import VideoBlock from "../components/blocks/VideoBlock"
import Spinner from "../components/blocks/Spinner"
import FilterLine from "../components/blocks/FilterLine"

export default {
    components: {
        VideoBlock,
        Spinner,
        FilterLine
    },
    data: () => ({
        loading: true,
        videoLists: [],
        filterItems: [],
    }),
    mounted() {
        this.loadVideo()
    },
    methods: {
        loadVideo() {
            this.videoLists = [
            {
                videoCoverAddress: "https://placehold.co/300x250",
                authorIconAddress: "",
                title: "Заголовок 1",
                author: "Автор",
                views: "35 тыс просмотров",
                time: "4 час назад",
                type: "stream",
                spectators: "12 зрителей"
            },
            {
                videoCoverAddress: "https://placehold.co/300x250",
                authorIconAddress: "https://placehold.co/35x35",
                title: "Заголовок 2",
                author: "Автор",
                views: "15 тыс просмотров",
                time: "1 час назад",
                type: "video"
            },
            {
                videoCoverAddress: "https://placehold.co/300x250",
                authorIconAddress: "https://placehold.co/35x35",
                title: "Заголовок 3",
                author: "Автор",
                views: "151 тыс просмотров",
                time: "4 дня назад",
                type: "video"
            },
            {
                videoCoverAddress: "https://placehold.co/300x250",
                authorIconAddress: "https://placehold.co/35x35",
                title: "Заголовок 4",
                author: "Автор",
                views: "15 тыс просмотров",
                time: "1 неделя назад",
                type: "video",
            },
            {
                videoCoverAddress: "https://placehold.co/300x250",
                authorIconAddress: "https://placehold.co/35x35",
                title: "Заголовок 5",
                author: "Автор",
                views: "1 млн. просмотров",
                time: "месяц назад",
                type: "video"
            },
            {
                videoCoverAddress: "https://placehold.co/300x250",
                authorIconAddress: "https://placehold.co/35x35",
                title: "Заголовок 6",
                author: "Автор",
                views: "2 тыс просмотров",
                time: "неделю назад",
                type: "video",
            },
            {
                videoCoverAddress: "https://placehold.co/300x250",
                authorIconAddress: "https://placehold.co/35x35",
                title: "Заголовок 7",
                author: "Автор",
                views: "311 тыс просмотров",
                time: "7 дней назад",
                type: "video"
            },
            {
                videoCoverAddress: "https://placehold.co/300x250",
                authorIconAddress: "https://placehold.co/35x35",
                title: "Заголовок 8",
                author: "Автор",
                views: "315 тыс просмотров",
                time: "1 неделя назад",
                type: "video",
            }]
            this.filterItems = [
                {identificator: "#filter-all", text: "Все"},
                {identificator: "#filter-videogame", text: "Видеоигры"},
                {identificator: "#filter-music", text: "Музыка"},
                {identificator: "#filter-myMusic", text: "Джемы"},
                {identificator: "#filter-stream", text: "Сейчас в эфире"},
                {identificator: "#filter-sport", text: "Спорт"},
                {identificator: "#filter-new", text: "Недавно опубликованные"}
            ]
            this.loading = false
        }
    }
}
</script>

<style lang="scss" scoped>

</style>