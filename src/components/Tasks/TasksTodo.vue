<template>
<transition appear enter-active-class="animated zoomIn" leave-active-class="animated zoomOut absolute-top">
    <div>
<<<<<<< HEAD
        <list-header v-if="!settings.showTasksInOneList" bgColor="bg-orange-4">Vos infos</list-header>
=======
        <list-header v-if="!settings.showTasksInOneList" bgColor="bg-orange-4">Vos souhaits</list-header>
>>>>>>> f73a9c90db8a53bf6e9709e1763e643b1f013b62

        <q-list separator bordered>

            <task v-for="(task, key) in tasksTodo" :key="key" :task="task" :id="key"></task>

        </q-list>
    </div>
</transition>
</template>

<script>
import {
    mapGetters
} from 'vuex'

export default {
    props: ['tasksTodo'],
    computed: {
        ...mapGetters('settings', ['settings'])
    },
    components: {
        'task': require('components/Tasks/Task.vue').default,
        'list-header': require('components/Shared/ListHeader.vue').default,
    }
}
</script>
