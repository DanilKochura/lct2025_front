// Реалистичная симуляция статистики полетов для всех регионов России
export const generateRealisticStats = () => {
    // Базовые показатели в зависимости от типа региона
    const regionTypes = {
        metropolitan: { baseFlights: 800, variance: 400 }, // Москва, СПб
        industrial: { baseFlights: 300, variance: 200 },   // Промышленные регионы
        agricultural: { baseFlights: 150, variance: 100 }, // Аграрные регионы
        remote: { baseFlights: 50, variance: 80 }          // Отдаленные регионы
    };

    const stats = {
        // Центральный ФО - высокая активность
        "77": { name: "Москва", type: "metropolitan" },
        "50": { name: "Московская область", type: "industrial" },
        "31": { name: "Белгородская область", type: "agricultural" },
        "32": { name: "Брянская область", type: "agricultural" },
        "33": { name: "Владимирская область", type: "industrial" },
        "36": { name: "Воронежская область", type: "agricultural" },
        "37": { name: "Ивановская область", type: "agricultural" },
        "40": { name: "Калужская область", type: "industrial" },
        "44": { name: "Костромская область", type: "agricultural" },
        "46": { name: "Курская область", type: "agricultural" },
        "48": { name: "Липецкая область", type: "industrial" },
        "57": { name: "Орловская область", type: "agricultural" },
        "62": { name: "Рязанская область", type: "agricultural" },
        "67": { name: "Смоленская область", type: "agricultural" },
        "69": { name: "Тверская область", type: "agricultural" },
        "71": { name: "Тульская область", type: "industrial" },
        "76": { name: "Ярославская область", type: "industrial" },

        // Северо-Западный ФО
        "78": { name: "Санкт-Петербург", type: "metropolitan" },
        "47": { name: "Ленинградская область", type: "industrial" },
        "29": { name: "Архангельская область", type: "remote" },
        "35": { name: "Вологодская область", type: "industrial" },
        "39": { name: "Калининградская область", type: "industrial" },
        "51": { name: "Мурманская область", type: "remote" },
        "53": { name: "Новгородская область", type: "agricultural" },
        "60": { name: "Псковская область", type: "agricultural" },
        "83": { name: "Ненецкий автономный округ", type: "remote" },
        "86": { name: "Ханты-Мансийский автономный округ", type: "industrial" },
        "89": { name: "Ямало-Ненецкий автономный округ", type: "industrial" },

        // Южный ФО
        "23": { name: "Краснодарский край", type: "agricultural" },
        "61": { name: "Ростовская область", type: "agricultural" },
        "34": { name: "Волгоградская область", type: "agricultural" },
        "91": { name: "Крым", type: "agricultural" },
        "92": { name: "Севастополь", type: "industrial" },

        // Северо-Кавказский ФО
        "26": { name: "Ставропольский край", type: "agricultural" },
        "05": { name: "Дагестан", type: "agricultural" },
        "07": { name: "Кабардино-Балкария", type: "agricultural" },
        "09": { name: "Карачаево-Черкесия", type: "agricultural" },
        "10": { name: "Северная Осетия", type: "agricultural" },
        "20": { name: "Чеченская Республика", type: "industrial" },

        // Приволжский ФО
        "16": { name: "Татарстан", type: "industrial" },
        "63": { name: "Самарская область", type: "industrial" },
        "64": { name: "Саратовская область", type: "agricultural" },
        "12": { name: "Марий Эл", type: "agricultural" },
        "13": { name: "Мордовия", type: "agricultural" },
        "52": { name: "Нижегородская область", type: "industrial" },
        "56": { name: "Оренбургская область", type: "industrial" },
        "58": { name: "Пензенская область", type: "agricultural" },
        "59": { name: "Пермский край", type: "industrial" },
        "73": { name: "Ульяновская область", type: "industrial" },
        "80": { name: "Удмуртия", type: "industrial" },
        "81": { name: "Чувашия", type: "agricultural" },
        "84": { name: "Кировская область", type: "agricultural" },

        // Уральский ФО
        "66": { name: "Свердловская область", type: "industrial" },
        "72": { name: "Тюменская область", type: "industrial" },
        "45": { name: "Курганская область", type: "agricultural" },
        "74": { name: "Челябинская область", type: "industrial" },

        // Сибирский ФО
        "54": { name: "Новосибирская область", type: "industrial" },
        "24": { name: "Красноярский край", type: "industrial" },
        "04": { name: "Алтайский край", type: "agricultural" },
        "22": { name: "Алтай", type: "remote" },
        "38": { name: "Иркутская область", type: "industrial" },
        "42": { name: "Кемеровская область", type: "industrial" },
        "55": { name: "Омская область", type: "industrial" },
        "70": { name: "Томская область", type: "industrial" },
        "90": { name: "Хакасия", type: "agricultural" },

        // Дальневосточный ФО
        "25": { name: "Приморский край", type: "industrial" },
        "27": { name: "Хабаровский край", type: "industrial" },
        "28": { name: "Амурская область", type: "remote" },
        "41": { name: "Камчатский край", type: "remote" },
        "49": { name: "Магаданская область", type: "remote" },
        "65": { name: "Сахалинская область", type: "industrial" },
        "79": { name: "Еврейская автономная область", type: "remote" },
        "87": { name: "Чукотский автономный округ", type: "remote" },
        "14": { name: "Саха (Якутия)", type: "remote" },
        "85": { name: "Забайкальский край", type: "remote" }
    };

    // Генерируем реалистичные данные
    const result = {};

    for (const [code, info] of Object.entries(stats)) {
        const typeConfig = regionTypes[info.type];
        const base = typeConfig.baseFlights;
        const variance = typeConfig.variance;

        // Случайное отклонение ± variance
        const flights = Math.max(10, base + (Math.random() - 0.5) * variance * 2);

        // Длительность зависит от количества полетов и типа региона
        const avgDuration = 30 + Math.random() * 40; // 30-70 минут в среднем
        const totalDuration = (flights * avgDuration) / 60; // в часах

        result[code] = {
            name: info.name,
            flights: Math.round(flights),
            duration: Math.round(totalDuration * 10) / 10,
            avgDuration: Math.round(avgDuration),
            density: Math.round((flights / 100) * 10) / 10 // полетов на 1000 км²
        };
    }

    return result;
};

// Статистика за последний месяц
export const currentMonthStats = generateRealisticStats();