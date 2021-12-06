<template>
<div class="container mx-auto">
    <div class="mt-10">
        <div class="max-w-7xl mx-auto mb-1 flex justify-between">
            <div>
                <a href="../index.html" class="inline-block shadow-sm py-2 px-4 text-gray-500 bg-gray-100 rounded-t-md text-sm border-gray-200 border">Home</a>
                <button class="shadow-sm py-2 px-4 text-blue-500 bg-blue-100 rounded-t-md text-sm border-blue-200 border">Buat baru</button>
            </div>
            <div
            v-if="typeof supirs.data != 'undefined'"
            >
                <div class="flex items-center justify-center space-x-1 mt-2 mx-auto">
                    <button
                    :disabled="supirs.prev_page_url == null"
                    :class="{
                      'cursor-not-allowed': supirs.prev_page_url == null,
                      'hover:bg-blue-400 hover:text-white': supirs.prev_page_url != null
                    }"
                    @click="_fetchDataSupirs(supirs.prev_page_url, null)" class="border-l border-t border-b border-gray-200 flex items-center px-4 py-1 text-gray-500 bg-gray-100 rounded-l-md">
                      Sebelumnya
                    </button>
                    <button
                    :disabled="supirs.next_page_url == null"
                    :class="{
                      'cursor-not-allowed': supirs.next_page_url == null,
                      'hover:bg-blue-400 hover:text-white': supirs.next_page_url != null
                    }"
                    @click="_fetchDataSupirs(null, supirs.next_page_url)" class="border-r border-t border-b border-gray-200 px-4 py-1 text-gray-500 bg-gray-100 rounded-r-md">
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
                              Nomor Registrasi
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Nama
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Alamat
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              JK
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr v-for="(supir, index) in supirs.data">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ supirs.from+index }}</div>
                              </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{ supir.no_reg }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ supir.nama_lengkap }}</div>
                              </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">{{ supir.alamat }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{ _translateGender(supir.jk) }}</div>
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

import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('supir', ['supirs'])
  },
  methods: {
    ...mapActions('supir', ['fetchDataSupirs']),
    async _fetchDataSupirs(prev, next) {
      try {
         await this.fetchDataSupirs({
           prev: prev,
           next: next
         })
      } catch (e) {
        alert(e)
      }
    },
    _translateGender(gender) {
      if (gender == 'L') {
        return 'Laki-laki';
      } else if (gender == 'P') {
        return 'Perempuan';
      } else {
        return 'Unknown';
      }
    }
  },
  created() {
    this._fetchDataSupirs(null, null)
  }
}
</script>