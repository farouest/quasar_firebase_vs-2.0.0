<template>
<<<<<<< HEAD
<q-page padding>
    <q-list class="q-mb-md" bordered padding>
        <q-item-label header>Paramètre</q-item-label>

        <q-item tag="label" v-ripple>
            <q-item-section>
                <q-item-label>Afficher le format horaire</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-toggle v-model="show12HourTimeFormat" color="blue" />
            </q-item-section>
        </q-item>

        <q-item tag="label" v-ripple>
            <q-item-section>
                <q-item-label>Show tasks in one list</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-toggle v-model="showTasksInOneList" color="blue" />
            </q-item-section>
        </q-item>
=======
  <q-page padding>
		<q-list
			class="q-mb-md"
			bordered
			padding>
		  <q-item-label header>Paramétre</q-item-label>

		  <q-item tag="label" v-ripple>
		    <q-item-section>
		      <q-item-label>Activer le format horaire</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-toggle
		      	v-model="show12HourTimeFormat"
		      	color="blue" />
		    </q-item-section>
		  </q-item>

		  <q-item tag="label" v-ripple>
		    <q-item-section>
		      <q-item-label>Activer vos informations en une liste</q-item-label>
		    </q-item-section>
		    <q-item-section side >
		      <q-toggle
		      	v-model="showTasksInOneList"
		      	color="blue" />
		    </q-item-section>
		  </q-item>
>>>>>>> f73a9c90db8a53bf6e9709e1763e643b1f013b62

    </q-list>

    <q-list bordered padding>
        <q-item-label header>++</q-item-label>

        <q-item to="/settings/help" tag="label" v-ripple>
            <q-item-section>
                <q-item-label>Aide</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-icon name="chevron_right" />
            </q-item-section>
        </q-item>

        <q-item @click="visitOurWebsite" tag="label" v-ripple>
            <q-item-section>
                <q-item-label>Site internet</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-icon name="chevron_right" />
            </q-item-section>
        </q-item>

        <q-item @click="emailUs" tag="label" v-ripple>
            <q-item-section>
                <q-item-label>Email</q-item-label>
            </q-item-section>
            <q-item-section side>
                <q-icon name="chevron_right" />
            </q-item-section>
        </q-item>

    </q-list>

</q-page>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
import {
    openURL
} from 'quasar'

export default {
    computed: {
        ...mapGetters('settings', ['settings']),
        show12HourTimeFormat: {
            get() {
                return this.settings.show12HourTimeFormat
            },
            set(value) {
                this.setShow12HourTimeFormat(value)
            }
        },
        showTasksInOneList: {
            get() {
                return this.settings.showTasksInOneList
            },
            set(value) {
                this.setShowTasksInOneList(value)
            }
        }
    },
    methods: {
        ...mapActions('settings', ['setShow12HourTimeFormat', 'setShowTasksInOneList']),
        visitOurWebsite() {
            openURL('http://www.google.com')
        },
        emailUs() {
            window.location.href = 'mailto:hello@awesometodo?subject=Awesome Todo Feedback'
        }
    }
}
</script>

<style>

</style>
