<template>
<div class="container mx-auto">
    <div class="mt-10">
        <div class="max-w-7xl mx-auto mb-1 flex justify-between">
            <div>
                <router-link :to="{name: 'Home' }" class="inline-block shadow-sm py-2 px-4 text-gray-500 bg-gray-100 rounded-t-md text-sm border-gray-200 border">Home</router-link>
                <router-link :to="{ name: 'terminal.add' }" class="inline-block shadow-sm py-2 px-4 text-blue-500 bg-blue-100 rounded-t-md text-sm border-blue-200 border">Buat baru</router-link>
            </div>
            <div
            v-if="typeof terminals.data != 'undefined'"
            >
                <div class="flex items-center justify-center space-x-1 mt-2 mx-auto">
                    <button
                    :disabled="terminals.prev_page_url == null"
                    :class="{
                      'cursor-not-allowed': terminals.prev_page_url == null,
                      'hover:bg-blue-400 hover:text-white': terminals.prev_page_url != null
                    }"
                    @click="_fetchDataTerminals(terminals.prev_page_url, null)" class="border-l border-t border-b border-gray-200 flex items-center px-4 py-1 text-gray-500 bg-gray-100 rounded-l-md">
                      Sebelumnya
                    </button>
                    <button
                    :disabled="terminals.next_page_url == null"
                    :class="{
                      'cursor-not-allowed': terminals.next_page_url == null,
                      'hover:bg-blue-400 hover:text-white': terminals.next_page_url != null
                    }"
                    @click="_fetchDataTerminals(null, terminals.next_page_url)" class="border-r border-t border-b border-gray-200 px-4 py-1 text-gray-500 bg-gray-100 rounded-r-md">
                      Selanjutnya
                    </button>
                </div>
            </div>
        </div>
        <div class="max-w-7xl mx-auto">
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              #
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Kode
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Nama
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Alamat
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Tipe
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr v-for="(terminal, index) in terminals.data">
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{ terminals.from+index }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{ terminal.kode }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{ terminal.nama }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{ terminal.alamat }}</div>
                              <div class="text-sm text-gray-500">{{ terminal.kecamatan }}, {{ terminal.kota }}, {{ terminal.provinsi}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{ terminal.tipe }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                              <router-link :to="{ name: 'terminal.edit', params: {id: terminal.id}}" class="mr-1 text-xs shadow-sm bg-gray-200 py-1 px-4 rounded-md text-gray-700 hover:text-indigo-900">Edit</router-link>
                              <button @click="_deleteTerminal(terminal.id)" class="text-xs shadow-sm bg-gray-200 py-1 px-4 text-gray-700 rounded-md hover:text-indigo-900">Hapus</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('terminal', ['terminals'])
  },
  methods: {
    ...mapActions('terminal', ['fetchDataTerminals', 'deleteTerminal']),
    async _fetchDataTerminals(prev, next) {
      try {
        await this.fetchDataTerminals({
          prev: prev,
          next: next
        })
      } catch (e) {
        alert(e)
      }
    },
    async _deleteTerminal(terminalId) {
      try {
        if (!confirm('Apakah anda yakin akan menghapus terminal ini?')) {
          return false
        }
        await this.deleteTerminal(terminalId)
        this._fetchDataTerminals(null, null)
      } catch (e) {
        alert(e)
      }
    }
  },
  created() {
    this._fetchDataTerminals(null, null)
  }
}
</script>