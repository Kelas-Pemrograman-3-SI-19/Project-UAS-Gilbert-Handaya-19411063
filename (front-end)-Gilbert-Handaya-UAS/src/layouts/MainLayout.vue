<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-light-blue-10">
      <q-toolbar>
        <q-btn dense round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu"/>
        <q-space></q-space>
        <q-btn flat round>
          <q-avatar>
            <img src="https://upload.wikimedia.org/wikipedia/id/c/cc/Logo-ubl.png">
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section>Profile</q-item-section>
              </q-item>
              <q-item clickable @click="logout()" v-close-popup>
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="text-light-blue-10 bg-primary"
    >
      <q-scroll-area class="fit">
        <q-list separator>
          <q-item class="justify-center text-center q-mt-md">
            <div>
              <q-avatar size="80px">
                <img src="https://upload.wikimedia.org/wikipedia/id/c/cc/Logo-ubl.png">
              </q-avatar>
              <div class="text-weight-bold q-mt-md">{{ $q.localStorage.getItem('dataUser').username }}</div>
              <div>Students Data</div>
            </div>
          </q-item>

          <q-item clickable active-class="active" :to="{ name: 'dataUser' }" v-ripple exact>
            <q-item-section avatar>
                <q-icon name="supervisor_account"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>User Data</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" :to="{ name: 'inputUser' }" v-ripple exact>
            <q-item-section avatar>
                <q-icon name="supervisor_account"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Input Data</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" :to="{ name: 'dashboardAdmin' }" v-ripple exact>
            <q-item-section avatar>
                <q-icon name="supervisor_account"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Edit/Delete Data</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="bg-light-blue-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

// const linksData = []

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      this.$q.localStorage.remove()
      this.$router.push({ name: 'loginPage' })
    }
  }
}
</script>
<style scoped>
.active{
  color: #000000;
  background-color: #E1F5FE;
  padding-right: 10px;
}
</style>
