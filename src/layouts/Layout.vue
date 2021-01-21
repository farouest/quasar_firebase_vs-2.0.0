<template>
<q-layout view="hHh lpR fFf">
    <q-header elevated>
        <q-toolbar>

            <q-toolbar-title class="absolute-center">
<<<<<<< HEAD
                >--¨)°
=======
                >--°>
>>>>>>> f73a9c90db8a53bf6e9709e1763e643b1f013b62
            </q-toolbar-title>

            <q-btn v-if="!loggedIn" to="/auth" flat icon-right="account_circle" label="Login" class="absolute-right" />

            <q-btn v-else @click="logoutUser" flat icon-right="account_circle" label="Logout" class="absolute-right" />

        </q-toolbar>
    </q-header>

    <q-footer>
        <q-tabs>
            <q-route-tab v-for="nav in navs" :key="nav.label" :to="nav.to" :icon="nav.icon" :label="nav.label" />
        </q-tabs>
    </q-footer>

    <q-drawer v-model="leftDrawerOpen" :breakpoint="767" :width="250" bordered content-class="bg-primary">
        <q-list dark>
            <q-item-label header>Navigation</q-item-label>

            <q-item v-for="nav in navs" :key="nav.label" :to="nav.to" class="text-grey-4" exact clickable>
                <q-item-section avatar>
                    <q-icon :name="nav.icon" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{ nav.label }}</q-item-label>
                </q-item-section>
            </q-item>

        </q-list>
    </q-drawer>

    <q-page-container>
        <router-view />
    </q-page-container>
</q-layout>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
import {
    openURL
} from 'quasar'

export default {
    name: 'MyLayout',
    data() {
        return {
            leftDrawerOpen: this.$q.platform.is.desktop,
            navs: [{
<<<<<<< HEAD
                    label: 'Votre liste',
                    label: 'Vos infos perso',
=======
                    label: 'Todo',
>>>>>>> f73a9c90db8a53bf6e9709e1763e643b1f013b62
                    icon: 'list',
                    to: '/'
                },
                {
<<<<<<< HEAD
                    label: 'Paramètre',
=======
                    label: 'Settings',
>>>>>>> f73a9c90db8a53bf6e9709e1763e643b1f013b62
                    icon: 'settings',
                    to: '/settings'
                }
            ]
        }
    },
    computed: {
        ...mapState('auth', ['loggedIn'])
    },
    methods: {
        ...mapActions('auth', ['logoutUser']),
        openURL
    }
}
</script>

<style lang="scss">
@media screen and (min-width: 768px) {
    .q-footer {
        display: none;
    }
}

.q-drawer {
    .q-router-link--exact-active {
        color: white !important;
    }
}
</style>
