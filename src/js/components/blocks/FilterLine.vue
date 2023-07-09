<template lang="pug">
button.btn.btn-secondary.btn-sm(data-bs-toggle="button" :id="identificator") {{ text }}
</template>

<style lang="scss">
</style>

<script>
export default {
    props: {
        identificator: {
            type: String,
            default: "NULL"
        },
        text: {
            type: String,
            default: "NULL"
        }
    }
}
</script>