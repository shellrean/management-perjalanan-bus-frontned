<template>
<div class="container mx-auto">
    <div class="mt-10">
        <div class="max-w-7xl mx-auto mb-1 flex justify-between">
            <div>
                <router-link :to="{ name: 'Home' }" class="inline-block shadow-sm py-2 px-4 text-gray-500 bg-gray-100 rounded-t-md text-sm border-gray-200 border">Home</router-link>
                <button class="shadow-sm py-2 px-4 text-blue-500 bg-blue-100 rounded-t-md text-sm border-blue-200 border">Buat baru</button>
            </div>
            <div>
                <div class="flex items-center justify-center space-x-1 mt-2 mx-auto">
                    <a href="#" class="border-l border-t border-b border-gray-200 flex items-center px-4 py-1 text-gray-500 bg-gray-100 rounded-l-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                    </a>
                    <a href="#" class="border-r border-t border-b border-gray-200 px-4 py-1 text-gray-500 bg-gray-100 rounded-r-md hover:bg-blue-400 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
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
                              Nomor Plat
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Nomor Bus
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Distributor
                              </th>
                              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ukuran
                              </th>
                            <th scope="col" class="relative px-6 py-3">
                              <span class="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">1</div>
                              </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">B 9823 JKL</div>
                              <div class="text-sm text-gray-500">17-04-2024</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">9012-9991-0902</div>
                              </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">Scania AB</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">48 Kuris</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                                <a href="#" class="text-xs shadow-sm bg-gray-200 py-1 px-4 rounded-md text-gray-700 hover:text-indigo-900">Edit</a>
                                <a href="#" class="text-xs shadow-sm bg-gray-200 py-1 px-4 text-gray-700 rounded-md hover:text-indigo-900">Hapus</a>
                              </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">2</div>
                              </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">B 9823 JKL</div>
                              <div class="text-sm text-gray-500">17-04-2024</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">9012-9991-0902</div>
                              </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">Scania AB</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">48 Kuris</div>
                              </td>
                              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="#" class="text-xs shadow-sm bg-gray-200 py-1 px-4 rounded-md text-gray-700 hover:text-indigo-900">Edit</a>
                                <a href="#" class="text-xs shadow-sm bg-gray-200 py-1 px-4 text-gray-700 rounded-md hover:text-indigo-900">Hapus</a>
                              </td>
                          </tr>
                          <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">3</div>
                              </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">B 9823 JKL</div>
                              <div class="text-sm text-gray-500">17-04-2024</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">9012-9991-0902</div>
                              </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">Scania AB</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">48 Kuris</div>
                              </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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