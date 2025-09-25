export const flights = {
    "meta": {
        "source_excel": "2025.xlsx",
        "sheet": "Result_1",
        "parsed_rows": 76902,
        "generated_at": "2025-09-24T07:56:39.645875Z",
        "regions_loaded": false,
        "regions_source": null
    },
    "flights": [
        {
            "sid": "7772187998",
            "center_name": "Санкт-Петербургский",
            "uav_type": "SHAR",
            "operator": null,
            "regs": null,
            "region": 1,
            "dep": {
                "date": "2025-02-01",
                "time_hhmm": "0705",
                "lat": 59.95,
                "lon": 29.083333333333332,
                "raw": "-TITLE IDEP\n-SID 7772187998\n-ADD 250201\n-ATD 0705\n-ADEP ZZZZ\n-ADEPZ 5957N02905E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": null,
                "time_hhmm": null,
                "lat": null,
                "lon": null,
                "raw": NaN,
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0705\n-K0300M3000\n-DEP/5957N02905E DOF/250201 OPR/МАЛИНОВСКИЙ НИКИТА АЛЕКСАНДРОВИ4\n+79313215153 TYP/SHAR RMK/ОБОЛО4КА 300 ДЛЯ ЗОНДИРОВАНИЯ АТМОСФЕРЫ\nSID/7772187998)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0705",
                "window_end_hhmm": null
            },
            "start_ts": "2025-02-01T07:05:00",
            "end_ts": null,
            "duration_min": null
        },
        {
            "sid": "7772251137",
            "center_name": "Ростовский",
            "uav_type": "BLA",
            "region": 1,
            "operator": null,
            "regs": [
                "00724",
                "REG00725"
            ],
            "dep": {
                "date": "2025-01-24",
                "time_hhmm": "0600",
                "lat": 44.14611111111111,
                "lon": 43.14138888888889,
                "raw": "-TITLE IDEP\n-SID 7772251137\n-ADD 250124\n-ATD 0600\n-ADEP ZZZZ\n-ADEPZ 440846N0430829E\n-PAP 0\n",
                "region": null
            },
            "arr": {
                "date": "2025-01-24",
                "time_hhmm": "1250",
                "lat": 44.14611111111111,
                "lon": 43.14138888888889,
                "raw": "-TITLE IARR\n-SID 7772251137\n-ADA 250124\n-ATA 1250\n-ADARR ZZZZ\n-ADARRZ 440846N0430829E\n-PAP 0\n",
                "region": null
            },
            "shr": {
                "raw": "(SHR-00725\n-ZZZZ0600\n-M0000/M0005 /ZONA R0,5 4408N04308E/\n-ZZZZ0700\n-DEP/4408N04308E DEST/4408N04308E DOF/250124 OPR/ГУ М4С РОССИИ ПО\nСТАВРОПОЛЬСКОМУ КРАЮ REG/00724,REG00725 STS/SAR TYP/BLA RMK/WR655 В\nЗОНЕ ВИЗУАЛЬНОГО ПОЛЕТА СОГЛАСОВАНО С ЕСОРВД РОСТОВ ПОЛЕТ БЛА В\nВП-С-М4С МОНИТОРИНГ ПАВОДКООПАСНЫХ У4АСТКОВ РАЗРЕШЕНИЕ 10-37/9425\n15.11.2024 АДМИНИСТРАЦИЯ МИНЕРАЛОВОДСКОГО МУНИЦИПАЛЬНОГО ОКРУГА\nОПЕРАТОР ЛЯХОВСКАЯ +79283000251 ЛЯПИН +79620149012 SID/7772251137)",
                "zone_radius_nm": 0.5,
                "zone_center_lat": 44.13333333333333,
                "zone_center_lon": 43.13333333333333,
                "window_start_hhmm": "0600",
                "window_end_hhmm": "0700"
            },
            "start_ts": "2025-01-24T06:00:00",
            "end_ts": "2025-01-24T12:50:00",
            "duration_min": 410
        },
        {
            "sid": "7772251311",
            "center_name": "Новосибирский",
            "uav_type": "BLA",
            "operator": null,
            "region": 2,
            "regs": [
                "RF37362"
            ],
            "dep": {
                "date": "2025-01-23",
                "time_hhmm": "0402",
                "lat": 51.86666666666667,
                "lon": 86.0,
                "raw": "-TITLE IDEP\n-SID 7772251311\n-ADD 250123\n-ATD 0402\n-ADEP ZZZZ\n-ADEPZ 5152N08600E\n-PAP 0\n-REG RF37362",
                "region": null
            },
            "arr": {
                "date": "2025-01-23",
                "time_hhmm": "0902",
                "lat": 51.86666666666667,
                "lon": 86.0,
                "raw": "-TITLE IARR\n-SID 7772251311\n-ADA 250123\n-ATA 0902\n-ADARR ZZZZ\n-ADARRZ 5152N08600E\n-PAP 0\n-REG RF37362",
                "region": null
            },
            "shr": {
                "raw": "(SHR-RF37362\n-ZZZZ0400\n-M0000/M0080 /ZONA R002 5152N08600E/\n-ZZZZ1100\n-DEP/5152N08600E DEST/5152N08600E DOF/250123 EET/UNNT0000 OPR/МВД ПО\nРЕСПУБЛИКЕ АЛТАЙ REG/RF37362 TYP/BLA RMK/ПОЛЕТ БВС В СООТВЕТСТВИИ С\nП.В СТ.114 ФП ИВП РЕШЕНИЕ ПРИНЯЛ НА4АЛЬНИК ЦИТСИЗИ МВД ПО РЕСПУБЛИКЕ\nАЛТАЙ ПОДПОЛКОВНИК ВНУТРЕННЕЙ СЛУЖБЫ ОПЕРАТОР БВС ХМЕЛЕВ А.А.\n+79139986050 SID/7772251311)",
                "zone_radius_nm": 2.0,
                "zone_center_lat": 51.86666666666667,
                "zone_center_lon": 86.0,
                "window_start_hhmm": "0400",
                "window_end_hhmm": "1100"
            },
            "start_ts": "2025-01-23T04:02:00",
            "end_ts": "2025-01-23T09:02:00",
            "duration_min": 300
        },
        {
            "sid": "7772251691",
            "center_name": "Екатеринбургский",
            "uav_type": "AER",
            "operator": "МАЕВСКИЙ",
            "regs": [
                "0938G"
            ],
            "dep": {
                "date": "2025-01-11",
                "time_hhmm": "1000",
                "lat": null,
                "lon": null,
                "raw": "-TITLE IDEP\n-SID 7772251691\n-ADD 250111\n-ATD 1000",
                "region": null
            },
            "arr": {
                "date": "2025-01-11",
                "time_hhmm": "1712",
                "lat": 56.766666666666666,
                "lon": 62.03333333333333,
                "raw": "-TITLE IARR\n-SID 7772251691\n-ADA 250111\n-ATA 1712\n-ADARR ZZZZ\n-ADARRZ 5646N06202E\n-PAP 0\n-REG 0938G",
                "region": null
            },
            "shr": {
                "raw": "(SHR-0938G\n-ZZZZ1000\n-M0000/M0005 /ZONA 5646N06202E 5646N06203E 5647N06203E 5647N06202E\n5646N06202E/\n-ZZZZ0300\n-DEP/5646N06202E DEST/5646N06202E DOF/250111 EET/USSV0001\nOPR/МАЕВСКИЙ ИВАН СЕРГЕЕВИ4 REG/RA-0938G TYP/AER RMK/РАЗРЕШЕНИЕ\nБОГДАНОВИ4А N-16 ОТ 20.12 2024 . ТО4НЫЕ КООРДИНАТЫ 564630N 0620220E .\nПОДЬЕМЫ АЭРОСТАТА НА ПРИВЯЗИ, НЕ ВЫШЕ 50 МЕТРОВ ОТ САМОЙ ВЫСОКОЙ\nТО4КИ АЭРОСТАТА ОТ ЗЕМЛИ, ПОДБОР ОБЕСПЕ4ИВАЕТСЯ ГРУППОЙ\nСОПРОВОЖДЕНИЯ. МАЕВСКИЙ ИВАН СЕРГЕЕВИ4 +7 902 2 610 610 SID/7772251691)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "1000",
                "window_end_hhmm": "0300"
            },
            "start_ts": "2025-01-11T10:00:00",
            "end_ts": "2025-01-11T17:12:00",
            "duration_min": 432
        },
        {
            "sid": "7772260026",
            "center_name": "Московский",
            "uav_type": "BLA",
            "operator": null,
            "regs": [
                "RF-37204"
            ],
            "dep": {
                "date": "2025-01-08",
                "time_hhmm": "2008",
                "lat": 55.8,
                "lon": 37.5,
                "raw": "-TITLE IDEP\n-SID 7772260026\n-ADD 250108\n-ATD 2008\n-ADEP ZZZZ\n-ADEPZ 5548N03730E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-08",
                "time_hhmm": "2109",
                "lat": 55.8,
                "lon": 37.5,
                "raw": "-TITLE IARR\n-SID 7772260026\n-ADA 250108\n-ATA 2109\n-ADARR ZZZZ\n-ADARRZ 5548N03730E\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ1900\n-M0020/M0025 /ZONA KO02/\n-ZZZZ0600\n-DEP/5548N03730E DEST/5548N03730E DOF/250108 EET/UUEE0001 OPR/ОТДЕЛ\nПРИМЕНЕНИЯ БАС УЭР ЦУКС ГЛАВНОГО УПРАВЛЕНИЯ М4С РОССИИ ПО Г МОСКВЕ\nREG/RF-37204, RF-37018, RF-18916, RF-18915, RF-37205, RF-37018\nSTS/FFR TYP/BLA RMK/ВРУБЕЛЯ 1, 554819N0373011E, РАДИУС: 0,2 KM,\nГЛАВНОЕ УПРАВЛЕНИЕ М4С РОССИИ ПО Г. МОСКВЕ, ПРОШУ ВАС СОГЛАСОВАТЬ\nОГРАНИ4ЕНИЕ ВОЗДУШНОГО ПРОСТРАНСТВА В ЦЕЛЯХ ПРОВЕДЕНИЯ МОНИТОРИНГА\nПОЖАРА, ФАЛКА ВАЛЕРИЙ ВЛАДИМИРОВИ4 89533200531, ПРОКОФЬЕВ АЛЕКСАНДР\nВАЛЕНТИНОВИ4 89268199685, САЗОНОВ ДМИТРИЙ АЛЕКСАНДРОВИ4 89199945433,\nАЛЕКСЕЕНКО ИЛЬЯ ВИКТОРОВИ4 89999941571, СОГЛАСОВАНИЕ В ДЕНЬ ПОЛЕТОВ,\nМОСКОВСКИМ РЦ ЕС ОРВД: 84954367050, С ДЕЖУРНОЙ 4АСТЬ ФСО 84959102256,\nSID/7772260026)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "1900",
                "window_end_hhmm": "0600"
            },
            "start_ts": "2025-01-08T20:08:00",
            "end_ts": "2025-01-08T21:09:00",
            "duration_min": 61
        },
        {
            "sid": "7772263241",
            "center_name": "Санкт-Петербургский",
            "uav_type": "AER",
            "operator": null,
            "regs": [
                "RA2411G"
            ],
            "dep": {
                "date": "2025-01-05",
                "time_hhmm": "1205",
                "lat": 59.583333333333336,
                "lon": 29.583333333333332,
                "raw": "-TITLE IDEP\n-SID 7772263241\n-ADD 250105\n-ATD 1205\n-ADEP ZZZZ\n-ADEPZ 5935N02935E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-05",
                "time_hhmm": "1328",
                "lat": 59.63333333333333,
                "lon": 29.766666666666666,
                "raw": "-TITLE IARR\n-SID 7772263241\n-ADA 250105\n-ATA 1328\n-ADARR ZZZZ\n-ADARRZ 5938N02946E\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-RA2411G\n-ZZZZ1100\n-M0000/M0029 /ZONA 5943N02942E 5944N02946E 5943N02949E 5943N02952E\n5941N02952E 5939N02953E 5936N02955E 5933N02951E 5929N02939E\n5928N02934E 5929N02929E 5932N02927E 5939N02924E 5941N02930E\n5942N02934E 5942N02937E 5943N02942E/\n-ZZZZ0240\n-DEP/5935N02935E DEST/5938N02946E DOF/250105 OPR/НИКИТИН СЕРГЕЙ\nНИКОЛАЕВИ4 REG/RA2411G TYP/AER RMK/+79219889710\nПОЛЕТ В ПРЕДЕЛАХ КЛАССА G\nВЗЛЕТ И ПОСАДКА ВНЕ НАСЕЛЕННЫХ ПУНКТОВ SID/7772263241)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "1100",
                "window_end_hhmm": "0240"
            },
            "start_ts": "2025-01-05T12:05:00",
            "end_ts": "2025-01-05T13:28:00",
            "duration_min": 83
        },
        {
            "sid": "7772266363",
            "center_name": "Красноярский",
            "uav_type": "BLA",
            "operator": "БЕСПИЛОТНЫЕ",
            "regs": [
                "001P047"
            ],
            "dep": {
                "date": "2025-01-17",
                "time_hhmm": "0300",
                "lat": 69.4,
                "lon": 88.0,
                "raw": "-TITLE IDEP\n-SID 7772266363\n-ADD 250117\n-ATD 0300\n-ADEP ZZZZ\n-ADEPZ 6924N08800E\n-PAP 0\n-REG 001P047",
                "region": null
            },
            "arr": {
                "date": null,
                "time_hhmm": null,
                "lat": null,
                "lon": null,
                "raw": NaN,
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0300\n-M0030/M0040 /ZONA WR273/\n-ZZZZ0800\n-DEP/6924N08800E DEST/6924N08800E DOF/250117 EET/UNKL0001\nOPR/БЕСПИЛОТНЫЕ ТЕХНОЛОГИИ REG/001P047 TYP/BLA RMK/WR273 NORILSK 2504\nPERM/AP232 RAZRESHENIE DEPARTAMENTA BEZOPASNOSTI ZF PAO GMK\nNORILSKIJ NIKEL N УБО-БВС/24-294 ОТ 27.12.2024 SHR RAZRABOTAL\nRADCHIKOV A.N. 89231910061 TEL. VNESHNEGO PILOTA BLA SHEPEL D.V.\n89994950094 SID/7772266363)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0300",
                "window_end_hhmm": "0800"
            },
            "start_ts": "2025-01-17T03:00:00",
            "end_ts": null,
            "duration_min": null
        },
        {
            "sid": "7772266381",
            "center_name": "Красноярский",
            "uav_type": "BLA",
            "operator": "БЕСПИЛОТНЫЕ",
            "regs": [
                "0010P42"
            ],
            "dep": {
                "date": "2025-01-17",
                "time_hhmm": "0300",
                "lat": 69.38333333333334,
                "lon": 88.18333333333334,
                "raw": "-TITLE IDEP\n-SID 7772266381\n-ADD 250117\n-ATD 0300\n-ADEP ZZZZ\n-ADEPZ 6923N08811E\n-PAP 0\n-REG 0010P42",
                "region": null
            },
            "arr": {
                "date": "2025-01-17",
                "time_hhmm": "0900",
                "lat": 69.38333333333334,
                "lon": 88.18333333333334,
                "raw": "-TITLE IARR\n-SID 7772266381\n-ADA 250117\n-ATA 0900\n-ADARR ZZZZ\n-ADARRZ 6923N08811E\n-PAP 0\n-REG 0010P42",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0300\n-M0030/M0060 /ZONA MR09032/\n-ZZZZ0600\n-DEP/6923N08811E DEST/6923N08811E DOF/250117 EET/UNKL0001\nOPR/БЕСПИЛОТНЫЕ ТЕХНОЛОГИИ REG/0010P42 TYP/BLA RMK/MR09032 NORILSK\n2504 PERM/AP232 RAZRESHENIE DEPARTAMENTA BEZOPASNOSTI ZF PAO GMK\nNORILSKIJ NIKEL N УБО-БВС/24-294 ОТ 27.12.2024 SHR RAZRABOTAL\nRADCHIKOV A.N. 89231910061 TEL. VNESHNEGO PILOTA BLA SHEPEL D.V.\n89994950094 SID/7772266381)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0300",
                "window_end_hhmm": "0600"
            },
            "start_ts": "2025-01-17T03:00:00",
            "end_ts": "2025-01-17T09:00:00",
            "duration_min": 360
        },
        {
            "sid": "7772268393",
            "center_name": "Тюменский",
            "uav_type": "2BLA",
            "operator": "ООО",
            "regs": [
                "0J02194",
                "00Q2171"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0030",
                "lat": 61.166666666666664,
                "lon": 69.95,
                "raw": "-TITLE IDEP\n-SID 7772268393\n-ADD 250101\n-ATD 0030\n-ADEP ZZZZ\n-ADEPZ 6110N06957E\n-PAP 0\n-REG 0J02194 00Q2171",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1035",
                "lat": 61.166666666666664,
                "lon": 69.95,
                "raw": "-TITLE IARR\n-SID 7772268393\n-ADA 250101\n-ATA 1035\n-ADARR ZZZZ\n-ADARRZ 6110N06957E\n-PAP 0\n-REG 0J02194 00Q2171",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0030\n-M0028/M0040 /ZONA 6111N06945E 6114N06952E 6112N06959E 6108N07002E\n6105N07003E 6108N06946E 6111N06945E/\n-ZZZZ2329\n-DEP/6110N06957E DEST/6110N06957E DOF/250101 EET/USTV0001 USHH0001\nOPR/ООО ФИНКО REG/0J02194 00Q2171 TYP/2BLA RMK/WR16568 ZENKOWO BEZ\nSRO BWS SUPERCAM S350 GT WZL 6110N06957E GT POS 6110N06957EH IST 0\n350 M H ABS 0 400 M R 1000 M W ZONE H POL IST 250 350 M H POL ABS 280\n400 M POLETY NAD NASELENNYMI PUNKTAMI NE PREDUSMOTRENY CELX\nMONITORING TRUBOPROWODA SHR RAZRABOTAL PRP OOO FINKO ELYSHEWA TEL\n89829906599 WZAIMODEJSTWIE S ORGANAMI OWD OSUQESTWLIAET WNESHNIJ\nPILOT BWS СИМОНОВ TEL 89641837292 SID/7772268393)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0030",
                "window_end_hhmm": "2329"
            },
            "start_ts": "2025-01-01T00:30:00",
            "end_ts": "2025-01-01T10:35:00",
            "duration_min": 605
        },
        {
            "sid": "7772268398",
            "center_name": "Тюменский",
            "uav_type": "2BLA",
            "operator": "ООО",
            "regs": [
                "0J02194",
                "00Q2171"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0030",
                "lat": 60.81666666666667,
                "lon": 69.61666666666666,
                "raw": "-TITLE IDEP\n-SID 7772268398\n-ADD 250101\n-ATD 0030\n-ADEP ZZZZ\n-ADEPZ 6049N06937E\n-PAP 0\n-REG 0J02194 00Q2171",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1035",
                "lat": 60.81666666666667,
                "lon": 69.61666666666666,
                "raw": "-TITLE IARR\n-SID 7772268398\n-ADA 250101\n-ATA 1035\n-ADARR ZZZZ\n-ADARRZ 6049N06937E\n-PAP 0\n-REG 0J02194 00Q2171",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0030\n-M0033/M0040 /ZONA 6048N06910E 6049N06917E 6049N06925E 6053N06930E\n6052N06942E 6053N06947E 6056N06946E 6055N07001E 6054N07001E\n6049N06956E 6052N06954E 6042N06914E 6048N06910E/\n-ZZZZ2329\n-DEP/6049N06937E DEST/6049N06937E DOF/250101 EET/USTV0001 USHH0001\nOPR/ООО ФИНКО REG/0J02194 00Q2171 TYP/2BLA RMK/WR16567 DOBRINSKIJ BEZ\nSRO BWS SUPERCAM S350 GT WZL 6049N06937E GT POS 6049N06937E H IST 0\n350 M H ABS 0 400 M R 500 M W ZONE H POL IST 300 350 M H POL ABS 330\n400 M POLETY NAD NASELENNYMI PUNKTAMI NE PREDUSMOTRENY CELX\nMONITORING TRUBOPROWODA SHR RAZRABOTAL PRP OOO FINKO ELYSHEWA TEL\n89829906599 WZAIMODEJSTWIE S ORGANAMI OWD OSUQESTWLIAET WNESHNIJ\nPILOT BWS СИМОНОВ TEL 89641837292 SID/7772268398)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0030",
                "window_end_hhmm": "2329"
            },
            "start_ts": "2025-01-01T00:30:00",
            "end_ts": "2025-01-01T10:35:00",
            "duration_min": 605
        },
        {
            "sid": "7772268611",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "079J011"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0400",
                "lat": 60.78333333333333,
                "lon": 64.81666666666666,
                "raw": "-TITLE IDEP\n-SID 7772268611\n-ADD 250101\n-ATD 0400\n-ADEP ZZZZ\n-ADEPZ 6047N06449E\n-PAP 0\n-REG 079J011",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1700",
                "lat": 60.78333333333333,
                "lon": 64.81666666666666,
                "raw": "-TITLE IARR\n-SID 7772268611\n-ADA 250101\n-ATA 1700\n-ADARR ZZZZ\n-ADARRZ 6047N06449E\n-PAP 0\n-REG 079J011",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0400\n-M0040/M0060 /ZONA MR076285/\n-ZZZZ1900\n-DEP/6047N06449E DEST/6047N06449E DOF/250101 EET/USTV0001 USHH0002\nOPR/ООО АЭРОСКАН REG/079J011 TYP/BLA RMK/MР076285 СУПРА ОПЕРАТОРЫ БВС\nИСТОМИН 89225200395 КРАВ4УК 89128505967 ПОЛЕТ В РАЙОНЕ 300-500М AGL\n400-600М AMSL. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ.\nУ4ЕТНЫЕ НОМЕРА БВС 079J011 06H7378 SID/7772268611)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0400",
                "window_end_hhmm": "1900"
            },
            "start_ts": "2025-01-01T04:00:00",
            "end_ts": "2025-01-01T17:00:00",
            "duration_min": 780
        },
        {
            "sid": "7772268619",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0790J03"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0400",
                "lat": 61.833333333333336,
                "lon": 66.01666666666667,
                "raw": "-TITLE IDEP\n-SID 7772268619\n-ADD 250101\n-ATD 0400\n-ADEP ZZZZ\n-ADEPZ 6150N06601E\n-PAP 0\n-REG 0790J03",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1700",
                "lat": 61.833333333333336,
                "lon": 66.01666666666667,
                "raw": "-TITLE IARR\n-SID 7772268619\n-ADA 250101\n-ATA 1700\n-ADARR ZZZZ\n-ADARRZ 6150N06601E\n-PAP 0\n-REG 0790J03",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0400\n-M0035/M0060 /ZONA MR076284/\n-ZZZZ1900\n-DEP/6150N06601E DEST/6150N06601E DOF/250101 EET/USTV0001 USHH0002\nOPR/ООО АЭРОСКАН REG/0790J03 TYP/BLA RMK/MР076284 НЯГАНЬ ОПЕРАТОРЫ\nБВС ИСТОМИН 89225200395 КРАВ4УК 89128505967 ПОЛЕТ В РАЙОНЕ 300-550М\nAGL 350-600М AMSL. ТО4КИ ВЗЛЕТА/ПОСАДКИ ГТ1 614933N0660039E ГТ2\n613623N0660938E ГТ3\n614730N0662256E. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ.\nПОЛЕТЫ ПРОИЗВОДИТЬ ТОЛЬКО С РАЗРЕШЕНИЯ РП НЯГАНЬ. У4ЕТНЫЕ НОМЕРА БВС\n0790J03 079J011 SID/7772268619)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0400",
                "window_end_hhmm": "1900"
            },
            "start_ts": "2025-01-01T04:00:00",
            "end_ts": "2025-01-01T17:00:00",
            "duration_min": 780
        },
        {
            "sid": "7772268629",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0799S76"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0000",
                "lat": 60.95,
                "lon": 73.75,
                "raw": "-TITLE IDEP\n-SID 7772268629\n-ADD 250101\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 6057N07345E\n-PAP 0\n-REG 0799S76",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1600",
                "lat": 60.95,
                "lon": 73.75,
                "raw": "-TITLE IARR\n-SID 7772268629\n-ADA 250101\n-ATA 1600\n-ADARR ZZZZ\n-ADARRZ 6057N07345E\n-PAP 0\n-REG 0799S76",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0040/M0055 /ZONA MR076283/\n-ZZZZ1600\n-DEP/6057N07345E DEST/6057N07345E DOF/250101 EET/USTV0001 USRR0002\nOPR/ООО АЭРОСКАН REG/0799S76 TYP/BLA RMK/МР076283 ЮГАН ОПЕРАТОРЫ БВС\nЦВЕТКОВ АНТОН МИХАЙЛОВИ4 8922520-06-31,\nСАРБА4АКОВ ЭДУАРД ВИКТОРОВИ4 89225200156. ВЫСОТА ПОЛЕТА 350-500М AGL\n400-550М AMSL ВЗЛЕТ/ПОСАДКА 605720N0734445E ПОЛЕТЫ НАД НАСЕЛЕННЫМИ\nПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ У4ЕТНЫЕ НОМЕРА БВС 0799S76 РЕЗЕРВ 0800G13\n080A038 I079629 07W9988 0N79905 079S966 0X79703 J079957 0797U72\n0798W92 S079852 079T867 07V9874 080R139 08R0146 R080144 080N111\n080M166 080Q132 08Q0138 0Q80128 Q080134 08P0130 SID/7772268629)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "1600"
            },
            "start_ts": "2025-01-01T00:00:00",
            "end_ts": "2025-01-01T16:00:00",
            "duration_min": 960
        },
        {
            "sid": "7772268639",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0800G13",
                "R033231"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0000",
                "lat": 60.516666666666666,
                "lon": 73.96666666666667,
                "raw": "-TITLE IDEP\n-SID 7772268639\n-ADD 250101\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 6031N07358E\n-PAP 0\n-REG 0800G13 R033231",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1600",
                "lat": 60.516666666666666,
                "lon": 73.96666666666667,
                "raw": "-TITLE IARR\n-SID 7772268639\n-ADA 250101\n-ATA 1600\n-ADARR ZZZZ\n-ADARRZ 6031N07358E\n-PAP 0\n-REG 0800G13 R033231",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0040/M0060 /ZONA MR076282/\n-ZZZZ1600\n-DEP/6031N07358E DEST/6031N07358E DOF/250101 EET/USTV0001 USRR0002\nOPR/ООО АЭРОСКАН REG/0800G13 R033231 TYP/BLA RMK/МР076282 УГУТ\nОПЕРАТОРЫ БВС ДОБРОВОЛЬСКИЙ ДМИТРИЙ АЛЕКСАНДРОВИ4 89829960020.\nВЗЛЕТ/ПОСАДКА ГТ1 603045N074235E ГТ2 603037N0735806E ВЫСОТА ПОЛЕТА\n300-500М AGL 400-600М AMSL ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ\nПРОИЗВОДЯТСЯ У4ЕТНЫЕ НОМЕРА БВС 0800G13, R033231 0R33224 080A038\nI079629 07W9988 0799S76 0N79905 079S966 0X79703 J079957 0797U72\n0798W92 S079852 079T867 07V9874, 080R139 08R0146 R080144 080N111\n080M166 080Q132 08Q0138 0Q80128 Q080134 08P0130 SID/7772268639)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "1600"
            },
            "start_ts": "2025-01-01T00:00:00",
            "end_ts": "2025-01-01T16:00:00",
            "duration_min": 960
        },
        {
            "sid": "7772268645",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "080A038",
                "R033231"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0000",
                "lat": 60.81666666666667,
                "lon": 73.18333333333334,
                "raw": "-TITLE IDEP\n-SID 7772268645\n-ADD 250101\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 6049N07311E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1600",
                "lat": 60.81666666666667,
                "lon": 73.18333333333334,
                "raw": "-TITLE IARR\n-SID 7772268645\n-ADA 250101\n-ATA 1600\n-ADARR ZZZZ\n-ADARRZ 6049N07311E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0046/M0060 /ZONA MR076281/\n-ZZZZ1600\n-DEP/6049N07311E DEST/6049N07311E DOF/250101 EET/USTV0001 USRR0002\nOPR/ООО АЭРОСКАН REG/080A038 R033231 TYP/BLA RMK/МР076281 ПЫТЬ-ЯХ 2\nОПЕРАТОРЫ БВС 4УМАКОВ КИРИЛЛ ВЛАДИМИРОВИ4 89233017080,\nДРОЖЖИН ВЛАДИМИР ИВАНОВИ4 89292101303.\nВЫСОТА ПОЛЕТА 410-550М AGL 460-600М AMSL. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ\nПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ У4ЕТНЫЕ НОМЕРА БВС 080A038 R033231 0R33224\n0800G13 I079629 07W9988 0799S76 0N79905 079S966 0X79703 J079957\n0797U72 0798W92 S079852 079T867 07V9874 080R139 08R0146 R080144\n080N111 080M166 080Q132 08Q0138 0Q80128 Q080134 08P0130 SID/7772268645)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "1600"
            },
            "start_ts": "2025-01-01T00:00:00",
            "end_ts": "2025-01-01T16:00:00",
            "duration_min": 960
        },
        {
            "sid": "7772268654",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "080A038",
                "R033231"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0000",
                "lat": 60.36666666666667,
                "lon": 72.13333333333334,
                "raw": "-TITLE IDEP\n-SID 7772268654\n-ADD 250101\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 6022N07208E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "2359",
                "lat": 60.36666666666667,
                "lon": 72.13333333333334,
                "raw": "-TITLE IARR\n-SID 7772268654\n-ADA 250101\n-ATA 2359\n-ADARR ZZZZ\n-ADARRZ 6022N07208E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0047/M0060 /ZONA MR076278/\n-ZZZZ2359\n-DEP/6022N07208E DEST/6022N07208E DOF/250101 EET/USTV0001 USRR0002\nOPR/ООО АЭРОСКАН REG/080A038 R033231 TYP/BLA RMK/МР076278\nСЕНТЯБРЬСКИЙ ОПЕРАТОРЫ БВС АЛЕКСАНДРОВ ДМИТРИЙ СЕРГЕЕВИ4 89963162908.\nВЫСОТА ПОЛЕТА 370-500М AGL 470-600М AMSL ВЗЛЕТ/ПОСАДКА\n602137N0720753E ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ\nУ4ЕТНЫЕ НОМЕРА БВС 080A038 R033231 0R33224 0800G13 I079629 07W9988\n0799S76 0N79905 079S966 0X79703 J079957 0797U72 0798W92 S079852\n079T867 07V9874 080R139 08R0146 R080144 080N111 080M166 080Q132\n08Q0138 0Q80128 Q080134 08P0130 SID/7772268654)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "2359"
            },
            "start_ts": "2025-01-01T00:00:00",
            "end_ts": "2025-01-01T23:59:00",
            "duration_min": 1439
        },
        {
            "sid": "7772268658",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "080A038",
                "R033231"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0000",
                "lat": 60.46666666666667,
                "lon": 72.33333333333333,
                "raw": "-TITLE IDEP\n-SID 7772268658\n-ADD 250101\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 6028N07220E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "2359",
                "lat": 60.46666666666667,
                "lon": 72.33333333333333,
                "raw": "-TITLE IARR\n-SID 7772268658\n-ADA 250101\n-ATA 2359\n-ADARR ZZZZ\n-ADARRZ 6028N07220E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0035/M0039 /ZONA MR076279/\n-ZZZZ2359\n-DEP/6028N07220E DEST/6028N07220E DOF/250101 EET/USTV0001 USRR0002\nOPR/ООО АЭРОСКАН REG/080A038 R033231 TYP/BLA RMK/МР076279\nСЕНТЯБРЬСКИЙ 2 ОПЕРАТОРЫ БВС АЛЕКСАНДРОВ ДМИТРИЙ СЕРГЕЕВИ4\n89963162908. ВЫСОТА ПОЛЕТА 250-290М AGL 350-390М AMSL ВЗЛЕТ/ПОСАДКА\n602754N0722018E ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ\nУ4ЕТНЫЕ НОМЕРА БВС 080A038 R033231 0R33224 0800G13 I079629 07W9988\n0799S76 0N79905 079S966 0X79703 J079957 0797U72 0798W92 S079852\n079T867 07V9874 080R139 08R0146 R080144 080N111 080M166 080Q132\n08Q0138 0Q80128 Q080134 08P0130 SID/7772268658)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "2359"
            },
            "start_ts": "2025-01-01T00:00:00",
            "end_ts": "2025-01-01T23:59:00",
            "duration_min": 1439
        },
        {
            "sid": "7772269061",
            "center_name": "Красноярский",
            "uav_type": "BLA",
            "operator": "КОЛОТЫГИН",
            "regs": [
                "U083089"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0400",
                "lat": 52.833333333333336,
                "lon": 93.25,
                "raw": "-TITLE IDEP\n-SID 7772269061\n-ADD 250101\n-ATD 0400\n-ADEP ZZZZ\n-ADEPZ 5250N09315E\n-PAP 0\n-REG U083089",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "0700",
                "lat": 52.833333333333336,
                "lon": 93.25,
                "raw": "-TITLE IARR\n-SID 7772269061\n-ADA 250101\n-ATA 0700\n-ADARR ZZZZ\n-ADARRZ 5250N09315E\n-PAP 0\n-REG U083089",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0400\n-M0142/M0184 /ZONA MR091354/\n-ZZZZ0300\n-DEP/5250N09315E DEST/5250N09315E DOF/250101 REG/U083089 EET/UNKL0001\nTYP/BLA OPR/КОЛОТЫГИН АЛЕКСЕЙ RMK/MR091354 ОБЕСПЕ4ЕНИЕ СОГЛАСОВАНО\nBWS DJI MINI 3 СВЯЗЬ С ОПЕРАТОРОМ БВС КОЛОТЫГИН АЛЕКСЕЙ +79233481214\nSID/7772269061)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0400",
                "window_end_hhmm": "0300"
            },
            "start_ts": "2025-01-01T04:00:00",
            "end_ts": "2025-01-01T07:00:00",
            "duration_min": 180
        },
        {
            "sid": "7772269084",
            "center_name": "Новосибирский",
            "uav_type": "2BLA",
            "operator": "УПРАВЛЕНИЕ",
            "regs": null,
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "1101",
                "lat": 55.016666666666666,
                "lon": 82.93333333333334,
                "raw": "-TITLE IDEP\n-SID 7772269084\n-ADD 250101\n-ATD 1101\n-ADEP ZZZZ\n-ADEPZ 5501С08256В\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1600",
                "lat": 55.016666666666666,
                "lon": 82.93333333333334,
                "raw": "-TITLE IARR\n-SID 7772269084\n-ADA 250101\n-ATA 1600\n-ADARR ZZZZ\n-ADARRZ 5501С08256В\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-RF57308\n-ZZZZ1100\n-M0000/M0030 /ZONA R004 5501N08256E/\n-ZZZZ0500\n-DEP/5501N08256E DEST/5501N08256E DOF/250101 EET/UNNT0001\nOPR/УПРАВЛЕНИЕ РОСГВАРДИИ ПО НСО STS/STATE TYP/2BLA RMK/ПОЛЕТ В ЦЕЛЯХ\nОХРАНЫ ОБЩЕСТВЕННОГО ПОРЯДКА, РЕШЕНИЕ НА4АЛЬНИКА УПРАВЛЕНИЯ\nРОСГВАРДИИЙ ПО НСО ШУШАКОВА В.С., КП 89137599059, ОПЕРАТОР\n89136610335, БПЛА RF57304, RF57308 SID/7772269084)",
                "zone_radius_nm": 4.0,
                "zone_center_lat": 55.016666666666666,
                "zone_center_lon": 82.93333333333334,
                "window_start_hhmm": "1100",
                "window_end_hhmm": "0500"
            },
            "start_ts": "2025-01-01T11:01:00",
            "end_ts": "2025-01-01T16:00:00",
            "duration_min": 299
        },
        {
            "sid": "7772269130",
            "center_name": "Новосибирский",
            "uav_type": "1BLA",
            "operator": "САВКО",
            "regs": [
                "0F79588"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0600",
                "lat": 52.03333333333333,
                "lon": 85.9,
                "raw": "-TITLE IDEP\n-SID 7772269130\n-ADD 250101\n-ATD 0600\n-ADEP ZZZZ\n-ADEPZ 5202С08554В\n-PAP 0\n-REG 0F79588",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "0858",
                "lat": 52.03333333333333,
                "lon": 85.9,
                "raw": "-TITLE IARR\n-SID 7772269130\n-ADA 250101\n-ATA 0858\n-ADARR ZZZZ\n-ADARRZ 5202С08554В\n-PAP 0\n-REG 0F79588",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0500\n-M0024/M0059 /ZONA MR081764/\n-ZZZZ0500\n-DEP/5202N08554E DEST/5202N08554E DOF/250101 REG/0F79588 EET/UNNT0001\nTYP/1BLA OPR/САВКО СЕРГЕЙ RMK/MR081764 ОБЕСПЕ4ЕНИЕ СОГЛАСОВАНО BWS\nFIMI СВЯЗЬ С ОПЕРАТОРОМ БВС САВКО СЕРГЕЙ +79039563019 SID/7772269130)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0500",
                "window_end_hhmm": "0500"
            },
            "start_ts": "2025-01-01T06:00:00",
            "end_ts": "2025-01-01T08:58:00",
            "duration_min": 178
        },
        {
            "sid": "7772269530",
            "center_name": "Новосибирский",
            "uav_type": "1BLA",
            "operator": "ПАШКОВ",
            "regs": [
                "09M5129"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0334",
                "lat": 53.5,
                "lon": 83.25,
                "raw": "-TITLE IDEP\n-SID 7772269530\n-ADD 250101\n-ATD 0334\n-ADEP ZZZZ\n-ADEPZ 5330С08315В\n-PAP 0\n-REG 09M5129",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "0618",
                "lat": 53.5,
                "lon": 83.25,
                "raw": "-TITLE IARR\n-SID 7772269530\n-ADA 250101\n-ATA 0618\n-ADARR ZZZZ\n-ADARRZ 5330С08315В\n-PAP 0\n-REG 09M5129",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0300\n-M0012/M0025 /ZONA WR16586/\n-ZZZZ0300\n-DEP/5330N08315E DEST/5330N08315E DOF/250101 REG/09M5129 EET/UNNT0001\nTYP/1BLA OPR/ПАШКОВ МАКСИМ КОНСТАНТИНОВИ4 RMK/VR16586 ЗОНА РАДИУСОМ\n700M С ЦЕНТРОМ 533034N0831536E ОБЕСПЕ4ЕНИЕ СОГЛАСОВАНО BWS F22 S2\nPRO+ СВЯЗЬ С ОПЕРАТОРОМ БВС ПАШКОВ МАКСИМ +79133625592 SID/7772269530)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0300",
                "window_end_hhmm": "0300"
            },
            "start_ts": "2025-01-01T03:34:00",
            "end_ts": "2025-01-01T06:18:00",
            "duration_min": 164
        },
        {
            "sid": "7772269535",
            "center_name": "Московский",
            "uav_type": "BLA",
            "operator": "ФЕДОРЮК",
            "regs": null,
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0900",
                "lat": 56.18333333333333,
                "lon": 38.43333333333333,
                "raw": "-TITLE IDEP\n-SID 7772269535\n-ADD 250101\n-ATD 0900\n-ADEP ZZZZ\n-ADEPZ 5611N03826E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1400",
                "lat": 56.18333333333333,
                "lon": 38.43333333333333,
                "raw": "-TITLE IARR\n-SID 7772269535\n-ADA 250101\n-ATA 1400\n-ADARR ZZZZ\n-ADARRZ 5611N03826E\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0700\n-M0015/M0030 /ZONA MR0271/\n-ZZZZ0700\n-DEP/5611N03826E DEST/5611N03826E DOF/250101 REG/0743E51 EET/UUWV0001\nTYP/BLA OPR/ФЕДОРЮК РОМАН ДМИТРИЕВИ4 RMK/MR0271 ЗОНА РАДИУСОМ 700M С\nЦЕНТРОМ 561133N0382656E ОБЕСПЕ4ЕНИЕ СОГЛАСОВАНО BWS FPV 5 СВЯЗЬ С\nОПЕРАТОРОМ БВС ФЕДОРЮК РОМАН +79773889061 SID/7772269535)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0700",
                "window_end_hhmm": "0700"
            },
            "start_ts": "2025-01-01T09:00:00",
            "end_ts": "2025-01-01T14:00:00",
            "duration_min": 300
        },
        {
            "sid": "7772270083",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0790J03"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0400",
                "lat": 61.833333333333336,
                "lon": 66.01666666666667,
                "raw": "-TITLE IDEP\n-SID 7772270083\n-ADD 250102\n-ATD 0400\n-ADEP ZZZZ\n-ADEPZ 6150N06601E\n-PAP 0\n-REG 0790J03",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1640",
                "lat": 61.833333333333336,
                "lon": 66.01666666666667,
                "raw": "-TITLE IARR\n-SID 7772270083\n-ADA 250102\n-ATA 1640\n-ADARR ZZZZ\n-ADARRZ 6150N06601E\n-PAP 0\n-REG 0790J03",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0400\n-M0035/M0060 /ZONA MR076284/\n-ZZZZ1900\n-DEP/6150N06601E DEST/6150N06601E DOF/250102 EET/USTV0001 USHH0002\nOPR/ООО АЭРОСКАН REG/0790J03 TYP/BLA RMK/MР076284 НЯГАНЬ ОПЕРАТОРЫ\nБВС ИСТОМИН 89225200395 КРАВ4УК 89128505967 ПОЛЕТ В РАЙОНЕ 300-550М\nAGL 350-600М AMSL. ТО4КИ ВЗЛЕТА/ПОСАДКИ ГТ1 614933N0660039E ГТ2\n613623N0660938E ГТ3\n614730N0662256E. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ.\nПОЛЕТЫ ПРОИЗВОДИТЬ ТОЛЬКО С РАЗРЕШЕНИЯ РП НЯГАНЬ. У4ЕТНЫЕ НОМЕРА БВС\n0790J03 079J011 SID/7772270083)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0400",
                "window_end_hhmm": "1900"
            },
            "start_ts": "2025-01-02T04:00:00",
            "end_ts": "2025-01-02T16:40:00",
            "duration_min": 760
        },
        {
            "sid": "7772270084",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "079J011"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0400",
                "lat": 60.78333333333333,
                "lon": 64.81666666666666,
                "raw": "-TITLE IDEP\n-SID 7772270084\n-ADD 250102\n-ATD 0400\n-ADEP ZZZZ\n-ADEPZ 6047N06449E\n-PAP 0\n-REG 079J011",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1640",
                "lat": 60.78333333333333,
                "lon": 64.81666666666666,
                "raw": "-TITLE IARR\n-SID 7772270084\n-ADA 250102\n-ATA 1640\n-ADARR ZZZZ\n-ADARRZ 6047N06449E\n-PAP 0\n-REG 079J011",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0400\n-M0040/M0060 /ZONA MR076285/\n-ZZZZ1900\n-DEP/6047N06449E DEST/6047N06449E DOF/250102 EET/USTV0001 USHH0002\nOPR/ООО АЭРОСКАН REG/079J011 TYP/BLA RMK/MР076285 СУПРА ОПЕРАТОРЫ БВС\nИСТОМИН 89225200395 КРАВ4УК 89128505967 ПОЛЕТ В РАЙОНЕ 300-500М AGL\n400-600М AMSL. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ.\nУ4ЕТНЫЕ НОМЕРА БВС 079J011 06H7378 SID/7772270084)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0400",
                "window_end_hhmm": "1900"
            },
            "start_ts": "2025-01-02T04:00:00",
            "end_ts": "2025-01-02T16:40:00",
            "duration_min": 760
        },
        {
            "sid": "7772270340",
            "center_name": "Новосибирский",
            "uav_type": "1BLA",
            "operator": "САВКО",
            "regs": [
                "0F79588"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0500",
                "lat": 52.03333333333333,
                "lon": 85.9,
                "raw": "-TITLE IDEP\n-SID 7772270340\n-ADD 250102\n-ATD 0500\n-ADEP ZZZZ\n-ADEPZ 5202С08554В\n-PAP 0\n-REG 0F79588",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "0911",
                "lat": 52.03333333333333,
                "lon": 85.9,
                "raw": "-TITLE IARR\n-SID 7772270340\n-ADA 250102\n-ATA 0911\n-ADARR ZZZZ\n-ADARRZ 5202С08554В\n-PAP 0\n-REG 0F79588",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0500\n-M0024/M0059 /ZONA MR081764/\n-ZZZZ0500\n-DEP/5202N08554E DEST/5202N08554E DOF/250102 REG/0F79588 EET/UNNT0001\nTYP/1BLA OPR/САВКО СЕРГЕЙ RMK/MR081764 ОБЕСПЕ4ЕНИЕ СОГЛАСОВАНО BWS\nFIMI СВЯЗЬ С ОПЕРАТОРОМ БВС САВКО СЕРГЕЙ +79039563019 SID/7772270340)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0500",
                "window_end_hhmm": "0500"
            },
            "start_ts": "2025-01-02T05:00:00",
            "end_ts": "2025-01-02T09:11:00",
            "duration_min": 251
        },
        {
            "sid": "7772270361",
            "center_name": "Ростовский",
            "uav_type": "BLA",
            "operator": null,
            "regs": [
                "OF78157"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0415",
                "lat": 46.71666666666667,
                "lon": 48.916666666666664,
                "raw": "-TITLE IDEP\n-SID 7772270361\n-ADD 250101\n-ATD 0415\n-ADEP ZZZZ\n-ADEPZ 4643N04855E\n-PAP 0\n",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1121",
                "lat": 46.88333333333333,
                "lon": 47.5,
                "raw": "-TITLE IARR\n-SID 7772270361\n-ADA 250101\n-ATA 1121\n-ADARR ZZZZ\n-ADARRZ 4653N04730E\n-PAP 0\n",
                "region": null
            },
            "shr": {
                "raw": "(SHR-OF78157\n-ZZZZ0400\n-K0040M0015 4643N04855E 4650N04835E 4656N04821E 4659N04806E\n4700N04756E 4657N04747E 4654N04743E 4654N04733E 4653N04730E\n-ZZZZ1200\n-DEP/4643N04855E DEST/4653N04730E DOF/250101 EET/URRV0001 OPR/ООО\nСИСТЕМА ОБЬЕКТИВНОГО КОНТРОЛЯ REG/OF78157. TYP/BLA RMK/МР 03583\nВОЗДУШНОЕ ПАТРУЛИРОВАНИЕ МАГИСТРАЛЬНОГО НЕФТЕПРОВОДА АО КТК-Р.\nМАРШРУТ ПРОХОДИТ ВНЕ НАСЕЛЕННЫХ ПУНКТОВ, ШИРИНА МАРШРУТА ДО 1000М\nСЛЕВА И СПРАВА ОТ НЕФТЕПРОВОДА.\nРАЗРЕШЕНИЯ: ПОСТАНОВЛЕНИЕ ГУБЕРНАТОРА АСТРАХАНСКОЙ ОБЛАСТИ ОТ 22 МАЯ\n2023ГОДА НОМЕР 55 И НОМЕР 48 ОТ 03.04.2024 ГОДА, РАЗРЕШЕНИЕ ФСБ ПО\nАСТРАХАНСКОЙ ОБЛАСТИ ОТ 23 ИЮЛЯ 2023ГОДА НОМЕР 83/6-3712 И ОТ 19\nСЕНТЯБРЯ 2024 ГОДА НОМЕР 83/6-5082,\nРАЗРЕШЕНИЕ ПУ ФСБ ПО РЕСПУБЛИКЕ КАЛМЫКИЯ И АСТРАХАНСКОЙ ОБЛАСТИ\nОТ 15 АВГУСТА 2024 ГОДА 06/Р НОМЕР 12014,\nURR553 И URR512 СОГЛАСОВАНО С КОМАНДИРОМ В/4 28004 ОТ 26.01.2024\nНОМЕР13/150 URR553 ТАК ЖЕ СОГЛАСОВАНО СТАРШИМ АВИАЦИОННЫМ НА4АЛЬНИКОМ\nАЭРОДРОМА ПРИВОЛЖСКИЙ ,КОМАНДИР В/4 28004-А, ОТ 21.01.2024 НОМЕР\n144.\nСЕРТИФИКАТ ЭКСПЛУАТАНТА НОМЕР АР-268 ВЫДАН 29.03.2024.\nРП/СТЕПАНЯН ЭДУАРД РАФИКОВИ4 ТЕЛЕФОН +7 960-858-24-83\nОПЕРАТОР/АЛЕКСЕЕВ РУСЛАН АЛЕКСАНДРОВИ4. SID/7772270361)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0400",
                "window_end_hhmm": "1200"
            },
            "start_ts": "2025-01-01T04:15:00",
            "end_ts": "2025-01-01T11:21:00",
            "duration_min": 426
        },
        {
            "sid": "7772270512",
            "center_name": "Тюменский",
            "uav_type": "2BLA",
            "operator": "ООО",
            "regs": [
                "0J02194",
                "00Q2171"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0030",
                "lat": 61.5,
                "lon": 70.36666666666666,
                "raw": "-TITLE IDEP\n-SID 7772270512\n-ADD 250101\n-ATD 0030\n-ADEP ZZZZ\n-ADEPZ 6130N07022E\n-PAP 0\n-REG 0J02194 00Q2171",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1035",
                "lat": 61.5,
                "lon": 70.36666666666666,
                "raw": "-TITLE IARR\n-SID 7772270512\n-ADA 250101\n-ATA 1035\n-ADARR ZZZZ\n-ADARRZ 6130N07022E\n-PAP 0\n-REG 0J02194 00Q2171",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0030\n-M0037/M0044 /ZONA 6129N06951E 6133N06952E 6139N07004E 6141N07015E\n6138N07032E 6126N07039E 6121N07039E 6122N07029E 6123N07029E\n6124N07028E 6124N07025E 6124N07023E 6123N07022E 6122N07022E\n6121N07020E 6121N07017E 6120N07015E 6119N07014E 6118N07015E\n6118N07017E 6118N07019E 6118N07021E 6119N07022E 6121N07021E\n6121N07020E 6122N07022E 6121N07024E 6121N07027E 6121N07029E\n6122N07029E 6121N07039E 6112N07039E 6113N07028E 6114N07029E\n6115N07028E 6115N07026E 6115N07024E 6114N07022E 6113N07022E\n6113N07023E 6112N07025E 6112N07027E 6113N07028E 6112N07039E\n6059N07017E 6100N07016E 6100N07016E 6100N07015E 6100N07015E\n6100N07015E 6100N07015E 6100N07015E 6100N07016E 6100N07016E\n6059N07017E 6051N07002E 6043N07003E 6043N06955E 6044N06955E\n6044N06955E 6044N06956E 6044N06956E 6044N06956E 6045N06955E\n6045N06955E 6044N06954E 6044N06954E 6044N06954E 6044N06955E\n6043N06955E 6043N06951E 6053N07000E 6053N07000E 6053N07001E\n6053N07001E 6053N07001E 6054N07001E 6054N07001E 6054N07001E\n6101N07004E 6106N07003E 6106N07008E 6105N07008E 6104N07009E\n6104N07010E 6104N07012E 6103N07014E 6104N07015E 6104N07016E\n6104N07018E 6105N07019E 6106N07019E 6107N07019E 6108N07018E\n6108N07017E 6109N07016E 6109N07014E 6109N07013E 6109N07011E\n6108N07010E 6108N07009E 6108N07008E 6107N07008E 6107N07008E\n6107N07008E 6106N07008E 6106N07008E 6106N07007E 6106N07003E\n6108N07002E 6112N06959E 6117N07006E 6129N06951E/\n-ZZZZ2329\n-DEP/6130N07022E DEST/6130N07022E DOF/250101 EET/USTV0001 USHH0001\nOPR/ООО ФИНКО REG/0J02194 00Q2171 TYP/2BLA RMK/MR076315 SELIIAROWO\nBEZ SRO BWS SUPERCAM S350 GT 1 WZL POS 613025N0702157E H IST 0 380 M\nH ABS 0 440 M R 1000 M GT 2 WZL POS 611116N0701243E H IST 0 380 M H\nABS 0 440 M R 1000 M GT 3 WZL POS 611554N0701942E H IST 0 380 M H ABS\n0 440 M R 1000 M W ZONE H POL IST 310 380 M H POL ABS 370 440 M\nPOLETY NAD NASELENNYMI PUNKTAMI NE PREDUSMOTRENY CELX MONITORING\nTRUBOPROWODA SHR RAZRABOTAL PRP OOO FINKO ELYSHEWA TEL 89829906599\nWZAIMODEJSTWIE S ORGANAMI OWD OSUQESTWLIAET WNESHNIJ PILOT BWS\nТЕЛЬНОВ\n89124659495 SID/7772270512)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0030",
                "window_end_hhmm": "2329"
            },
            "start_ts": "2025-01-01T00:30:00",
            "end_ts": "2025-01-01T10:35:00",
            "duration_min": 605
        },
        {
            "sid": "7772270529",
            "center_name": "Новосибирский",
            "uav_type": "1BLA",
            "operator": "БЕЛОВОЛОВ",
            "regs": [
                "090E862"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0700",
                "lat": 53.35,
                "lon": 83.68333333333334,
                "raw": "-TITLE IDEP\n-SID 7772270529\n-ADD 250102\n-ATD 0700\n-ADEP ZZZZ\n-ADEPZ 5321С08341В\n-PAP 0\n-REG 090E862",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "0808",
                "lat": 53.35,
                "lon": 83.68333333333334,
                "raw": "-TITLE IARR\n-SID 7772270529\n-ADA 250102\n-ATA 0808\n-ADARR ZZZZ\n-ADARRZ 5321С08341В\n-PAP 0\n-REG 090E862",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0700\n-M0020/M0034 /ZONA WR16548/\n-ZZZZ0500\n-DEP/5321N08341E DEST/5321N08341E DOF/250102 REG/090E862 EET/UNNT0001\nTYP/1BLA OPR/БЕЛОВОЛОВ ДМИТРИЙ АЛЕКСЕЕВИ4 RMK/VR16548 РАЗРЕШЕНИЕ\nКОМИТЕТ ПО ДОРОЖНОМУ ХОЗЯЙСТВУ И ТРАНСПОРТА ГОРОДА БАРНАУЛА НР 165 ОТ\n26 11 2024 ОБЕСПЕ4ЕНИЕ СОГЛАСОВАНО BWS APEX5 СВЯЗЬ С ОПЕРАТОРОМ БВС\nБЕЛОВОЛОВ ДМИТРИЙ +79138793583 SID/7772270529)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0700",
                "window_end_hhmm": "0500"
            },
            "start_ts": "2025-01-02T07:00:00",
            "end_ts": "2025-01-02T08:08:00",
            "duration_min": 68
        },
        {
            "sid": "7772270531",
            "center_name": "Новосибирский",
            "uav_type": "1BLA",
            "operator": "БЕЛОВОЛОВ",
            "regs": [
                "090E862"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0700",
                "lat": 53.333333333333336,
                "lon": 83.66666666666667,
                "raw": "-TITLE IDEP\n-SID 7772270531\n-ADD 250102\n-ATD 0700\n-ADEP ZZZZ\n-ADEPZ 5320С08340В\n-PAP 0\n-REG 090E862",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "0808",
                "lat": 53.333333333333336,
                "lon": 83.66666666666667,
                "raw": "-TITLE IARR\n-SID 7772270531\n-ADA 250102\n-ATA 0808\n-ADARR ZZZZ\n-ADARRZ 5320С08340В\n-PAP 0\n-REG 090E862",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0700\n-M0018/M0033 /ZONA WR16547/\n-ZZZZ0500\n-DEP/5320N08340E DEST/5320N08340E DOF/250102 REG/090E862 EET/UNNT0001\nTYP/1BLA OPR/БЕЛОВОЛОВ ДМИТРИЙ АЛЕКСЕЕВИ4 RMK/VR16547 РАЗРЕШЕНИЕ\nКОМИТЕТ ПО ДОРОЖНОМУ ХОЗЯЙСТВУ И ТРАНСПОРТА ГОРОДА БАРНАУЛА НР 165 ОТ\n26 11 2024 ЗОНА РАДИУСОМ 500M С ЦЕНТРОМ 532032N0834058E ОБЕСПЕ4ЕНИЕ\nСОГЛАСОВАНО BWS APEX5 СВЯЗЬ С ОПЕРАТОРОМ БВС БЕЛОВОЛОВ ДМИТРИЙ\n+79138793583 SID/7772270531)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0700",
                "window_end_hhmm": "0500"
            },
            "start_ts": "2025-01-02T07:00:00",
            "end_ts": "2025-01-02T08:08:00",
            "duration_min": 68
        },
        {
            "sid": "7772270532",
            "center_name": "Новосибирский",
            "uav_type": "1BLA",
            "operator": "БЕЛОВОЛОВ",
            "regs": [
                "090E862"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0700",
                "lat": 53.4,
                "lon": 83.61666666666666,
                "raw": "-TITLE IDEP\n-SID 7772270532\n-ADD 250102\n-ATD 0700\n-ADEP ZZZZ\n-ADEPZ 5324С08337В\n-PAP 0\n-REG 090E862",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "0808",
                "lat": 53.4,
                "lon": 83.61666666666666,
                "raw": "-TITLE IARR\n-SID 7772270532\n-ADA 250102\n-ATA 0808\n-ADARR ZZZZ\n-ADARRZ 5324С08337В\n-PAP 0\n-REG 090E862",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0700\n-M0015/M0032 /ZONA WR16546/\n-ZZZZ0500\n-DEP/5324N08337E DEST/5324N08337E DOF/250102 REG/090E862 EET/UNNT0001\nTYP/1BLA OPR/БЕЛОВОЛОВ ДМИТРИЙ АЛЕКСЕЕВИ4 RMK/VR16546 РАЗРЕШЕНИЕ\nКОМИТЕТ ПО ДОРОЖНОМУ ХОЗЯЙСТВУ И ТРАНСПОРТА ГОРОДА БАРНАУЛА НР 165 ОТ\n26 11 2024 ЗОНА РАДИУСОМ 500M С ЦЕНТРОМ 532410N0833703E ОБЕСПЕ4ЕНИЕ\nСОГЛАСОВАНО BWS APEX5 СВЯЗЬ С ОПЕРАТОРОМ БВС БЕЛОВОЛОВ ДМИТРИЙ\n+79138793583 SID/7772270532)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0700",
                "window_end_hhmm": "0500"
            },
            "start_ts": "2025-01-02T07:00:00",
            "end_ts": "2025-01-02T08:08:00",
            "duration_min": 68
        },
        {
            "sid": "7772270533",
            "center_name": "Московский",
            "uav_type": "BLA",
            "operator": "ИЛЬИН",
            "regs": null,
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0700",
                "lat": 56.54944444444444,
                "lon": 38.25083333333333,
                "raw": "-TITLE IDEP\n-SID 7772270533\n-ADD 250102\n-ATD 0700\n-ADEP ZZZZ\n-ADEPZ 563258N0381503E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "0913",
                "lat": 56.54944444444444,
                "lon": 38.25083333333333,
                "raw": "-TITLE IARR\n-SID 7772270533\n-ADA 250102\n-ATA 0913\n-ADARR ZZZZ\n-ADARRZ 563258N0381503E\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0700\n-M0017/M0076 /ZONA MR0264/\n-ZZZZ0400\n-DEP/5632N03815E DEST/5632N03815E DOF/250102 REG/0775K31 EET/UUWV0001\nTYP/BLA OPR/ИЛЬИН ЛЕВ СЕРГЕЕВИ4 RMK/MR0264 ОБЕСПЕ4ЕНИЕ СОГЛАСОВАНО\nBWS DJI MINI 2 СВЯЗЬ С ОПЕРАТОРОМ БВС ИЛЬИН ЛЕВ +79168149273 SID/7772270533)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0700",
                "window_end_hhmm": "0400"
            },
            "start_ts": "2025-01-02T07:00:00",
            "end_ts": "2025-01-02T09:13:00",
            "duration_min": 133
        },
        {
            "sid": "7772270573",
            "center_name": "Московский",
            "uav_type": "2BLA",
            "operator": "4ЕРДАНЦЕВ",
            "regs": null,
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0730",
                "lat": 55.88333333333333,
                "lon": 38.88333333333333,
                "raw": "-TITLE IDEP\n-SID 7772270573\n-ADD 250102\n-ATD 0730\n-ADEP ZZZZ\n-ADEPZ 5553N03853E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1509",
                "lat": 55.88333333333333,
                "lon": 38.88333333333333,
                "raw": "-TITLE IARR\n-SID 7772270573\n-ADA 250102\n-ATA 1509\n-ADARR ZZZZ\n-ADARRZ 5553N03853E\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0730\n-M0012/M0026 /ZONA MR0277/\n-ZZZZ1230\n-DEP/5553N03853E DEST/5553N03853E DOF/250102 REG/09K2404 0S92698\nEET/UUWV0001 TYP/2BLA OPR/4ЕРДАНЦЕВ НИКИТА ДМИТРИЕВИ4 RMK/MR0277 ЗОНА\nРАДИУСОМ 800M С ЦЕНТРОМ 555319N0385324E ОБЕСПЕ4ЕНИЕ СОГЛАСОВАНО BWS\nЗВЕЗДА2 ПЛАНЕР1 СВЯЗЬ С ОПЕРАТОРОМ БВС 4ЕРДАНЦЕВ НИКИТА +79684847354\nSID/7772270573)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0730",
                "window_end_hhmm": "1230"
            },
            "start_ts": "2025-01-02T07:30:00",
            "end_ts": "2025-01-02T15:09:00",
            "duration_min": 459
        },
        {
            "sid": "7772270609",
            "center_name": "Московский",
            "uav_type": "4BLA",
            "operator": "ТИХОМИРОВ",
            "regs": null,
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0908",
                "lat": 55.75861111111111,
                "lon": 38.42027777777778,
                "raw": "-TITLE IDEP\n-SID 7772270609\n-ADD 250102\n-ATD 0908\n-ADEP ZZZZ\n-ADEPZ 554531N0382513E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1026",
                "lat": 55.75861111111111,
                "lon": 38.42027777777778,
                "raw": "-TITLE IARR\n-SID 7772270609\n-ADA 250102\n-ATA 1026\n-ADARR ZZZZ\n-ADARRZ 554531N0382513E\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0800\n-M0013/M0027 /ZONA MR0233/\n-ZZZZ0600\n-DEP/5545N03825E DEST/5545N03825E DOF/250102 REG/Z026235 0262Y25\n0P68159 Y066575 EET/UUWV0001 TYP/4BLA OPR/ТИХОМИРОВ СЕРГЕЙ\nКОНСТАНТИНОВИ4 RMK/MR0233 ЗОНА РАДИУСОМ 300M С ЦЕНТРОМ\n554531N0382513E ОБЕСПЕ4ЕНИЕ СОГЛАСОВАНО BWS ПАЙПЕР ELGE XL KATANA\nEDGI540 СВЯЗЬ С ОПЕРАТОРОМ БВС ТИХОМИРОВ СЕРГЕЙ +79255009623 SID/7772270609)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0800",
                "window_end_hhmm": "0600"
            },
            "start_ts": "2025-01-02T09:08:00",
            "end_ts": "2025-01-02T10:26:00",
            "duration_min": 78
        },
        {
            "sid": "7772270628",
            "center_name": "Московский",
            "uav_type": "2BLA",
            "operator": "ВЛАСОВ",
            "regs": null,
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0813",
                "lat": 55.927499999999995,
                "lon": 37.27611111111111,
                "raw": "-TITLE IDEP\n-SID 7772270628\n-ADD 250102\n-ATD 0813\n-ADEP ZZZZ\n-ADEPZ 555539N0371634E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1400",
                "lat": 55.927499999999995,
                "lon": 37.27611111111111,
                "raw": "-TITLE IARR\n-SID 7772270628\n-ADA 250102\n-ATA 1400\n-ADARR ZZZZ\n-ADARRZ 555539N0371634E\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0800\n-M0017/M0031 /ZONA WR16598/\n-ZZZZ0600\n-DEP/5555N03716E DEST/5555N03716E DOF/250102 REG/093V529 08K5415\nEET/UUWV0001 TYP/2BLA OPR/ВЛАСОВ ИВАН АЛЕКСЕЕВИ4 RMK/VR16598\nОБЕСПЕ4ЕНИЕ СОГЛАСОВАНО BWS ASW28 СВОЙ ВАРИАНТ СВЯЗЬ С ОПЕРАТОРОМ БВС\nВЛАСОВ ИВАН +79654313994 КУЗНЕЦОВ ДМИТРИЙ +79055682778 ВЛАСОВ ИВАН\n+79654313994 SID/7772270628)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0800",
                "window_end_hhmm": "0600"
            },
            "start_ts": "2025-01-02T08:13:00",
            "end_ts": "2025-01-02T14:00:00",
            "duration_min": 347
        },
        {
            "sid": "7772270662",
            "center_name": "Московский",
            "uav_type": "BLA",
            "operator": "СВИНАРЕВ",
            "regs": null,
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0900",
                "lat": 56.28,
                "lon": 37.52611111111111,
                "raw": "-TITLE IDEP\n-SID 7772270662\n-ADD 250102\n-ATD 0900\n-ADEP ZZZZ\n-ADEPZ 561648N0373134E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1027",
                "lat": 56.28,
                "lon": 37.52611111111111,
                "raw": "-TITLE IARR\n-SID 7772270662\n-ADA 250102\n-ATA 1027\n-ADARR ZZZZ\n-ADARRZ 561648N0373134E\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0900\n-M0018/M0032 /ZONA MR0268/\n-ZZZZ0400\n-DEP/5616N03731E DEST/5616N03731E DOF/250102 REG/0954A18 EET/UUWV0001\nTYP/BLA OPR/СВИНАРЕВ СЕРГЕЙ АНДРЕЕВИ4 RMK/MR0268 ОБЕСПЕ4ЕНИЕ\nСОГЛАСОВАНО BWS DJI AVATA 2 СВЯЗЬ С ОПЕРАТОРОМ БВС СВИНАРЕВ СЕРГЕЙ\n+79030167687 SID/7772270662)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0900",
                "window_end_hhmm": "0400"
            },
            "start_ts": "2025-01-02T09:00:00",
            "end_ts": "2025-01-02T10:27:00",
            "duration_min": 87
        },
        {
            "sid": "7772270664",
            "center_name": "Московский",
            "uav_type": "BLA",
            "operator": "НИКОЛЬСКИЙ",
            "regs": null,
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0902",
                "lat": 56.59638888888889,
                "lon": 38.16722222222222,
                "raw": "-TITLE IDEP\n-SID 7772270664\n-ADD 250102\n-ATD 0902\n-ADEP ZZZZ\n-ADEPZ 563547N0381002E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "0921",
                "lat": 56.59638888888889,
                "lon": 38.16722222222222,
                "raw": "-TITLE IARR\n-SID 7772270664\n-ADA 250102\n-ATA 0921\n-ADARR ZZZZ\n-ADARRZ 563547N0381002E\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0900\n-M0015/M0029 /ZONA MR0283/\n-ZZZZ0100\n-DEP/5635N03810E DEST/5635N03810E DOF/250102 REG/L097661 EET/UUWV0001\nTYP/BLA OPR/НИКОЛЬСКИЙ ВИКТОР ВАСИЛЬЕВИ4 RMK/MR0283 ЗОНА РАДИУСОМ\n400M С ЦЕНТРОМ 563547N0381002E ОБЕСПЕ4ЕНИЕ СОГЛАСОВАНО BWS\nГИДРОСАМОЛЕТ СВЯЗЬ С ОПЕРАТОРОМ БВС НИКОЛЬСКИЙ ВИКТОР +79268368003\nSID/7772270664)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0900",
                "window_end_hhmm": "0100"
            },
            "start_ts": "2025-01-02T09:02:00",
            "end_ts": "2025-01-02T09:21:00",
            "duration_min": 19
        },
        {
            "sid": "7772270939",
            "center_name": "Тюменский",
            "uav_type": "2BLA",
            "operator": "ООО",
            "regs": [
                "0J02194",
                "00Q2171"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0030",
                "lat": 61.5,
                "lon": 70.36666666666666,
                "raw": "-TITLE IDEP\n-SID 7772270939\n-ADD 250102\n-ATD 0030\n-ADEP ZZZZ\n-ADEPZ 6130N07022E\n-PAP 0\n-REG 0J02194 00Q2171",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1200",
                "lat": 61.5,
                "lon": 70.36666666666666,
                "raw": "-TITLE IARR\n-SID 7772270939\n-ADA 250102\n-ATA 1200\n-ADARR ZZZZ\n-ADARRZ 6130N07022E\n-PAP 0\n-REG 0J02194 00Q2171",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0030\n-M0037/M0044 /ZONA 6129N06951E 6133N06952E 6139N07004E 6141N07015E\n6138N07032E 6126N07039E 6112N07039E 6051N07002E 6043N07003E\n6043N06951E 6054N07001E 6101N07004E 6108N07002E 6112N06959E\n6117N07006E 6129N06951E/\n-ZZZZ2329\n-DEP/6130N07022E DEST/6130N07022E DOF/250102 EET/USTV0001 USHH0001\nOPR/ООО ФИНКО REG/0J02194 00Q2171 TYP/2BLA RMK/MR076405 SELIIAROWO\nBEZ SRO BWS SUPERCAM S350 GT 1 WZL POS 613025N0702157E H IST 0 380 M\nH ABS 0 440 M R 1000 M GT 2 WZL POS 611116N0701243E H IST 0 380 M H\nABS 0 440 M R 1000 M GT 3 WZL POS 611554N0701942E H IST 0 380 M H ABS\n0 440 M R 1000 M W ZONE H POL IST 310 380 M H POL ABS 370 440 M BEZ\nWHODA W ZONY OGRANICHENIIA POLETOW USR957 USR958 USR959 USR960\nUSR1023 USR1024 USR1026 POLETY NAD NASELENNYMI PUNKTAMI NE\nPREDUSMOTRENY CELX MONITORING TRUBOPROWODA SHR RAZRABOTAL PRP OOO\nFINKO ELYSHEWA TEL 89829906599 WZAIMODEJSTWIE S ORGANAMI OWD\nOSUQESTWLIAET WNESHNIJ PILOT BWS ТЕЛЬНОВ\n89124659495 SID/7772270939)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0030",
                "window_end_hhmm": "2329"
            },
            "start_ts": "2025-01-02T00:30:00",
            "end_ts": "2025-01-02T12:00:00",
            "duration_min": 690
        },
        {
            "sid": "7772270963",
            "center_name": "Санкт-Петербургский",
            "uav_type": "BLA",
            "operator": "СЕРГЕЕВА",
            "regs": [
                "08R8527"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0923",
                "lat": 61.0,
                "lon": 30.1,
                "raw": "-TITLE IDEP\n-SID 7772270963\n-ADD 250101\n-ATD 0923\n-ADEP ZZZZ\n-ADEPZ 6100N03006E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1019",
                "lat": 61.0,
                "lon": 30.1,
                "raw": "-TITLE IARR\n-SID 7772270963\n-ADA 250101\n-ATA 1019\n-ADARR ZZZZ\n-ADARRZ 6100N03006E\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0700\n-M0000/M0020 /ZONA MR01649/\n-ZZZZ0950\n-DEP/6100N03006E DEST/6100N03006E DOF/250101 EET/ULLL0001\nOPR/СЕРГЕЕВА СОФЬЯ ВЛАДИМИРОВНА REG/08R8527 TYP/BLA\nRMK/АВАРИЙНО-СПАСАТЕЛЬНАЯ СЛУЖБА ЛО, ВЫЛЕТ В ЦЕЛЯХ ЛЕДОВОЙ РАЗВЕДКИ,\nОПЕРАТОР БВС ГЛЫБИН 89992037794 КООРДИНАТОР СЕРГЕЕВА С.В. 89111300634\nSID/7772270963)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0700",
                "window_end_hhmm": "0950"
            },
            "start_ts": "2025-01-01T09:23:00",
            "end_ts": "2025-01-01T10:19:00",
            "duration_min": 56
        },
        {
            "sid": "7772270975",
            "center_name": "Санкт-Петербургский",
            "uav_type": "BLA",
            "operator": "СЕРГЕЕВА",
            "regs": [
                "0885R39"
            ],
            "dep": {
                "date": "2025-01-03",
                "time_hhmm": "0707",
                "lat": null,
                "lon": null,
                "raw": "-TITLE IDEP\n-SID 7772270975\n-ADD 250103\n-ATD 0707\n-ADEP ZZZZ\n-ADEPZ ХЕЛИДОК ЛОДЕЙНОЕ ПОЛЕ 6044N03334E\n-PAP 0",
                "region": null
            },
            "arr": {
                "date": "2025-01-03",
                "time_hhmm": "1058",
                "lat": null,
                "lon": null,
                "raw": "-TITLE IARR\n-SID 7772270975\n-ADA 250103\n-ATA 1058\n-ADARR ZZZZ\n-ADARRZ ХЕЛИДОК ЛОДЕЙНОЕ ПОЛЕ 6044N03334E\n-PAP 0",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0700\n-M0000/M0020 /ZONA MR01653/\n-ZZZZ0950\n-DEP/6044N03334E DEST/6044N03334E DOF/250103 EET/ULLL0001\nOPR/СЕРГЕЕВА СОФЬЯ ВЛАДИМИРОВНА REG/0885R39 TYP/BLA\nRMK/АВАРИЙНО-СПАСАТЕЛЬНАЯ СЛУЖБА ЛО, ВЫЛЕТ В ЦЕЛЯХ ЛЕДОВОЙ РАЗВЕДКИ,\nОПЕРАТОР БВС МОШНИКОВ 89817172853 КООРДИНАТОР СЕРГЕЕВА С.В.\n89111300634 SID/7772270975)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0700",
                "window_end_hhmm": "0950"
            },
            "start_ts": "2025-01-03T07:07:00",
            "end_ts": "2025-01-03T10:58:00",
            "duration_min": 231
        },
        {
            "sid": "7772271067",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": null,
            "regs": [
                "072D217"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0000",
                "lat": 57.1,
                "lon": 65.75,
                "raw": "-TITLE IDEP\n-SID 7772271067\n-ADD 250101\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 5706N06545E\n-PAP 0\n-REG 072D217",
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "2359",
                "lat": 57.1,
                "lon": 65.75,
                "raw": "-TITLE IARR\n-SID 7772271067\n-ADA 250101\n-ATA 2359\n-ADARR ZZZZ\n-ADARRZ 5706N06545E\n-PAP 0\n-REG 072D217",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0010/M0090 /ZONA USP223/\n-ZZZZ2359\n-DEP/5706N06545E DEST/5706N06545E DOF/250101 EET/USTR0001 OPR/MUSANOV\nANTON VIKTOROVI4 REG/072D217 TYP/BLA RMK/РАЗРЕШЕНИЕ АДМИНИСТРАЦИИ Г\nТЮМЕНЬ ИСХ 19-08-000652-24 ОТ 25 03 2024 ПОЛЕТЫ В ЗОНАХ USP223 USR913\nСОГЛАСОВАНЫ РАЗРЕШЕНИЯ ПРИКАЗ 345 ОТ 22 09 2023 ПИСЬМО ИСХ 1-2944 ОТ\n03 10 2023 ЦЕЛЬ ПОЛЕТА ОХРАНА И МОНИТОРИНГ ОБЬЕКТОВ ТЮМЕНСКОГО НПЗ\nТЕЛЕФОН ОТВЕТСТВЕННОГО 8-932-470-8396 SID/7772271067)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "2359"
            },
            "start_ts": "2025-01-01T00:00:00",
            "end_ts": "2025-01-01T23:59:00",
            "duration_min": 1439
        },
        {
            "sid": "7772271069",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": null,
            "regs": [
                "072D217"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0000",
                "lat": 57.1,
                "lon": 65.75,
                "raw": "-TITLE IDEP\n-SID 7772271069\n-ADD 250102\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 5706N06545E\n-PAP 0\n-REG 072D217",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "2359",
                "lat": 57.1,
                "lon": 65.75,
                "raw": "-TITLE IARR\n-SID 7772271069\n-ADA 250102\n-ATA 2359\n-ADARR ZZZZ\n-ADARRZ 5706N06545E\n-PAP 0\n-REG 072D217",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0010/M0090 /ZONA USP223/\n-ZZZZ2359\n-DEP/5706N06545E DEST/5706N06545E DOF/250102 EET/USTR0001 OPR/MUSANOV\nANTON VIKTOROVI4 REG/072D217 TYP/BLA RMK/РАЗРЕШЕНИЕ АДМИНИСТРАЦИИ Г\nТЮМЕНЬ ИСХ 19-08-000652-24 ОТ 25 03 2024 ПОЛЕТЫ В ЗОНАХ USP223 USR913\nСОГЛАСОВАНЫ РАЗРЕШЕНИЯ ПРИКАЗ 345 ОТ 22 09 2023 ПИСЬМО ИСХ 1-2944 ОТ\n03 10 2023 ЦЕЛЬ ПОЛЕТА ОХРАНА И МОНИТОРИНГ ОБЬЕКТОВ ТЮМЕНСКОГО НПЗ\nТЕЛЕФОН ОТВЕТСТВЕННОГО 8-932-470-8396 SID/7772271069)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "2359"
            },
            "start_ts": "2025-01-02T00:00:00",
            "end_ts": "2025-01-02T23:59:00",
            "duration_min": 1439
        },
        {
            "sid": "7772271073",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": null,
            "regs": [
                "072D217"
            ],
            "dep": {
                "date": "2025-01-03",
                "time_hhmm": "0000",
                "lat": 57.1,
                "lon": 65.75,
                "raw": "-TITLE IDEP\n-SID 7772271073\n-ADD 250103\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 5706N06545E\n-PAP 0\n-REG 072D217",
                "region": null
            },
            "arr": {
                "date": "2025-01-03",
                "time_hhmm": "2359",
                "lat": 57.1,
                "lon": 65.75,
                "raw": "-TITLE IARR\n-SID 7772271073\n-ADA 250103\n-ATA 2359\n-ADARR ZZZZ\n-ADARRZ 5706N06545E\n-PAP 0\n-REG 072D217",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0010/M0090 /ZONA USP223/\n-ZZZZ2359\n-DEP/5706N06545E DEST/5706N06545E DOF/250103 EET/USTR0001 OPR/MUSANOV\nANTON VIKTOROVI4 REG/072D217 TYP/BLA RMK/РАЗРЕШЕНИЕ АДМИНИСТРАЦИИ Г\nТЮМЕНЬ ИСХ 19-08-000652-24 ОТ 25 03 2024 ПОЛЕТЫ В ЗОНАХ USP223 USR913\nСОГЛАСОВАНЫ РАЗРЕШЕНИЯ ПРИКАЗ 345 ОТ 22 09 2023 ПИСЬМО ИСХ 1-2944 ОТ\n03 10 2023 ЦЕЛЬ ПОЛЕТА ОХРАНА И МОНИТОРИНГ ОБЬЕКТОВ ТЮМЕНСКОГО НПЗ\nТЕЛЕФОН ОТВЕТСТВЕННОГО 8-932-470-8396 SID/7772271073)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "2359"
            },
            "start_ts": "2025-01-03T00:00:00",
            "end_ts": "2025-01-03T23:59:00",
            "duration_min": 1439
        },
        {
            "sid": "7772271229",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0790J03"
            ],
            "dep": {
                "date": "2025-01-03",
                "time_hhmm": "0400",
                "lat": 61.833333333333336,
                "lon": 66.01666666666667,
                "raw": "-TITLE IDEP\n-SID 7772271229\n-ADD 250103\n-ATD 0400\n-ADEP ZZZZ\n-ADEPZ 6150N06601E\n-PAP 0\n-REG 0790J03",
                "region": null
            },
            "arr": {
                "date": "2025-01-03",
                "time_hhmm": "1545",
                "lat": 61.833333333333336,
                "lon": 66.01666666666667,
                "raw": "-TITLE IARR\n-SID 7772271229\n-ADA 250103\n-ATA 1545\n-ADARR ZZZZ\n-ADARRZ 6150N06601E\n-PAP 0\n-REG 0790J03",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0400\n-M0035/M0060 /ZONA MR076284/\n-ZZZZ1900\n-DEP/6150N06601E DEST/6150N06601E DOF/250103 EET/USTV0001 USHH0002\nOPR/ООО АЭРОСКАН REG/0790J03 TYP/BLA RMK/MР076284 НЯГАНЬ ОПЕРАТОРЫ\nБВС ИСТОМИН 89225200395 КРАВ4УК 89128505967 ПОЛЕТ В РАЙОНЕ 300-550М\nAGL 350-600М AMSL. ТО4КИ ВЗЛЕТА/ПОСАДКИ ГТ1 614933N0660039E ГТ2\n613623N0660938E ГТ3\n614730N0662256E. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ.\nПОЛЕТЫ ПРОИЗВОДИТЬ ТОЛЬКО С РАЗРЕШЕНИЯ РП НЯГАНЬ. У4ЕТНЫЕ НОМЕРА БВС\n0790J03 079J011 SID/7772271229)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0400",
                "window_end_hhmm": "1900"
            },
            "start_ts": "2025-01-03T04:00:00",
            "end_ts": "2025-01-03T15:45:00",
            "duration_min": 705
        },
        {
            "sid": "7772271232",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "079J011"
            ],
            "dep": {
                "date": "2025-01-03",
                "time_hhmm": "0400",
                "lat": 60.78333333333333,
                "lon": 64.81666666666666,
                "raw": "-TITLE IDEP\n-SID 7772271232\n-ADD 250103\n-ATD 0400\n-ADEP ZZZZ\n-ADEPZ 6047N06449E\n-PAP 0\n-REG 079J011",
                "region": null
            },
            "arr": {
                "date": "2025-01-03",
                "time_hhmm": "1545",
                "lat": 60.78333333333333,
                "lon": 64.81666666666666,
                "raw": "-TITLE IARR\n-SID 7772271232\n-ADA 250103\n-ATA 1545\n-ADARR ZZZZ\n-ADARRZ 6047N06449E\n-PAP 0\n-REG 079J011",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0400\n-M0040/M0060 /ZONA MR076285/\n-ZZZZ1900\n-DEP/6047N06449E DEST/6047N06449E DOF/250103 EET/USTV0001 USHH0002\nOPR/ООО АЭРОСКАН REG/079J011 TYP/BLA RMK/MР076285 СУПРА ОПЕРАТОРЫ БВС\nИСТОМИН 89225200395 КРАВ4УК 89128505967 ПОЛЕТ В РАЙОНЕ 300-500М AGL\n400-600М AMSL. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ.\nУ4ЕТНЫЕ НОМЕРА БВС 079J011 06H7378 SID/7772271232)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0400",
                "window_end_hhmm": "1900"
            },
            "start_ts": "2025-01-03T04:00:00",
            "end_ts": "2025-01-03T15:45:00",
            "duration_min": 705
        },
        {
            "sid": "7772271237",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0799S76"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0000",
                "lat": 60.95,
                "lon": 73.75,
                "raw": "-TITLE IDEP\n-SID 7772271237\n-ADD 250102\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 6057N07345E\n-PAP 0\n-REG 0799S76",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1600",
                "lat": 60.95,
                "lon": 73.75,
                "raw": "-TITLE IARR\n-SID 7772271237\n-ADA 250102\n-ATA 1600\n-ADARR ZZZZ\n-ADARRZ 6057N07345E\n-PAP 0\n-REG 0799S76",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0040/M0055 /ZONA MR076283/\n-ZZZZ1600\n-DEP/6057N07345E DEST/6057N07345E DOF/250102 EET/USTV0001 USRR0002\nOPR/ООО АЭРОСКАН REG/0799S76 TYP/BLA RMK/МР076283 ЮГАН ОПЕРАТОРЫ БВС\nЦВЕТКОВ АНТОН МИХАЙЛОВИ4 8922520-06-31,\nСАРБА4АКОВ ЭДУАРД ВИКТОРОВИ4 89225200156. ВЫСОТА ПОЛЕТА 350-500М AGL\n400-550М AMSL ВЗЛЕТ/ПОСАДКА 605720N0734445E ПОЛЕТЫ НАД НАСЕЛЕННЫМИ\nПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ У4ЕТНЫЕ НОМЕРА БВС 0799S76 РЕЗЕРВ 0800G13\n080A038 I079629 07W9988 0N79905 079S966 0X79703 J079957 0797U72\n0798W92 S079852 079T867 07V9874 080R139 08R0146 R080144 080N111\n080M166 080Q132 08Q0138 0Q80128 Q080134 08P0130 SID/7772271237)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "1600"
            },
            "start_ts": "2025-01-02T00:00:00",
            "end_ts": "2025-01-02T16:00:00",
            "duration_min": 960
        },
        {
            "sid": "7772271240",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0800G13",
                "R033231"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0000",
                "lat": 60.516666666666666,
                "lon": 73.96666666666667,
                "raw": "-TITLE IDEP\n-SID 7772271240\n-ADD 250102\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 6031N07358E\n-PAP 0\n-REG 0800G13 R033231",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1600",
                "lat": 60.516666666666666,
                "lon": 73.96666666666667,
                "raw": "-TITLE IARR\n-SID 7772271240\n-ADA 250102\n-ATA 1600\n-ADARR ZZZZ\n-ADARRZ 6031N07358E\n-PAP 0\n-REG 0800G13 R033231",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0040/M0060 /ZONA MR076282/\n-ZZZZ1600\n-DEP/6031N07358E DEST/6031N07358E DOF/250102 EET/USTV0001 USRR0002\nOPR/ООО АЭРОСКАН REG/0800G13 R033231 TYP/BLA RMK/МР076282 УГУТ\nОПЕРАТОРЫ БВС ДОБРОВОЛЬСКИЙ ДМИТРИЙ АЛЕКСАНДРОВИ4 89829960020.\nВЗЛЕТ/ПОСАДКА ГТ1 603045N074235E ГТ2 603037N0735806E ВЫСОТА ПОЛЕТА\n300-500М AGL 400-600М AMSL ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ\nПРОИЗВОДЯТСЯ У4ЕТНЫЕ НОМЕРА БВС 0800G13, R033231 0R33224 080A038\nI079629 07W9988 0799S76 0N79905 079S966 0X79703 J079957 0797U72\n0798W92 S079852 079T867 07V9874, 080R139 08R0146 R080144 080N111\n080M166 080Q132 08Q0138 0Q80128 Q080134 08P0130 SID/7772271240)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "1600"
            },
            "start_ts": "2025-01-02T00:00:00",
            "end_ts": "2025-01-02T16:00:00",
            "duration_min": 960
        },
        {
            "sid": "7772271242",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "080A038",
                "R033231"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0000",
                "lat": 60.81666666666667,
                "lon": 73.18333333333334,
                "raw": "-TITLE IDEP\n-SID 7772271242\n-ADD 250102\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 6049N07311E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1600",
                "lat": 60.81666666666667,
                "lon": 73.18333333333334,
                "raw": "-TITLE IARR\n-SID 7772271242\n-ADA 250102\n-ATA 1600\n-ADARR ZZZZ\n-ADARRZ 6049N07311E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0046/M0060 /ZONA MR076281/\n-ZZZZ1600\n-DEP/6049N07311E DEST/6049N07311E DOF/250102 EET/USTV0001 USRR0002\nOPR/ООО АЭРОСКАН REG/080A038 R033231 TYP/BLA RMK/МР076281 ПЫТЬ-ЯХ 2\nОПЕРАТОРЫ БВС 4УМАКОВ КИРИЛЛ ВЛАДИМИРОВИ4 89233017080,\nДРОЖЖИН ВЛАДИМИР ИВАНОВИ4 89292101303.\nВЫСОТА ПОЛЕТА 410-550М AGL 460-600М AMSL. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ\nПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ У4ЕТНЫЕ НОМЕРА БВС 080A038 R033231 0R33224\n0800G13 I079629 07W9988 0799S76 0N79905 079S966 0X79703 J079957\n0797U72 0798W92 S079852 079T867 07V9874 080R139 08R0146 R080144\n080N111 080M166 080Q132 08Q0138 0Q80128 Q080134 08P0130 SID/7772271242)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "1600"
            },
            "start_ts": "2025-01-02T00:00:00",
            "end_ts": "2025-01-02T16:00:00",
            "duration_min": 960
        },
        {
            "sid": "7772271243",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "080A038",
                "R033231"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0000",
                "lat": 60.46666666666667,
                "lon": 72.33333333333333,
                "raw": "-TITLE IDEP\n-SID 7772271243\n-ADD 250102\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 6028N07220E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "2359",
                "lat": 60.46666666666667,
                "lon": 72.33333333333333,
                "raw": "-TITLE IARR\n-SID 7772271243\n-ADA 250102\n-ATA 2359\n-ADARR ZZZZ\n-ADARRZ 6028N07220E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0035/M0039 /ZONA MR076279/\n-ZZZZ2359\n-DEP/6028N07220E DEST/6028N07220E DOF/250102 EET/USTV0001 USRR0002\nOPR/ООО АЭРОСКАН REG/080A038 R033231 TYP/BLA RMK/МР076279\nСЕНТЯБРЬСКИЙ 2 ОПЕРАТОРЫ БВС АЛЕКСАНДРОВ ДМИТРИЙ СЕРГЕЕВИ4\n89963162908. ВЫСОТА ПОЛЕТА 250-290М AGL 350-390М AMSL ВЗЛЕТ/ПОСАДКА\n602754N0722018E ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ\nУ4ЕТНЫЕ НОМЕРА БВС 080A038 R033231 0R33224 0800G13 I079629 07W9988\n0799S76 0N79905 079S966 0X79703 J079957 0797U72 0798W92 S079852\n079T867 07V9874 080R139 08R0146 R080144 080N111 080M166 080Q132\n08Q0138 0Q80128 Q080134 08P0130 SID/7772271243)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "2359"
            },
            "start_ts": "2025-01-02T00:00:00",
            "end_ts": "2025-01-02T23:59:00",
            "duration_min": 1439
        },
        {
            "sid": "7772271245",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "080A038",
                "R033231"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0000",
                "lat": 60.36666666666667,
                "lon": 72.13333333333334,
                "raw": "-TITLE IDEP\n-SID 7772271245\n-ADD 250102\n-ATD 0000\n-ADEP ZZZZ\n-ADEPZ 6022N07208E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "2359",
                "lat": 60.36666666666667,
                "lon": 72.13333333333334,
                "raw": "-TITLE IARR\n-SID 7772271245\n-ADA 250102\n-ATA 2359\n-ADARR ZZZZ\n-ADARRZ 6022N07208E\n-PAP 0\n-REG 080A038 R033231",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0000\n-M0047/M0060 /ZONA MR076278/\n-ZZZZ2359\n-DEP/6022N07208E DEST/6022N07208E DOF/250102 EET/USTV0001 USRR0002\nOPR/ООО АЭРОСКАН REG/080A038 R033231 TYP/BLA RMK/МР076278\nСЕНТЯБРЬСКИЙ ОПЕРАТОРЫ БВС АЛЕКСАНДРОВ ДМИТРИЙ СЕРГЕЕВИ4 89963162908.\nВЫСОТА ПОЛЕТА 370-500М AGL 470-600М AMSL ВЗЛЕТ/ПОСАДКА\n602137N0720753E ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ\nУ4ЕТНЫЕ НОМЕРА БВС 080A038 R033231 0R33224 0800G13 I079629 07W9988\n0799S76 0N79905 079S966 0X79703 J079957 0797U72 0798W92 S079852\n079T867 07V9874 080R139 08R0146 R080144 080N111 080M166 080Q132\n08Q0138 0Q80128 Q080134 08P0130 SID/7772271245)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0000",
                "window_end_hhmm": "2359"
            },
            "start_ts": "2025-01-02T00:00:00",
            "end_ts": "2025-01-02T23:59:00",
            "duration_min": 1439
        },
        {
            "sid": "7772271256",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": null,
            "regs": [
                "K079013"
            ],
            "dep": {
                "date": null,
                "time_hhmm": null,
                "lat": null,
                "lon": null,
                "raw": NaN,
                "region": null
            },
            "arr": {
                "date": "2025-01-01",
                "time_hhmm": "1600",
                "lat": 59.61666666666667,
                "lon": 69.33333333333333,
                "raw": "-TITLE IARR\n-SID 7772271256\n-ADA 250101\n-ATA 1600\n-ADARR ZZZZ\n-ADARRZ 5937N06920E\n-PAP 0\n-REG K079013",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0200\n-M0051/M0060 /ZONA MR076316/\n-ZZZZ1400\n-DEP/5937N06920E DEST/5937N06920E DOF/250101 EET/USTV0001 OPR/ООО\nАЭРОСКАН REG/K079013 TYP/BLA RMK/МР076316 БАТОВО НОВЫЙ БЕЗ ЗАХОДА В\nUSR1020 ОПЕРАТОР БВС КОТОРОВ ВЛАДИМИР ЕВГЕНЬЕВИ4 89225200113\nБОЛДУРИХИН МАКСИМ АНДРЕЕВИ4 89225200323.\nВЫСОТА ПОЛЕТА 460-550М AGL 510-600М AMSL. ТО4КИ ВЗЛЕТА/ПОСАДКИ\n593731С0691935В, 602421С0694908В. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ\nПРОИЗВОДЯТСЯ/ У4ЕТНЫЕ НОМЕРА БВС K079013 OK79004. SID/7772271256)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0200",
                "window_end_hhmm": "1400"
            },
            "start_ts": null,
            "end_ts": "2025-01-01T16:00:00",
            "duration_min": null
        },
        {
            "sid": "7772271257",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": null,
            "regs": [
                "K079013"
            ],
            "dep": {
                "date": null,
                "time_hhmm": null,
                "lat": null,
                "lon": null,
                "raw": NaN,
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1600",
                "lat": 59.61666666666667,
                "lon": 69.33333333333333,
                "raw": "-TITLE IARR\n-SID 7772271257\n-ADA 250102\n-ATA 1600\n-ADARR ZZZZ\n-ADARRZ 5937N06920E\n-PAP 0\n-REG K079013",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0200\n-M0051/M0060 /ZONA MR076316/\n-ZZZZ1400\n-DEP/5937N06920E DEST/5937N06920E DOF/250102 EET/USTV0001 OPR/ООО\nАЭРОСКАН REG/K079013 TYP/BLA RMK/МР076316 БАТОВО НОВЫЙ БЕЗ ЗАХОДА В\nUSR1020 ОПЕРАТОР БВС КОТОРОВ ВЛАДИМИР ЕВГЕНЬЕВИ4 89225200113\nБОЛДУРИХИН МАКСИМ АНДРЕЕВИ4 89225200323.\nВЫСОТА ПОЛЕТА 460-550М AGL 510-600М AMSL. ТО4КИ ВЗЛЕТА/ПОСАДКИ\n593731С0691935В, 602421С0694908В. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ\nПРОИЗВОДЯТСЯ/ У4ЕТНЫЕ НОМЕРА БВС K079013 OK79004. SID/7772271257)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0200",
                "window_end_hhmm": "1400"
            },
            "start_ts": null,
            "end_ts": "2025-01-02T16:00:00",
            "duration_min": null
        },
        {
            "sid": "7772271258",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": null,
            "regs": [
                "K079013"
            ],
            "dep": {
                "date": "2025-01-03",
                "time_hhmm": "0200",
                "lat": 59.61666666666667,
                "lon": 69.33333333333333,
                "raw": "-TITLE IDEP\n-SID 7772271258\n-ADD 250103\n-ATD 0200\n-ADEP ZZZZ\n-ADEPZ 5937N06920E\n-PAP 0\n-REG K079013",
                "region": null
            },
            "arr": {
                "date": "2025-01-03",
                "time_hhmm": "1600",
                "lat": 59.61666666666667,
                "lon": 69.33333333333333,
                "raw": "-TITLE IARR\n-SID 7772271258\n-ADA 250103\n-ATA 1600\n-ADARR ZZZZ\n-ADARRZ 5937N06920E\n-PAP 0\n-REG K079013",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0200\n-M0051/M0060 /ZONA MR076316/\n-ZZZZ1400\n-DEP/5937N06920E DEST/5937N06920E DOF/250103 EET/USTV0001 OPR/ООО\nАЭРОСКАН REG/K079013 TYP/BLA RMK/МР076316 БАТОВО НОВЫЙ БЕЗ ЗАХОДА В\nUSR1020 ОПЕРАТОР БВС КОТОРОВ ВЛАДИМИР ЕВГЕНЬЕВИ4 89225200113\nБОЛДУРИХИН МАКСИМ АНДРЕЕВИ4 89225200323.\nВЫСОТА ПОЛЕТА 460-550М AGL 510-600М AMSL. ТО4КИ ВЗЛЕТА/ПОСАДКИ\n593731С0691935В, 602421С0694908В. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ\nПРОИЗВОДЯТСЯ/ У4ЕТНЫЕ НОМЕРА БВС K079013 OK79004. SID/7772271258)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0200",
                "window_end_hhmm": "1400"
            },
            "start_ts": "2025-01-03T02:00:00",
            "end_ts": "2025-01-03T16:00:00",
            "duration_min": 840
        },
        {
            "sid": "7772271259",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": null,
            "regs": [
                "K079013"
            ],
            "dep": {
                "date": "2025-01-01",
                "time_hhmm": "0200",
                "lat": 59.61666666666667,
                "lon": 69.33333333333333,
                "raw": "-TITLE IDEP\n-SID 7772271259\n-ADD 250101\n-ATD 0200\n-ADEP ZZZZ\n-ADEPZ 5937N06920E\n-PAP 0\n-REG K079013",
                "region": null
            },
            "arr": {
                "date": null,
                "time_hhmm": null,
                "lat": null,
                "lon": null,
                "raw": NaN,
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0200\n-M0045/M0060 /ZONA WR16589/\n-ZZZZ1400\n-DEP/5937N06920E DEST/5937N06920E DOF/250101 EET/USTV0001 OPR/ООО\nАЭРОСКАН REG/K079013 TYP/BLA RMK/ВР16589 БАТОВО 2 ЦЕЛЬ ПОЛЕТОВ:\nВОЗДУШНОЕ ПАТРУЛИРОВАНИЕ ТРУБОПРОВОДОВ ООО АЭРОСКАН. ОПЕРАТОР БВС\nКОТОРОВ ВЛАДИМИР ЕВГЕНЬЕВИ4 89225200113 БОЛДУРИХИН МАКСИМ АНДРЕЕВИ4\n89225200323.\nВЫСОТА ПОЛЕТА 400-550М AGL 450-600М AMSL. ТО4КИ ВЗЛЕТА/ПОСАДКИ\nОБЕСПЕ4ИВАЮТСЯ УСТАНОВЛЕННЫМ МР076316 593731С0691935В\n602421С0694908В. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ/\nУ4ЕТНЫЕ НОМЕРА БВС K079013 OK79004. SID/7772271259)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0200",
                "window_end_hhmm": "1400"
            },
            "start_ts": "2025-01-01T02:00:00",
            "end_ts": null,
            "duration_min": null
        },
        {
            "sid": "7772271261",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": null,
            "regs": [
                "K079013"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0200",
                "lat": 59.61666666666667,
                "lon": 69.33333333333333,
                "raw": "-TITLE IDEP\n-SID 7772271261\n-ADD 250102\n-ATD 0200\n-ADEP ZZZZ\n-ADEPZ 5937N06920E\n-PAP 0\n-REG K079013",
                "region": null
            },
            "arr": {
                "date": null,
                "time_hhmm": null,
                "lat": null,
                "lon": null,
                "raw": NaN,
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0200\n-M0045/M0060 /ZONA WR16589/\n-ZZZZ1400\n-DEP/5937N06920E DEST/5937N06920E DOF/250102 EET/USTV0001 OPR/ООО\nАЭРОСКАН REG/K079013 TYP/BLA RMK/ВР16589 БАТОВО 2 ЦЕЛЬ ПОЛЕТОВ:\nВОЗДУШНОЕ ПАТРУЛИРОВАНИЕ ТРУБОПРОВОДОВ ООО АЭРОСКАН. ОПЕРАТОР БВС\nКОТОРОВ ВЛАДИМИР ЕВГЕНЬЕВИ4 89225200113 БОЛДУРИХИН МАКСИМ АНДРЕЕВИ4\n89225200323.\nВЫСОТА ПОЛЕТА 400-550М AGL 450-600М AMSL. ТО4КИ ВЗЛЕТА/ПОСАДКИ\nОБЕСПЕ4ИВАЮТСЯ УСТАНОВЛЕННЫМ МР076316 593731С0691935В\n602421С0694908В. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ/\nУ4ЕТНЫЕ НОМЕРА БВС K079013 OK79004. SID/7772271261)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0200",
                "window_end_hhmm": "1400"
            },
            "start_ts": "2025-01-02T02:00:00",
            "end_ts": null,
            "duration_min": null
        },
        {
            "sid": "7772271262",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": null,
            "regs": [
                "K079013"
            ],
            "dep": {
                "date": null,
                "time_hhmm": null,
                "lat": null,
                "lon": null,
                "raw": NaN,
                "region": null
            },
            "arr": {
                "date": "2025-01-03",
                "time_hhmm": "1540",
                "lat": 59.61666666666667,
                "lon": 69.33333333333333,
                "raw": "-TITLE IARR\n-SID 7772271262\n-ADA 250103\n-ATA 1540\n-ADARR ZZZZ\n-ADARRZ 5937N06920E\n-PAP 0\n-REG K079013",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0200\n-M0045/M0060 /ZONA WR16589/\n-ZZZZ1400\n-DEP/5937N06920E DEST/5937N06920E DOF/250103 EET/USTV0001 OPR/ООО\nАЭРОСКАН REG/K079013 TYP/BLA RMK/ВР16589 БАТОВО 2 ЦЕЛЬ ПОЛЕТОВ:\nВОЗДУШНОЕ ПАТРУЛИРОВАНИЕ ТРУБОПРОВОДОВ ООО АЭРОСКАН. ОПЕРАТОР БВС\nКОТОРОВ ВЛАДИМИР ЕВГЕНЬЕВИ4 89225200113 БОЛДУРИХИН МАКСИМ АНДРЕЕВИ4\n89225200323.\nВЫСОТА ПОЛЕТА 400-550М AGL 450-600М AMSL. ТО4КИ ВЗЛЕТА/ПОСАДКИ\nОБЕСПЕ4ИВАЮТСЯ УСТАНОВЛЕННЫМ МР076316 593731С0691935В\n602421С0694908В. ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ/\nУ4ЕТНЫЕ НОМЕРА БВС K079013 OK79004. SID/7772271262)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0200",
                "window_end_hhmm": "1400"
            },
            "start_ts": null,
            "end_ts": "2025-01-03T15:40:00",
            "duration_min": null
        },
        {
            "sid": "7772271274",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0809I97"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0300",
                "lat": 64.33333333333333,
                "lon": 75.58333333333333,
                "raw": "-TITLE IDEP\n-SID 7772271274\n-ADD 250102\n-ATD 0300\n-ADEP ZZZZ\n-ADEPZ 6420N07535E\n-PAP 0\n-REG 0809I97",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1500",
                "lat": 64.33333333333333,
                "lon": 75.58333333333333,
                "raw": "-TITLE IARR\n-SID 7772271274\n-ADA 250102\n-ATA 1500\n-ADARR ZZZZ\n-ADARRZ 6420N07535E\n-PAP 0\n-REG 0809I97",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0300\n-M0035/M0045 /ZONA MR076384/\n-ZZZZ2059\n-DEP/6420N07535E DEST/6420N07535E DOF/250102 EET/USTV0001 USDS0002\nUSMM0003 OPR/ООО АЭРОСКАН REG/0809I97 TYP/BLA RMK/MР076384\nБАРСУКОВСКОЕ 2. ОПЕРАТОРЫ БВС ВАГАПОВ 89225200649 ПО4ИНОВ 89124600742\nДУБОВЦЕВ 89821225121 ПРИБЫТКОВ 89295825859 ТУДАНОВ 89295844074БУНД\n89295089868 БАСМАНОВСКИЙ 89804213143. ПОЛЕТ В РАЙОНЕ 300-400М AGL\n350-450М AMSL ТО4КИ ВЗЛЕТА ПОСАДКИ ГТ1 641934N0753443E ГТ2\n641648N0753514E ГТ3 641755N0755618E ГТ4 643512N0753359E ГТ5\n644820N0752941E Г.Т.6 641815N0754640E Г.Т.7 642305N0753345E У4ЕТНЫЕ\nНОМЕРА БВС 0809I97 08J0902 0809J04 0K80903 ПОЛЕТЫ НАД НАСЕЛЕННЫМИ\nПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ. SID/7772271274)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0300",
                "window_end_hhmm": "2059"
            },
            "start_ts": "2025-01-02T03:00:00",
            "end_ts": "2025-01-02T15:00:00",
            "duration_min": 720
        },
        {
            "sid": "7772271275",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0809I97"
            ],
            "dep": {
                "date": "2025-01-03",
                "time_hhmm": "0300",
                "lat": 64.33333333333333,
                "lon": 75.58333333333333,
                "raw": "-TITLE IDEP\n-SID 7772271275\n-ADD 250103\n-ATD 0300\n-ADEP ZZZZ\n-ADEPZ 6420N07535E\n-PAP 0\n-REG 0809I97",
                "region": null
            },
            "arr": {
                "date": "2025-01-03",
                "time_hhmm": "1815",
                "lat": 64.33333333333333,
                "lon": 75.58333333333333,
                "raw": "-TITLE IARR\n-SID 7772271275\n-ADA 250103\n-ATA 1815\n-ADARR ZZZZ\n-ADARRZ 6420N07535E\n-PAP 0\n-REG 0809I97",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0300\n-M0035/M0045 /ZONA MR076384/\n-ZZZZ2059\n-DEP/6420N07535E DEST/6420N07535E DOF/250103 EET/USTV0001 USDS0002\nUSMM0003 OPR/ООО АЭРОСКАН REG/0809I97 TYP/BLA RMK/MР076384\nБАРСУКОВСКОЕ 2. ОПЕРАТОРЫ БВС ВАГАПОВ 89225200649 ПО4ИНОВ 89124600742\nДУБОВЦЕВ 89821225121 ПРИБЫТКОВ 89295825859 ТУДАНОВ 89295844074БУНД\n89295089868 БАСМАНОВСКИЙ 89804213143. ПОЛЕТ В РАЙОНЕ 300-400М AGL\n350-450М AMSL ТО4КИ ВЗЛЕТА ПОСАДКИ ГТ1 641934N0753443E ГТ2\n641648N0753514E ГТ3 641755N0755618E ГТ4 643512N0753359E ГТ5\n644820N0752941E Г.Т.6 641815N0754640E Г.Т.7 642305N0753345E У4ЕТНЫЕ\nНОМЕРА БВС 0809I97 08J0902 0809J04 0K80903 ПОЛЕТЫ НАД НАСЕЛЕННЫМИ\nПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ. SID/7772271275)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0300",
                "window_end_hhmm": "2059"
            },
            "start_ts": "2025-01-03T03:00:00",
            "end_ts": "2025-01-03T18:15:00",
            "duration_min": 915
        },
        {
            "sid": "7772271276",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "08J0902"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0300",
                "lat": 64.9,
                "lon": 75.56666666666666,
                "raw": "-TITLE IDEP\n-SID 7772271276\n-ADD 250102\n-ATD 0300\n-ADEP ZZZZ\n-ADEPZ 6454N07534E\n-PAP 0\n-REG 08J0902",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1500",
                "lat": 64.9,
                "lon": 75.56666666666666,
                "raw": "-TITLE IARR\n-SID 7772271276\n-ADA 250102\n-ATA 1500\n-ADARR ZZZZ\n-ADARRZ 6454N07534E\n-PAP 0\n-REG 08J0902",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0300\n-M0035/M0048 /ZONA MR076381/\n-ZZZZ2059\n-DEP/6454N07534E DEST/6454N07534E DOF/250102 EET/USTV0001 USDS0002\nOPR/ООО АЭРОСКАН REG/08J0902 TYP/BLA RMK/MР076381 ПУРПЕ 4. ОПЕРАТОРЫ\nБВС ВАГАПОВ 89225200649 ПО4ИНОВ 89124600742 ДУБОВЦЕВ 89821225121\nПРИБЫТКОВ 89295825859 ТУДАНОВ 89295844074БУНД 89295089868\nБАСМАНОВСКИЙ 89804213143 ПОЛЕТ В РАЙОНЕ 250-380М AGL 350-480М AMSL\nУ4ЕТНЫЕ НОМЕРА БВС 08J0902 0809I97 0809J04 0K80903 ПОЛЕТЫ НАД\nНАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ. SID/7772271276)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0300",
                "window_end_hhmm": "2059"
            },
            "start_ts": "2025-01-02T03:00:00",
            "end_ts": "2025-01-02T15:00:00",
            "duration_min": 720
        },
        {
            "sid": "7772271277",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "08J0902"
            ],
            "dep": {
                "date": "2025-01-03",
                "time_hhmm": "0300",
                "lat": 64.9,
                "lon": 75.56666666666666,
                "raw": "-TITLE IDEP\n-SID 7772271277\n-ADD 250103\n-ATD 0300\n-ADEP ZZZZ\n-ADEPZ 6454N07534E\n-PAP 0\n-REG 08J0902",
                "region": null
            },
            "arr": {
                "date": "2025-01-03",
                "time_hhmm": "1815",
                "lat": 64.9,
                "lon": 75.56666666666666,
                "raw": "-TITLE IARR\n-SID 7772271277\n-ADA 250103\n-ATA 1815\n-ADARR ZZZZ\n-ADARRZ 6454N07534E\n-PAP 0\n-REG 08J0902",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0300\n-M0035/M0048 /ZONA MR076381/\n-ZZZZ2059\n-DEP/6454N07534E DEST/6454N07534E DOF/250103 EET/USTV0001 USDS0002\nOPR/ООО АЭРОСКАН REG/08J0902 TYP/BLA RMK/MР076381 ПУРПЕ 4. ОПЕРАТОРЫ\nБВС ВАГАПОВ 89225200649 ПО4ИНОВ 89124600742 ДУБОВЦЕВ 89821225121\nПРИБЫТКОВ 89295825859 ТУДАНОВ 89295844074БУНД 89295089868\nБАСМАНОВСКИЙ 89804213143 ПОЛЕТ В РАЙОНЕ 250-380М AGL 350-480М AMSL\nУ4ЕТНЫЕ НОМЕРА БВС 08J0902 0809I97 0809J04 0K80903 ПОЛЕТЫ НАД\nНАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ. SID/7772271277)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0300",
                "window_end_hhmm": "2059"
            },
            "start_ts": "2025-01-03T03:00:00",
            "end_ts": "2025-01-03T18:15:00",
            "duration_min": 915
        },
        {
            "sid": "7772271279",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0809J04"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0300",
                "lat": 64.6,
                "lon": 76.6,
                "raw": "-TITLE IDEP\n-SID 7772271279\n-ADD 250102\n-ATD 0300\n-ADEP ZZZZ\n-ADEPZ 6436N07636E\n-PAP 0\n-REG 0809J04",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1500",
                "lat": 64.6,
                "lon": 76.6,
                "raw": "-TITLE IARR\n-SID 7772271279\n-ADA 250102\n-ATA 1500\n-ADARR ZZZZ\n-ADARRZ 6436N07636E\n-PAP 0\n-REG 0809J04",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0300\n-M0035/M0040 /ZONA MR076402/\n-ZZZZ2059\n-DEP/6436N07636E DEST/6436N07636E DOF/250102 EET/USTV0001 USDS0002\nOPR/ООО АЭРОСКАН REG/0809J04 TYP/BLA RMK/MР076402 ПУРПЕ 2. ОПЕРАТОРЫ\nБВС ВАГАПОВ 89225200649 ПО4ИНОВ 89124600742 ДУБОВЦЕВ 89821225121\nПРИБЫТКОВ 89295825859 ТУДАНОВ 89295844074 БУНД 89295089868\nБАСМАНОВСКИЙ 89804213143 ПОЛЕТ В РАЙОНЕ 300-350М AGL 350-400М AMSL\nУ4ЕТНЫЕ НОМЕРА БВС 0809J04 0809I97 08J0902 0K80903 ПОЛЕТЫ НАД\nНАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ. SID/7772271279)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0300",
                "window_end_hhmm": "2059"
            },
            "start_ts": "2025-01-02T03:00:00",
            "end_ts": "2025-01-02T15:00:00",
            "duration_min": 720
        },
        {
            "sid": "7772271280",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0809J04"
            ],
            "dep": {
                "date": "2025-01-03",
                "time_hhmm": "0300",
                "lat": 64.6,
                "lon": 76.6,
                "raw": "-TITLE IDEP\n-SID 7772271280\n-ADD 250103\n-ATD 0300\n-ADEP ZZZZ\n-ADEPZ 6436N07636E\n-PAP 0\n-REG 0809J04",
                "region": null
            },
            "arr": {
                "date": "2025-01-03",
                "time_hhmm": "1815",
                "lat": 64.6,
                "lon": 76.6,
                "raw": "-TITLE IARR\n-SID 7772271280\n-ADA 250103\n-ATA 1815\n-ADARR ZZZZ\n-ADARRZ 6436N07636E\n-PAP 0\n-REG 0809J04",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0300\n-M0035/M0040 /ZONA MR076402/\n-ZZZZ2059\n-DEP/6436N07636E DEST/6436N07636E DOF/250103 EET/USTV0001 USDS0002\nOPR/ООО АЭРОСКАН REG/0809J04 TYP/BLA RMK/MР076402 ПУРПЕ 2. ОПЕРАТОРЫ\nБВС ВАГАПОВ 89225200649 ПО4ИНОВ 89124600742 ДУБОВЦЕВ 89821225121\nПРИБЫТКОВ 89295825859 ТУДАНОВ 89295844074 БУНД 89295089868\nБАСМАНОВСКИЙ 89804213143 ПОЛЕТ В РАЙОНЕ 300-350М AGL 350-400М AMSL\nУ4ЕТНЫЕ НОМЕРА БВС 0809J04 0809I97 08J0902 0K80903 ПОЛЕТЫ НАД\nНАСЕЛЕННЫМИ ПУНКТАМИ НЕ ПРОИЗВОДЯТСЯ. SID/7772271280)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0300",
                "window_end_hhmm": "2059"
            },
            "start_ts": "2025-01-03T03:00:00",
            "end_ts": "2025-01-03T18:15:00",
            "duration_min": 915
        },
        {
            "sid": "7772271281",
            "center_name": "Тюменский",
            "uav_type": "BLA",
            "operator": "ООО",
            "regs": [
                "0809J04"
            ],
            "dep": {
                "date": "2025-01-02",
                "time_hhmm": "0300",
                "lat": 64.46666666666667,
                "lon": 76.83333333333333,
                "raw": "-TITLE IDEP\n-SID 7772271281\n-ADD 250102\n-ATD 0300\n-ADEP ZZZZ\n-ADEPZ 6428N07650E\n-PAP 0\n-REG 0809J04",
                "region": null
            },
            "arr": {
                "date": "2025-01-02",
                "time_hhmm": "1500",
                "lat": 64.46666666666667,
                "lon": 76.83333333333333,
                "raw": "-TITLE IARR\n-SID 7772271281\n-ADA 250102\n-ATA 1500\n-ADARR ZZZZ\n-ADARRZ 6428N07650E\n-PAP 0\n-REG 0809J04",
                "region": null
            },
            "shr": {
                "raw": "(SHR-ZZZZZ\n-ZZZZ0300\n-M0035/M0045 /ZONA MR076382/\n-ZZZZ2059\n-DEP/6428N07650E DEST/6428N07650E DOF/250102 EET/USTV0001 USDS0002\nOPR/ООО АЭРОСКАН REG/0809J04 TYP/BLA RMK/MР076382 ПУРПЕ 5. ОПЕРАТОРЫ\nБВС ВАГАПОВ 89225200649 ПО4ИНОВ 89124600742 ДУБОВЦЕВ 89821225121\nПРИБЫТКОВ 89295825859 ТУДАНОВ 89295844074 БУНД 89295089868\nБАСМАНОВСКИЙ 89804213143 ПОЛЕТ В РАЙОНЕ 300-400М AGL 350-450М AMSL\nТО4КИ ВЗЛЕТА/ПОСАДКИ 642835N0764445E\n642307N0772400E 642722N0770427E 642820N0764959E. У4ЕТНЫЕ НОМЕРА БВС\n0809J04 0809I97 08J0902 0K809030 ПОЛЕТЫ НАД НАСЕЛЕННЫМИ ПУНКТАМИ НЕ\nПРОИЗВОДЯТСЯ. SID/7772271281)",
                "zone_radius_nm": null,
                "zone_center_lat": null,
                "zone_center_lon": null,
                "window_start_hhmm": "0300",
                "window_end_hhmm": "2059"
            },
            "start_ts": "2025-01-02T03:00:00",
            "end_ts": "2025-01-02T15:00:00",
            "duration_min": 720
        }
    ]
}