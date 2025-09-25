// Тестовые данные по полетам для регионов
export const flightStats = {
    "77": { name: "Москва", flights: 1250, duration: 890, color: "#1e3a8a" },
    "78": { name: "Санкт-Петербург", flights: 980, duration: 720, color: "#3730a3" },
    "50": { name: "Московская область", flights: 1100, duration: 950, color: "#4338ca" },
    "54": { name: "Новосибирская область", flights: 650, duration: 580, color: "#6366f1" },
    "23": { name: "Краснодарский край", flights: 580, duration: 520, color: "#818cf8" },
    "66": { name: "Свердловская область", flights: 520, duration: 480, color: "#a5b4fc" },
    "16": { name: "Татарстан", flights: 480, duration: 450, color: "#c7d2fe" },
    "61": { name: "Ростовская область", flights: 420, duration: 390, color: "#e0e7ff" },
    "24": { name: "Красноярский край", flights: 380, duration: 410, color: "#f3f4f6" },
    "63": { name: "Самарская область", flights: 350, duration: 320, color: "#f9fafb" },
};


function rnd(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
