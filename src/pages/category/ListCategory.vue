<template>
  <q-page padding>
    <div class="row">
      <q-table title="Category" :rows="rows" :columns="columns" row-key="name" class="col-12">
        <template v-slot:top>
          <span class="text-h6"> Category</span>
          <q-space />
          <q-btn label="Add new" color="primary" />

        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-x-sm">
            <q-btn icon='mdi-pencil-outline' color="primary" dense>
              <q-tooltip>Edit</q-tooltip>
            </q-btn>
            <q-btn icon='mdi-delete-outline' color="negative" dense> <q-tooltip>Delete</q-tooltip></q-btn>

            <div class="my-table-details">
              {{ props.row.details }}
            </div>

          </q-td>

        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
const columns = [
  { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true },
  { name: 'actions', align: 'right', label: 'Actions', field: 'actions', sortable: true },
]
const rows = [
  {
    id: '123',
    name: 'Tenis'
  }
]
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageCategoryList',
  setup() {
    return {
      columns, rows
    }
  }
})

</script>
