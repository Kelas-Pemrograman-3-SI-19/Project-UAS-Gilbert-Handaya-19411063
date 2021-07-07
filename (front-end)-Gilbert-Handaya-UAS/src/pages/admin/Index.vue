<template>
  <q-page padding>
  <q-table
      title="Data Diri"
      :data="data"
      :columns="columns"
      row-key="namaDepan"
    >
      <template v-slot:top-right>
        <q-btn
          icon="add_box"
          label="Input Data Diri"
          unelevated
          color="primary"
          :to="{ name:'inputData' }"
        />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="namaDepan" :props="props">
            {{ props.row.namaDepan }}
          </q-td>
          <q-td key="namaBelakang" :props="props">
            {{ props.row.namaBelakang }}
          </q-td>
          <q-td key="jenisKelamin" :props="props">
            {{ props.row.jenisKelamin }}
          </q-td>
          <q-td key="hobi" :props="props">
            {{ props.row.hobi }}
          </q-td>
          <q-td key="universitas" :props="props">
            {{ props.row.universitas }}
          </q-td>
          <q-td key="aksi" :props="props">
            <q-btn
              label = "Edit"
              icon = "edit"
              :to="{ name: 'edit', params: { id: props.row._id }}"
              color = "warning"
              unelevated
            />
            <q-btn
              label = "Hapus"
              icon = "delete"
              @click="confirm(props.row._id)"
              color = "negative"
              class = "q-ml-md"
              unelevated
            />
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'namaDepan',
          align: 'left',
          label: 'Nama Depan',
          field: 'namaDepan'
        },
        {
          name: 'namaBelakang',
          align: 'left',
          label: 'Nama Belakang',
          field: 'namaBelakang'
        },
        {
          name: 'jenisKelamin',
          align: 'left',
          label: 'Jenis Kelamin',
          field: 'jenisKelamin'
        },
        {
          name: 'hobi',
          align: 'left',
          label: 'Hobi',
          field: 'hobi'
        },
        {
          name: 'universitas',
          align: 'left',
          label: 'Universitas',
          field: 'universitas'
        },
        {
          name: 'aksi',
          align: 'left',
          label: 'Aksi',
          field: 'aksi'
        }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('data/getall')
        .then(res => {
          this.data = res.data.result
        })
    },
    confirm (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are You Sure?',
        color: 'accent',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.delete(`data/delete/${id}`)
          .then(res => {
            if (res.data.status) {
              this.$q.notify({
                message: res.data.pesan,
                color: 'positive'
              })
              this.getData()
            } else {
              this.$q.notify({
                message: res.data.pesan,
                color: 'negative'
              })
            }
          })
      })
    }
  }
}
</script>
