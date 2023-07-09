<template lang="pug">

nav.navbar.navbar-dark.bg-dark.fixed-top
  .container-fluid
    button.navbar-toggler.p-1.p-md-2(type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasDarkNavbar' aria-controls='offcanvasDarkNavbar')
      span.navbar-toggler-icon
    a.navbar-brand(href='index.html').m-0.ms-md-3 MyTube

    form.search-form.d-flex.w-50.mt-2.m-lg-auto.order-2.order-lg-1
        input.form-control.me-2(type="search" placeholder="Поиск" aria-label="Поиск")                
        button.btn.btn-outline-success(type="submit")
            i.bi.bi-search

    #offcanvasDarkNavbar.offcanvas.offcanvas-start.text-bg-dark(tabindex='-1' aria-labelledby='offcanvasDarkNavbarLabel')
      .offcanvas-header
        h5.offcanvas-title#offcanvasDarkNavbarLabel MyTube
        button.btn-close.btn-close-white(type='button' data-bs-dismiss='offcanvas' aria-label='Close')
      .offcanvas-body
        ul.navbar-nav.justify-content-start.flex-grow-2.pe-1
            OffCanvasBody(v-for="item in itemsLeft" v-bind:link="item.link" v-bind:text="item.text" v-bind:lists="item.lists" v-bind:icon="item.icon" v-bind:authorIconAddress="item.authorIconAddress")

    .button-blocks.order-1.order-lg-2
        button.btn.position-relative.btn-dark(type="button")
            i.bi.bi-cloud-plus.text-light

        button.btn.btn-dark(type="button")
            i.bi.bi-bell.text-light.position-relative
                span.position-absolute.top-0.start-100.translate-middle.badge.rounded-pill.bg-danger.p-1 5

        button.btn.btn-dark(type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling")
            i.bi.bi-person-circle.text-light

    div.offcanvas.offcanvas-end.text-bg-dark(data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel")
        .offcanvas-header.flex-wrap
            button.btn-close.btn-close-white(type='button' data-bs-dismiss='offcanvas' aria-label='Close')
        .offcanvas-body
            .block.w-100
                .row.g-0
                    .col-3
                        i.bi.bi-person-circle.text-light.fs-2
                    .col-9
                        .card-body
                            .card-title
                                h6.offcanvas-title#offcanvasScrollingLabel.d-block User
                                h6.offcanvas-title#offcanvasScrollingLabel.d-block @User-id
                                a.fs-6.d-block(href="#") Управление аккаунтом google
            ul.navbar-nav.justify-content-start.flex-grow-2.pe-1
                OffCanvasBody(v-for="item in itemsRight" v-bind:link="item.link" v-bind:text="item.text" v-bind:lists="item.lists" v-bind:icon="item.icon" v-bind:authorIconAddress="item.authorIconAddress")

    .filter-line.gap-2.d-lg-flex.w-100.mt-2.mb-2.d-none.order-4
        FilterLine(v-for="filterItem in filterItems" v-bind:identificator="filterItem.identificator" v-bind:text="filterItem.text")

.header-divider

</template>
    
<script>
    import OffCanvasBody from "./blocks/OffCanvasBody"
    import FilterLine from "./blocks/FilterLine"
    export default {
        components: {
            OffCanvasBody,
            FilterLine
        },
        data: () => ({
                itemsLeft: [
                        {link: 'index.html', text: 'Главная', icon: 'bi bi-house-door'},
                        {link: '#', text: 'Shorts', icon: 'bi bi-lightning'},
                        {link: '#', text: 'Подписки', icon: 'bi bi-list-check'},
                        {link: '#', text: 'divider'},
                        {link: '#', text: 'Библиотека', icon: 'bi bi-journal-album'},
                        {link: '#', text: 'История', icon: 'bi bi-clock-history'},
                        {link: '#', text: 'Ваши видео', icon: 'bi bi-play-btn-fill'},
                        {link: '#', text: 'Смотреть позже', icon: 'bi bi-stopwatch'},
                        {link: '#', text: 'Ваши клипы', icon: 'bi bi-scissors'},
                        {link: 'dropdown', text: 'Развернуть', lists : [
                            {link: '#', text: 'Понравившиеся', icon: 'bi bi-star'},
                            {link: '#', text: 'Микс', icon: 'bi bi-soundwave'},
                        ]},
                        {link: '#', text: 'divider'},
                        {link: 'title', text: 'Подписки'},
                        {link: '#', text: 'Порулярные новости', authorIconAddress: 'https://placehold.co/35x35'},
                        {link: '#', text: 'Канал 2', authorIconAddress: 'default'},
                        {link: '#', text: 'divider'},
                        {link: 'title', text: 'Навигатор'},
                        {link: '#', text: 'В тренде', icon: 'bi bi-fire'},
                        {link: '#', text: 'Музыка', icon: 'bi bi-music-note'},
                        {link: '#', text: 'Фильмы', icon: 'bi bi-film'},
                        {link: '#', text: 'Трансляции', icon: 'bi bi-wifi'},
                        {link: '#', text: 'Видеоигры', icon: 'bi bi-joystick'},
                        {link: '#', text: 'Спорт', icon: 'bi bi-bicycle'},
                        {link: '#', text: 'divider'},
                        {link: 'title', text: 'Другие возможности'},
                        {link: '#', text: 'Творческая студия', icon: 'bi bi-youtube'},
                        {link: '#', text: 'YouTube Music', icon: 'bi bi-youtube'},
                        {link: '#', text: 'YouTube Детям', icon: 'bi bi-youtube'},
                        {link: '#', text: 'divider'},
                        {link: '#', text: 'Настройки', icon: 'bi bi-gear'},
                        {link: '#', text: 'Жалобы', icon: 'bi bi-flag'},
                        {link: '#', text: 'Справка', icon: 'bi bi-info-circle'},
                        {link: '#', text: 'Отправить отзыв', icon: 'bi bi-chat-left-dots'}
                ],
                itemsRight: [
                        {link: '#', text: 'divider'},
                        {link: '#', text: 'Мой канал', icon: 'bi bi-person-square'},
                        {link: '#', text: 'Творческая студия', icon: 'bi bi-palette'},
                        {link: 'dropdown', text: 'Сменить аккаунт', icon: 'bi bi-person-circle', lists : [
                            {link: '#', text: 'Аккаунт 1', authorIconAddress: 'https://placehold.co/35x35'},
                            {link: '#', text: 'Аккаунт 2', authorIconAddress: 'https://placehold.co/35x35'}
                        ]},
                        {link: '#', text: 'Выйти', icon: 'bi bi-box-arrow-right'},
                        {link: '#', text: 'divider'},
                        {link: '#', text: 'Покупки и платные подписки', icon: 'bi bi-currency-dollar'},
                        {link: '#', text: 'Ваши данные на YouTube', icon: 'bi bi-person-vcard'},
                        {link: '#', text: 'divider'},
                        {link: 'dropdown', text: 'Тема: темная', icon: 'bi bi-moon', lists : [
                            {link: '#', text: 'Темная'},
                            {link: '#', text: 'Светлая'}
                        ]},
                        {link: 'dropdown', text: 'Язык: Русский', icon: 'bi bi-translate', lists : [
                            {link: '#', text: 'English'},
                            {link: '#', text: 'Русский'}
                        ]},
                        {link: 'dropdown', text: 'Безопасный режим: откл', icon: 'bi bi-file-earmark-lock', lists : [
                            {link: '#', text: 'Включить'},
                            {link: '#', text: 'Выключить'}
                        ]},
                        {link: 'dropdown', text: 'Страна: Россия', icon: 'bi bi-globe', lists : [
                            {link: '#', text: 'Россия'},
                            {link: '#', text: 'Америка'},
                            {link: '#', text: 'Белоруссия'},
                            {link: '#', text: 'Украина'},
                        ]},
                        {link: '#', text: 'Быстрые клавиши', icon: 'bi bi-keyboard'},
                        {link: '#', text: 'divider'},
                        {link: '#', text: 'Настройки', icon: 'bi bi-gear'},
                        {link: '#', text: 'divider'},
                        {link: '#', text: 'Справка', icon: 'bi bi-info-circle'},
                        {link: '#', text: 'Отправить отзыв', icon: 'bi bi-chat-left-dots'}
                ],
                filterItems: [
                    {identificator: "#filter-all", text: "Все"},
                    {identificator: "#filter-videogame", text: "Видеоигры"},
                    {identificator: "#filter-music", text: "Музыка"},
                    {identificator: "#filter-myMusic", text: "Джемы"},
                    {identificator: "#filter-stream", text: "Сейчас в эфире"},
                    {identificator: "#filter-sport", text: "Спорт"},
                    {identificator: "#filter-new", text: "Недавно опубликованные"}
                ]
            }),
        mounted()
        {
        }
}
</script>

<style lang="scss" scoped>

.search-form {
    @media (max-width: 992px) {
        width: 100% !important;
    }
}

.header-divider {
    height: 56px;
}

.offcanvas {
    --bs-offcanvas-width: min(95vw, 280px) !important;
}
</style>