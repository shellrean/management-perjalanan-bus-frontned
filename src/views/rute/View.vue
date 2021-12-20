<template>
<div class="container mx-auto">
    <div class="mt-10">
      <div class="max-w-3xl mx-auto shadow-md rounded-md ">
        <div class="py-4 px-8 bg-gray-50 border-b-2 border-green-400 flex items-center justify-between">
          <div>
            <p class="text-lg font-semibold">({{ rute.kode }}) {{ rute.asal}} - {{ rute.tujuan }}</p>
            <p class="font-semibold text-gray-500">{{ rute.waktu_tempuh }} Menit</p>
          </div>
          <div>
            <router-link :to="{ name: 'rute.index' }" class="py-1 px-3 block rounded-md bg-red-400 text-white font-semibold">x</router-link>
          </div>
        </div>
        <div class="py-2 px-8">
          <div class="flex flex-col mt-4 space-y-4 mb-8">
            <div class="py-2 px-2 border-l-2 border-green-400 text-gray-600 bg-green-50 rounded-md" v-for="(ck, index) in rute.checkpoints">
              <div class="flex justify-between items-center">
                <div>
                  <p class="font-bold text-green-700 mb-2">{{ ck.terminal.nama }}</p>
                  <p class="font-bold text-green-700 mb-2 text-sm">{{ ck.waktu }} menit</p>
                </div>
                <div class="flex space-x-2">
                  <div class="py-1 px-1 rounded-md bg-pink-400 text-xs text-white font-semibold">{{ ck.terminal.tipe }}</div>
                  <div class="py-1 px-1 rounded-md bg-purple-400 text-xs text-white font-semibold">{{ ck.terminal.kode }}</div>
                </div>
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
  data() {
    return {
      rute: {}
    }
  },
  computed: {
    
  },
  methods: {
    ...mapActions('rute', ['getDataRute']),
    async _getDataRute() {
      try {
        let rute = await this.getDataRute(this.$route.params.id)
        this.rute = rute
      } catch (e) {
        alert(e)
      }
    }
  },
  created() {
    this._getDataRute()
  }
}
</script>