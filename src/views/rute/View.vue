<template>
<div class="container mx-auto">
    <div class="mt-10">
      <div class="max-w-3xl mx-auto shadow-md rounded-md ">
        <div class="py-4 px-8 bg-gray-50 border-b-2 flex items-center justify-between">
          <div>
            <p class="text-lg font-semibold text-gray-600">[{{ rute.kode }}] {{ rute.asal_provinsi}} - {{ rute.tujuan_provinsi }}</p>
            <p class="font-semibold text-gray-500">{{ convertToJamAndMinute(rute.waktu_tempuh) }}</p>
          </div>
          <div>
            <router-link :to="{ name: 'rute.index' }" class="py-1 px-3 block rounded-md bg-red-400 text-white font-semibold">x</router-link>
          </div>
        </div>
        <div class="py-12 px-8">
          <div class="flex items-stretch space-x-5 mb-4">
            <div class="w-32">
              <div class="text-sm px-4 rounded-xl bg-green-300 text-white">{{ rute.asal_tipe }}</div>
            </div>
            <div>
              <div class="w-4 h-4 rounded-full border-2 border-blue-400"></div>
              <div class="w-4 h-full rounded-full bg-blue-300"></div>
            </div>
            <div class="h-24">
              <p class="font-semibold text-gray-600">[{{ rute.asal_kode }}] {{rute.asal_nama}}</p>
            </div>
          </div>

          <div class="flex items-stretch space-x-5 mb-4" v-for="checkpoint in rute.checkpoints">
            <div class="w-32">
              <div class="text-sm px-4 rounded-xl bg-green-300 text-white">{{ checkpoint.terminal.tipe }}</div>
            </div>
            <div>
              <div class="w-4 h-4 rounded-full bg-yellow-300"></div>
              <div class="w-4 h-full rounded-full bg-blue-300"></div>
            </div>
            <div class="h-24">
              <p class="font-semibold text-gray-600">[{{ checkpoint.terminal.kode }}] {{checkpoint.terminal.nama}}</p>
              <p class="font-sm text-gray-600">Berhenti {{ checkpoint.waktu }} menit</p>
            </div>
          </div>

          <div class="flex items-stretch space-x-5">
            <div class="w-32">
              <div class="text-sm px-4 rounded-xl bg-green-300 text-white">{{ rute.tujuan_tipe }}</div>
            </div>
            <div>
              <div class="w-4 h-4 rounded-full border-2 border-blue-400"></div>
            </div>
            <div class="h-24">
              <p class="font-semibold text-gray-600">[{{ rute.tujuan_kode }}] {{rute.tujuan_nama}}</p>
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
        console.log(this.rute)
      } catch (e) {
        alert(e)
      }
    },
    convertToJamAndMinute(waktu) {
      let jam = Math.floor(waktu/60);
      let minute = waktu-(jam*60);
      if(jam > 0) {
        return `${jam} jam ${minute} menit`
      }
      return `${minute} menit`
    }
  },
  created() {
    this._getDataRute()
  }
}
</script>