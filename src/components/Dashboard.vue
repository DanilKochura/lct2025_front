<template>
  <div className="flex h-screen bg-gray-100">
    <!-- Боковое меню -->
    <aside className="w-55 bg-blue-800 text-white shadow-lg">
      <nav className="mt-8">
        <ul className="space-y-2">
          <li><a href="#" className="block px-4 py-2 hover:bg-blue-700">Дашборд</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-blue-700">Загрузка данных</a></li>
          <li><a href="#" className="block px-4 py-2 hover:bg-blue-700">История</a></li>
          <!--                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-700"></a></li>-->
        </ul>
      </nav>
    </aside>

    <!-- Основная область -->
    <main className="flex-1 overflow-y-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Аналитика полетов БПЛА</h1>

      <!-- Фильтры -->
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex gap-4">
          <input type="date" v-model="filters.startDate" className="border rounded px-3 py-2">
          <input type="date" v-model="filters.endDate" className="border rounded px-3 py-2">
          <button
              @click="applyFilters" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Применить
          </button>
        </div>
      </div>

      <!--            &lt;!&ndash; Карточки с метриками &ndash;&gt;-->
      <!--            <div className="grid grid-cols-4 gap-4 mb-6">-->
      <!--                <div className="bg-white p-4 rounded-lg shadow text-center">-->
      <!--                    <div className="text-2xl font-bold text-blue-600">{{totalFlights}}</div>-->
      <!--                    <div className="text-gray-600">Всего полетов</div>-->
      <!--                </div>-->
      <!--                <div className="bg-white p-4 rounded-lg shadow text-center">-->
      <!--                    <div className="text-2xl font-bold text-green-600">{{totalDuration}} ч</div>-->
      <!--                    <div className="text-gray-600">Общая длительность</div>-->
      <!--                </div>-->
      <!--                <div className="bg-white p-4 rounded-lg shadow text-center">-->
      <!--                    <div className="text-2xl font-bold text-purple-600">{{avgDuration}} мин</div>-->
      <!--                    <div className="text-gray-600">Средняя длительность</div>-->
      <!--                </div>-->
      <!--                <div className="bg-white p-4 rounded-lg shadow text-center">-->
      <!--                    <div className="text-2xl font-bold text-red-600">{{zeroActivityDays}}</div>-->
      <!--                    <div className="text-gray-600">Дней без полетов</div>-->
      <!--                </div>-->
      <!--            </div>-->

      <!-- Карта -->
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Карта полетной активности</h2>
        <RussiaMap v-if="loaded" :region-stats="regionStats" @region-click="handleRegionClick" :flights-data="flightsData" :regions="regions"/>
      </div>

      <!-- Графики -->
      <div className="grid grid-cols-1 gap-6">
        <BarChart :data="chartData.topByCount" title="Топ регионов по количеству полетов"/>
        <BarChart :data="chartData.topByDuration" title="Топ регионов по длительности полетов"/>
        <LineChart :data="chartData.byHour" title="Активность по времени суток"/>
        <LineChart :data="chartData.timeseries" title="Динамика полетов по дням"/>
      </div>



    </main>
  </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue'
import RussiaMap from './RussiaMap.vue'
import BarChart from './Charts/BarChart.vue'
import LineChart from './Charts/LineChart.vue'
import {flightStats} from '../data/testData.js'
import {flights} from "@/data/flightsData.js";

const filters = ref({
  startDate: '2024-01-01',
  endDate: '2024-01-31'
})

onMounted(() => {
  loadRegions()
})
const loaded = ref(false)
function rnd(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Вычисляемые метрики
const totalFlights = computed(() => Object.values(regionStats.value).reduce((sum, r) => sum + r.flights, 0))
const totalDuration = computed(() => Object.values(regionStats.value).reduce((sum, r) => sum + r.duration, 0))
const avgDuration = computed(() => Math.round(totalDuration.value / totalFlights.value))
const zeroActivityDays = computed(() => 3) // Заглушка


// Данные для графиков
const chartData = computed(() => ({
  topByCount: {
    labels: Object.values(regionStats.value).sort(function(a, b) {
      return parseFloat(b.flights) - parseFloat(a.flights);
    }).map(r => r.name).slice(0, 15),
    datasets: [{
      label: 'Количество полетов',
      data: Object.values(regionStats.value).sort(function(a, b) {
        return parseFloat(b.flights) - parseFloat(a.flights);
      }).map(r => r.flights).slice(0, 15),
      backgroundColor: '#3b82f6'
    }]
  },
  topByDuration: {
    labels: Object.values(regionStats.value).sort(function(a, b) {
      return parseFloat(b.duration) - parseFloat(a.duration);
    }).map(r => r.name).slice(0, 15),
    datasets: [{
      label: 'Длительность (часы)',
      data: Object.values(regionStats.value).sort(function(a, b) {
        return parseFloat(b.duration) - parseFloat(a.duration);
      }).map(r => r.duration).slice(0, 15),
      backgroundColor: '#10b981'
    }]
  },
  byHour: {
    labels: Array.from({length: 24}, (_, i) => i + ':00'),
    datasets: [{
      label: 'Полетов в час',
      data: Array.from({length: 24}, () => Math.floor(Math.random() * 50)),
      borderColor: '#8b5cf6',
      tension: 0.1
    }]
  },
  timeseries: {
    labels: Array.from({length: 31}, (_, i) => i + 1 + ' янв'),
    datasets: [{
      label: 'Полетов в день',
      data: Array.from({length: 31}, () => Math.floor(Math.random() * 100)),
      borderColor: '#ef4444',
      tension: 0.1
    }]
  }
}))

const flightsData = ref({
  meta: {
    source_excel: "2025.xlsx",
    sheet: "Result_1",
    parsed_rows: 76902,
    generated_at: "2025-09-24T07:56:39.645875Z"
  },
  flights: [] // Ваш массив полетов
})

const regions = ref({})

const completedFlights = computed(() =>
    flightsData.value.flights.filter(f => f.duration_min).length
)

const uniqueUAVTypes = computed(() =>
    new Set(flightsData.value.flights.map(f => f.uav_type)).size
)

const flightCenters = computed(() =>
    new Set(flightsData.value.flights.map(f => f.center_name)).size
)

const regionStats = ref({})
const handleRegionClick = (region) => {
  console.log('Выбран регион:', region.properties.name)
  // Можно добавить логику фильтрации по региону
}

const loadRegions = async () => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/russia.geojson')
    const data = await response.json()
    regions.value = data.features


    flightsData.value = flights

    let object = {}
    for (let i = 0; i < 83; i++) {
      object[i] = {flights: rnd(1, 800), duration: rnd(0, 1500), avgDuration: rnd(1, 200), name: data.features[i].properties.name}
      // try {
      // } catch (e) {
      //   console.error(e)
      // }
    }
    // console.log(object)
    // console.log(data.features)
    regionStats.value = object


    // console.log(Object.values(regionStats.value).sort(function(a, b) {
    //   return parseFloat(a.flights) - parseFloat(b.flights);
    // }))

    loaded.value = true
  } catch (error) {
    console.error('Ошибка загрузки регионов:', error)
  }
}
function applyFilters() {
  console.log('Фильтры применены:', filters.value)
  // Здесь будет запрос к API
}
</script>