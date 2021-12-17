<template>
<div class="container mx-auto">
    <div class="mt-10">
        <div class="max-w-7xl mx-auto mb-1 flex justify-between">
            <div>
                <router-link :to="{ name: 'Home' }" class="inline-block shadow-sm py-2 px-4 text-gray-500 bg-gray-100 rounded-t-md text-sm border-gray-200 border">Home</router-link>
                <button class="shadow-sm py-2 px-4 text-blue-500 bg-blue-100 rounded-t-md text-sm border-blue-200 border">Buat baru</button>
            </div>
            <div
            v-if="typeof rutes.data != 'undefined'"
            >
                <div class="flex items-center justify-center space-x-1 mt-2 mx-auto">
                    <button
                    :disabled="rutes.prev_page_url == null"
                    :class="{
                      'cursor-not-allowed': rutes.prev_page_url == null,
                      'hover:bg-blue-400 hover:text-white': rutes.prev_page_url != null
                    }"
                    @click="_fetchDataRutes(rutes.prev_page_url, null)" class="border-l border-t border-b border-gray-200 flex items-center px-4 py-1 text-gray-500 bg-gray-100 rounded-l-md">
                      Sebelumnya
                    </button>
                    <button
                    :disabled="rutes.next_page_url == null"
                    :class="{
                      'cursor-not-allowed': rutes.next_page_url == null,
                      'hover:bg-blue-400 hover:text-white': rutes.next_page_url != null
                    }"
                    @click="_fetchDataRutes(null, rutes.next_page_url)" class="border-r border-t border-b border-gray-200 px-4 py-1 text-gray-500 bg-gray-100 rounded-r-md">
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
                              Asal
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Tujuan
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Waktu tempuh
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr v-for="(rute, index) in rutes.data">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ rutes.from + index }}</div>
                              </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{ rute.kode }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ rute.asal }}</div>
                              </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{ rute.tujuan }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ rute.waktu_tempuh }} menit</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                                <a href="#" class="text-xs shadow-sm bg-gray-200 py-1 px-4 rounded-md text-gray-700 hover:text-indigo-900">Edit</a>
                                <a href="#" class="text-xs shadow-sm bg-gray-200 py-1 px-4 text-gray-700 rounded-md hover:text-indigo-900">Hapus</a>
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
    ...mapState('rute', ['rutes'])
  },
  methods: {
    ...mapActions('rute', ['fetchDataRutes']),
    async _fetchDataRutes(prev, next) {
      try {
        await this.fetchDataRutes({
          prev: prev,
          next: next
        })
      } catch (e) {
        alert(e)
      }
    }
  },
  created() {
    this._fetchDataRutes()
  }
}
</script>