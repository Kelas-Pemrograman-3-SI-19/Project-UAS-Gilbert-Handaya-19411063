<template>
<div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="form.namaDepan"
        label="Nama Depan"
        :rules="[ val => val && val.length > 0 || 'Mohon Masukkan Nama Depan']"
      />
      <q-input
        filled
        v-model="form.namaBelakang"
        label="Nama Depan"
        :rules="[ val => val && val.length > 0 || 'Mohon Isi Nama Depan']"
      />
      <q-input
        filled
        v-model="form.jenisKelamin"
        label="Jenis Kelamin"
        :rules="[ val => val && val.length > 0 || 'Mohon Isi Jenis Kelamin']"
      />
      <q-input
        filled
        v-model="form.hobi"
        label="Hobi"
        :rules="[ val => val && val.length > 0 || 'Mohon Isi Hobi Anda']"
      />
      <q-input
        filled
        v-model="form.universitas"
        label="Universitas"
        :rules="[ val => val && val.length > 0 || 'Mohon Isi Universitas Anda']"
      />
      <div>
        <q-btn label="Submit" type="submit" color="accent"/>
      </div>
    </q-form>

  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        namaDepan: null,
        namaBelakang: null,
        jenisKelamin: null,
        hobi: null,
        universitas: null
      }
    }
  },
  created () {
    this.$axios.get(`data/getbyid/${this.$route.params.id}`)
      .then(res => {
        this.form = res.data.result
      })
  },
  methods: {
    onSubmit () {
      this.$axios.put(`data/update/${this.$route.params.id}`, this.form)
        .then(res => {
          if (res.data.status) {
            this.$q.notify({
              message: res.data.pesan,
              color: 'positive'
            })
            this.$router.push({ name: 'dashboardAdmin' })
          } else {
            this.$q.notify({
              message: res.data.pesan,
              color: 'negative'
            })
          }
        })
    }
  }
}
</script>
