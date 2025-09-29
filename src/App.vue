<template>
  <div id="app">
      <div class="flex h-screen bg-gray-50">
        <!-- Боковое меню - улучшенное -->
        <aside class="w-64 bg-gradient-to-b from-blue-800 to-blue-900 text-white shadow-xl">
          <div class="p-6 border-b border-blue-700">
            <h2 class="text-xl font-bold">Аналитика БПЛА</h2>
          </div>
          <nav class="mt-6">
            <ul class="space-y-1 px-3">
              <li>
                <router-link to="/" class="flex items-center px-4 py-3 rounded-lg bg-blue-700 text-white shadow-sm transition-all duration-200">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                  Дашборд
                </router-link>
              </li>
              <li>
                <a href="#" class="flex items-center px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
                  </svg>
                  Загрузка данных
                </a>
              </li>
              <li>
                <router-link to="/history" class="flex items-center px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200">
                  <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  История
                </router-link>
              </li>
            </ul>
          </nav>
        </aside>

        <!-- Основная область -->
        <main class="flex-1 overflow-y-auto p-8">
          <!-- Заголовок с метриками -->
            <router-view />
        </main>
      </div>
  </div>
</template>

<script setup>

</script>