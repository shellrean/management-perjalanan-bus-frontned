<template>
  <div class="container mx-auto">
    <div class="mt-10">
        <div class="flex items-center justify-center space-x-4">
          <div class="grid grid-cols-2 gap-4">
            <router-link :to="{ name: 'bus.index' }" class="shadow-sm hover:shadow-lg bg-white border-2 border-blue-400 text-gray-900 px-14 py-6 rounded-md text-sm font-medium text-center bg-blue-100 hover:bg-blue-200">
              <img src="img/003.png" alt="" class="h-12 mb-2 mx-auto">
              <span class="text-xl font-semibold">BUS</span>
            </router-link>
            <a href="add_stock.html" class="shadow-sm hover:shadow-lg bg-white border-2 border-yellow-400 text-gray-900 px-14 py-6 rounded-md text-sm font-medium text-center bg-yellow-100 hover:bg-yellow-200">
              <img src="img/006.png" alt="" class="h-12 mb-2 mx-auto">
              <span class="text-xl font-semibold">SUPIR</span>
            </a>
            <a href="add_stock.html" class="shadow-sm hover:shadow-lg bg-white border-2 border-green-400 text-gray-900 px-14 py-6 rounded-md text-sm font-medium text-center bg-green-100 hover:bg-green-200">
              <img src="img/005.png" alt="" class="h-12 mb-2 mx-auto">
              <span class="text-xl font-semibold">JADWAL</span>
            </a>
            <a href="add_stock.html" class="shadow-sm hover:shadow-lg bg-white border-2 border-red-400 text-gray-900 px-14 py-6 rounded-md text-sm font-medium text-center bg-red-100 hover:bg-red-200">
              <img src="img/004.png" alt="" class="h-12 mb-2 mx-auto">
              <span class="text-xl font-semibold">RUTE</span>
            </a>
          </div>
        </div>
    </div>
  </div>
</template>