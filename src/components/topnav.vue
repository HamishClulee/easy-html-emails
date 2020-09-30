<template>
    <div class="navbar-con">

        <div class="navbar-left">
            <div class="logo-con" @click="$route.name !== 'home' ? routehome : null">
                <img src="/favicon.ico" />
            </div>
            <h4 class="navh4">Build My Email</h4>
        </div>

        <div class="navbar-right">

            <!-- <div class="text-item">
                <a>There Are No Menu Items :)</a>
            </div> -->
            <div class="text-item" :class="checkvis('home') ? 'active-route' : 'inactive-route'">
                <router-link :to="{ path: '/'}">Home</router-link>
            </div>
             <div class="text-item" :class="checkvis('beta') ? 'active-route' : 'inactive-route'">
                <router-link :to="{ path: '/beta'}">Beta</router-link>
            </div>

            <!-- <div class="hamburger" @click="togglecanvas">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div> -->
        </div>

        <transition name="fade" mode="in-out">

            <div v-if="canvasopen" class="canvas-nav">
                <div class="canvas-text-con">
                    <div class="big-x" @click="togglecanvas">
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    <div
                        class="canvas-item"
                        @click="togglecanvas">
                            <router-link :to="{ path: '/'}">home</router-link>
                    </div>
                    <div
                        class="canvas-item"
                        @click="togglecanvas">
                            <router-link :to="{ path: '/pricing'}">pricing</router-link>
                    </div>

                    <div
                        class="canvas-item"
                        @click="togglecanvas">
                            <router-link :to="{ path: '/auth/login'}">Login / SignUp</router-link>
                    </div>

                </div>
            </div>
            
        </transition>

    </div>
</template>
<script>
export default {
    name: 'navbar',
    data() {
        return {
            canvasopen: false,
            scrolledTop: true,
        }
    },
    methods: {
        togglecanvas() {
            setTimeout(() => {
                this.canvasopen = !this.canvasopen
            }, 200)
        },
        routehome() {
            this.$router.push({ path: '/'})
        },
        logout() {
        },
        checkvis(item) {
            return item === this.$route.name
        },
    },
}
</script>
<style lang="sass" scoped>
.navbar-con, .navbar-left, .navbar-right
    display: flex
    flex-direction: row
    background-color: transparent
    z-index: 200
    a
        color: $font
        text-transform: uppercase
        margin-right: 20px
.navbar-left
    align-items: center
    justify-content: flex-start
    width: 600px
    .navh4
        margin: 0
        color: $primary
        opacity: 0.5
.navbar-con
    position: fixed
    width: 100%
    top: 0
    z-index: 200
    opacity: 0.9
    background-color: white
    border-bottom: 1px solid lighten($font, 60)
    height: $navbar-height
.navbar-right
    align-items: center
    justify-content: flex-end
    width: 100%
    margin-right: 20px
    @media (min-width: 0px) and (max-width: 980px)
        display: none
.logo-con
    height: 80px
    display: flex
    align-items: center
    cursor: pointer
    margin-left: 15px
    @media (min-width: 0px) and (max-width: 520px)
        height: 60px
    &:hover
        opacity: 0.8
    img
        height: 50px
        width: 50px
.active-route
    display: flex
    flex-direction: column
    &:after
        content: ''
        width: 10px
        height: 2px
        background-color: $primary
        position: relative
        top: 2px
        right: 2px
.inactive-route
    display: flex
    flex-direction: column
    &:hover
        &:after
            content: ''
            width: 10px
            height: 2px
            background-color: lighten($primary, 20)
            position: relative
            top: 2px
            right: 2px
    &:after
        content: ''
        width: 10px
        height: 2px
        background-color: white
        position: relative
        top: 2px
        right: 2px
</style>