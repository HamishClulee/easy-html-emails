<template>
    <main class="app-container">

        <topnav></topnav>

        <router-view></router-view>

    </main>
</template>

<script>
import topnav from './components/topnav'

export default {
    name: 'App',
    components: {
        topnav,
    },
}
</script>

<style lang="sass" scoped></style>
