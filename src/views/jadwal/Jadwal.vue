<template>
  <div class="container mx-auto">
    <div class="mt-10">
        <div class="max-w-7xl mx-auto flex justify-between">
            <div>
                <router-link :to="{ name: 'Home' }" class="inline-block shadow-sm py-2 px-4 text-gray-500 bg-gray-100 rounded-t-md text-sm border-gray-200 border">Home</router-link>
                <router-link :to="{ name: 'jadwal.add'}" class="inline-block shadow-sm py-2 px-4 text-blue-500 bg-blue-100 rounded-t-md text-sm border-blue-200 border">Buat baru</router-link>
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
                              Bus
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Supir
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Rute
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Berangkat
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr v-for="(jadwal, index) in jadwals.data" 
                          :class="getBackgroundRow(jadwal.status)">
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{ jadwals.from + index }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{ jadwal.bus_number }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">
                                [{{ jadwal.supir_no_reg }}] {{ jadwal.supir_nama_lengkap}}
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">
                                [{{ jadwal.rute_kode }}] <br /> Waktu tempuh {{ jadwal.rute_waktu_tempuh}}
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">
                                {{ jadwal.berangkat }}
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">
                                {{ jadwal.status }}
                              </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                              <router-link :to="{ name: 'jadwal.edit', params: {id: jadwal.id} }" class="text-xs shadow-sm bg-gray-200 py-1 px-4 rounded-md text-gray-700 hover:text-indigo-900 mr-1">Edit</router-link>
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
    ...mapState('jadwal', ['jadwals'])
  },
  methods: {
    ...mapActions('jadwal', ['fetchDataJadwals']),
    async _fetchDataJadwals(prev, next) {
      try {
        await this.fetchDataJadwals({
          prev: prev,
          next: next
        })
      } catch (e) {
        alert(e)
      }
    },
    getBackgroundRow(status) {
      if(status == 'CANCEL') {
        return 'bg-red-100';
      } else if(status == 'AAD') {
        return 'bg-green-100';
      }
      return '';
    }
  },
  created() {
    this._fetchDataJadwals(null, null)
  }
}
</script>