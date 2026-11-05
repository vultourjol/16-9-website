module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/src/i18n/LanguageProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/translations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    lang: "ru",
    setLang: ()=>{},
    t: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"].ru
});
function LanguageProvider({ children }) {
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return "ru";
        //TURBOPACK unreachable
        ;
        const stored = undefined;
    });
    const setLang = (next)=>{
        setLangState(next);
        window.localStorage.setItem("lang", next);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            lang,
            setLang,
            t: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$translations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][lang]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/i18n/LanguageProvider.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
}
}),
"[project]/src/i18n/translations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "translations",
    ()=>translations
]);
const ru = {
    header: {
        logo: "16/9 ТВОРЧЕСКАЯ МАСТЕРСКАЯ",
        navLabel: "Разделы",
        nav: [
            "Главная",
            "О студии",
            "Шоурум",
            "Партнёры",
            "FAQ",
            "Контакты"
        ],
        ariaLogo: "На главную",
        ariaMenuOpen: "Открыть меню",
        ariaMenuClose: "Закрыть меню",
        langLabel: "EN"
    },
    hero: {
        kicker: "Профессиональная видеостудия",
        title1: "Каждый кадр —",
        title2: "история",
        desc: "Видеопроизводство, прямые трансляции и монтаж для брендов, которые хотят быть услышанными.",
        cta: "Узнать больше",
        scroll: "Скролл"
    },
    about: {
        kicker: "О студии",
        title1: "Мы создаём",
        title2: "визуальные",
        title3: "истории",
        desc: "— команда профессионалов, влюблённых в своё дело. Мы превращаем идеи в кинематографичные образы, которые остаются в памяти.",
        stats: [
            {
                value: "200+",
                label: "Проектов завершено"
            },
            {
                value: "8",
                label: "Лет на рынке"
            },
            {
                value: "50+",
                label: "Довольных клиентов"
            },
            {
                value: "24/7",
                label: "Поддержка"
            }
        ],
        services: [
            {
                title: "Видеопроизводство",
                desc: "Полный цикл создания видео: от концепции до финального продукта. Рекламные ролики, корпоративные фильмы, документальные проекты."
            },
            {
                title: "Live трансляции",
                desc: "Организация прямых эфиров любой сложности. Конференции, концерты, презентации с профессиональным оборудованием и командой."
            },
            {
                title: "Монтаж и постпродакшн",
                desc: "Профессиональный монтаж, цветокоррекция, звуковое оформление и графика. Ваш контент заиграет новыми красками."
            }
        ],
        imgAlt: "Камера в студии",
        team: {
            kicker: "Команда",
            title1: "Люди за",
            title2: "кадром",
            desc: "Каждый проект делает команда профессионалов. Нажмите на роль, чтобы заглянуть на съёмочную площадку.",
            photoAlt: "Фото с площадки",
            members: [
                {
                    role: "Режиссёр",
                    desc: "Создаёт концепцию, руководит съёмочной группой и отвечает за смысл каждого кадра."
                },
                {
                    role: "Оператор",
                    desc: "Свет, композиция и движение камеры — его почерк. Умеет снять историю без лишних дублей."
                },
                {
                    role: "Звукорежиссёр",
                    desc: "Записывает и сводит чистый звук: от диалогов до фоновой атмосферы площадки."
                },
                {
                    role: "Режиссёр монтажа",
                    desc: "Собирает историю в финальный продукт, задаёт ритм и динамику повествования."
                },
                {
                    role: "Продакшн-менеджер",
                    desc: "Организует процесс: от брифа и сметы до сдачи проекта точно в срок."
                }
            ]
        },
        process: {
            title1: "Как мы",
            title2: "работаем",
            desc: "Разложили процесс по направлениям: от первого брифа до сдачи проекта.",
            items: [
                {
                    title: "Видеопроизводство",
                    steps: [
                        {
                            title: "Бриф и концепция",
                            text: "Разбираем задачу, бренд и аудиторию. Готовим идею, сценарий и визуальное решение."
                        },
                        {
                            title: "Подготовка и смета",
                            text: "Составляем план съёмок, подбираем площадку и команду, фиксируем смету и сроки."
                        },
                        {
                            title: "Съёмочный день",
                            text: "Проводим съёмку: свет, звук, режиссура кадра, постановочные и репортажные дубли."
                        },
                        {
                            title: "Постпродакшн",
                            text: "Монтаж, цветокоррекция, звуковое оформление и графика. Согласуем финальную версию."
                        },
                        {
                            title: "Сдача проекта",
                            text: "Передаём исходники и адаптивы для соцсетей, ТВ и стриминга."
                        }
                    ]
                },
                {
                    title: "Live-трансляции",
                    steps: [
                        {
                            title: "Формат и задача",
                            text: "Обсуждаем формат: конференция, концерт или презентация. Определяем число камер и точек выхода."
                        },
                        {
                            title: "Схема и площадка",
                            text: "Готовим схему сигналов, настраиваем связь и интернет-каналы с резервированием."
                        },
                        {
                            title: "Репетиция",
                            text: "Прогоняем переключения, свет и звук. Проверяем дублирующие каналы и схему восстановления."
                        },
                        {
                            title: "Эфир",
                            text: "Ведём трансляцию в реальном времени: операторы, режиссёр переключений, звук и техподдержка."
                        },
                        {
                            title: "Запись и отчёт",
                            text: "Отдаём запись эфира, статистику просмотров и материалы для дальнейшего использования."
                        }
                    ]
                },
                {
                    title: "Монтаж и постпродакшн",
                    steps: [
                        {
                            title: "Разбор материала",
                            text: "Отбираем сильные дубли, систематизируем материал и намечаем структуру будущего видео."
                        },
                        {
                            title: "Черновой монтаж",
                            text: "Собираем черновик: хронология, ритм, ключевые моменты. Согласуем с заказчиком."
                        },
                        {
                            title: "Цвет и звук",
                            text: "Цветокоррекция, чистка и сведение звука, подбор музыки и звуковых эффектов."
                        },
                        {
                            title: "Графика и титры",
                            text: "Добавляем графику, титры, логотипы и динамические элементы в фирменном стиле."
                        },
                        {
                            title: "Финальная версия",
                            text: "Экспортируем в нужных форматах и адаптивах, передаём исходники проекта."
                        }
                    ]
                }
            ]
        },
        setReel: {
            title1: "Шоурил",
            title2: "площадки",
            desc: "Так выглядит рабочая кухня: от установки света до финального дубля. Загляните за кадр.",
            photoLabel: "Фото с площадки",
            items: [
                {
                    caption: "Настройка света"
                },
                {
                    caption: "Работа с камерой"
                },
                {
                    caption: "Звук на площадке"
                },
                {
                    caption: "Режиссёрский монитор"
                },
                {
                    caption: "Съёмочный день"
                },
                {
                    caption: "Прямой эфир"
                }
            ]
        },
        benefits: {
            kicker: "Преимущества",
            title: "Что получает заказчик",
            items: [
                {
                    title: "Качественный звук",
                    desc: "Чистая запись и сведение — идеальный звук на любой площадке."
                },
                {
                    title: "Презентации для конференций",
                    desc: "Готовые материалы, которые сразу готовы к показу на экране."
                },
                {
                    title: "Продуманный кадр",
                    desc: "Каждый ракурс выверен: композиция, свет и движение камеры."
                },
                {
                    title: "Цельный эфир",
                    desc: "Переключение, графика и звук сходятся в один готовый продукт."
                },
                {
                    title: "Своя техника",
                    desc: "Камеры, свет и звук — не нужно дополнительное оборудование."
                },
                {
                    title: "Полный цикл",
                    desc: "От идеи до финального файла — один исполнитель на всех этапах."
                }
            ]
        }
    },
    showreel: {
        kicker: "Шоурум",
        title1: "Наши",
        title2: "работы",
        desc: "Раздел пополняется. Здесь появятся видео и фотоматериалы лучших проектов студии.",
        photoKicker: "Фотоработы",
        videoSoon: "Видео скоро",
        photoSoon: "Фото скоро",
        videos: [
            {
                label: "Рекламный ролик",
                tag: "Видеопроизводство"
            },
            {
                label: "Корпоративный фильм",
                tag: "Постпродакшн"
            },
            {
                label: "Live-трансляция",
                tag: "Live-стриминг"
            },
            {
                label: "Документальный проект",
                tag: "Видеопроизводство"
            }
        ],
        photos: [
            {
                label: "Студийная съёмка",
                tag: "Фото"
            },
            {
                label: "Event-фотография",
                tag: "Фото"
            },
            {
                label: "Портретная съёмка",
                tag: "Фото"
            }
        ],
        ctaTitle: "Хотите стать частью нашего портфолио?",
        cta: "Обсудить проект",
        close: "Закрыть"
    },
    partners: {
        kicker: "Партнёры",
        title1: "Наши",
        title2: "партнёры",
        desc: "Бренды и компании, с которыми мы работаем вместе.",
        logoPlaceholder: "Логотип"
    },
    faq: {
        kicker: "FAQ",
        title1: "Частые",
        title2: "вопросы",
        items: [
            {
                q: "Какие услуги оказывает студия?",
                a: "Видеопроизводство полного цикла — от идеи и сценария до монтажа и постпродакшна, а также прямые трансляции и профессиональная фотосъёмка."
            },
            {
                q: "Сколько стоит создание видеоролика?",
                a: "Стоимость зависит от формата, длительности, количества съёмочных дней и сложности постпродакшна. После брифа подготовим смету и предложим несколько вариантов решения."
            },
            {
                q: "Как проходит работа над проектом?",
                a: "Сначала бриф и обсуждение идеи, затем сценарий и смета. Далее — съёмка, монтаж и согласование. По итогам передаём исходники и адаптивы для разных площадок."
            },
            {
                q: "Сколько времени занимает проект?",
                a: "Рекламный ролик — обычно 2–4 недели с момента утверждения технического задания. Сложные корпоративные и документальные проекты — дольше. Сроки фиксируются в договоре."
            },
            {
                q: "У вас есть своё оборудование?",
                a: "Да, мы располагаем собственным парком камер, света и звука, а также работаем с проверенными площадками для студийных съёмок и трансляций."
            },
            {
                q: "Работаете ли вы с частными лицами?",
                a: "Да, мы работаем и с брендами, и с частными заказчиками по одинаковой схеме: бриф, смета, договор и результат в оговорённый срок."
            }
        ]
    },
    contact: {
        kicker: "Контакты",
        title1: "Давайте",
        title2: "создадим",
        title3: "вместе",
        email: "Email",
        phone: "Телефон",
        address: "Адрес",
        addressValue: "Москва, ул. Порядковый переулок, д. 21",
        hours: "Режим работы",
        hoursValue1: "Пн – Пт: 10:00 — 19:00",
        hoursValue2: "Сб: по договорённости",
        social: "Мы в сети",
        copy: "Копировать адрес",
        copied: "Скопировано",
        form: {
            kicker: "Форма обратной связи",
            name: "Имя *",
            namePh: "Иванов Иван Иванович",
            email: "Email *",
            emailPh: "вашапочта@пример.ru",
            phone: "Телефон",
            phonePh: "+7 (999) 000-00-00",
            service: "Услуга",
            servicePh: "Выберите услугу",
            message: "Сообщение",
            messagePh: "Расскажите о вашем проекте...",
            submit: "Отправить заявку",
            sending: "Отправка...",
            successTitle: "Сообщение отправлено",
            successDesc: "Спасибо за обращение! Мы свяжемся с вами в течение рабочего дня.",
            sendAnother: "Отправить ещё",
            services: [
                "Видеопроизводство",
                "Live-трансляция",
                "Монтаж и постпродакшн",
                "Фотосъёмка",
                "Комплексный проект"
            ]
        }
    },
    footer: {
        copyright: "16/9 ТВОРЧЕСКАЯ МАСТЕРСКАЯ",
        privacy: "Политика конфиденциальности",
        offer: "Договор оферты",
        credits: "Накодил"
    },
    notFound: {
        kicker: "404 · Ошибка",
        desc: "Страница не найдена. Похоже, этот кадр остался в монтажной комнате.",
        cta: "На главную"
    }
};
const en = {
    header: {
        logo: "16/9 CREATIVE STUDIO",
        navLabel: "Sections",
        nav: [
            "Home",
            "About",
            "Showreel",
            "Partners",
            "FAQ",
            "Contacts"
        ],
        ariaLogo: "Go to home",
        ariaMenuOpen: "Open menu",
        ariaMenuClose: "Close menu",
        langLabel: "RU"
    },
    hero: {
        kicker: "Professional video studio",
        title1: "Every frame —",
        title2: "a story",
        desc: "Video production, live streaming and editing for brands that want to be heard.",
        cta: "Learn more",
        scroll: "Scroll"
    },
    about: {
        kicker: "About the studio",
        title1: "We create",
        title2: "visual",
        title3: "stories",
        desc: "is a team of professionals in love with their craft. We turn ideas into cinematic images that stay in your memory.",
        stats: [
            {
                value: "200+",
                label: "Projects completed"
            },
            {
                value: "8",
                label: "Years on the market"
            },
            {
                value: "50+",
                label: "Happy clients"
            },
            {
                value: "24/7",
                label: "Support"
            }
        ],
        services: [
            {
                title: "Video production",
                desc: "Full video production cycle: from concept to the final product. Commercials, corporate films, documentary projects."
            },
            {
                title: "Live streaming",
                desc: "Live broadcasts of any complexity. Conferences, concerts, presentations with professional equipment and team."
            },
            {
                title: "Editing & post-production",
                desc: "Professional editing, color grading, sound design and graphics. Your content will shine."
            }
        ],
        imgAlt: "Camera in the studio",
        team: {
            kicker: "Team",
            title1: "People behind",
            title2: "the scenes",
            desc: "Every project is made by a team of professionals. Click a role to step onto the set.",
            photoAlt: "Photo from the set",
            members: [
                {
                    role: "Director",
                    desc: "Builds the creative concept, leads the film crew and is responsible for the meaning of every frame."
                },
                {
                    role: "Camera operator",
                    desc: "Light, composition and camera movement are his signature. Can shoot a story without extra takes."
                },
                {
                    role: "Sound engineer",
                    desc: "Records and mixes clean sound: from dialogue to the atmosphere of the set."
                },
                {
                    role: "Editor",
                    desc: "Assembles the story into the final product, setting the rhythm and pace of the narrative."
                },
                {
                    role: "Production manager",
                    desc: "Organizes the process: from brief and quote to on-time project delivery."
                }
            ]
        },
        process: {
            title1: "How we",
            title2: "work",
            desc: "Breaking the process down by service — from the first brief to project delivery.",
            items: [
                {
                    title: "Video production",
                    steps: [
                        {
                            title: "Brief & concept",
                            text: "We dig into the task, brand and audience. We prepare the idea, script and visual solution."
                        },
                        {
                            title: "Planning & budget",
                            text: "We build the shooting plan, pick the location and crew, and fix the quote and timeline."
                        },
                        {
                            title: "Shooting day",
                            text: "We shoot: light, sound, direction for every frame, both staged and documentary takes."
                        },
                        {
                            title: "Post-production",
                            text: "Editing, color grading, sound design and graphics. We approve the final cut."
                        },
                        {
                            title: "Delivery",
                            text: "We hand over source files and adapts for social, TV and streaming."
                        }
                    ]
                },
                {
                    title: "Live streaming",
                    steps: [
                        {
                            title: "Format & goals",
                            text: "We discuss the format: conference, concert or presentation. We pick the camera count and output points."
                        },
                        {
                            title: "Setup & venue",
                            text: "We build the signal diagram, configure connectivity and redundant internet channels."
                        },
                        {
                            title: "Rehearsal",
                            text: "We run through camera switching, light and sound, and test recovery channels."
                        },
                        {
                            title: "Live event",
                            text: "We run the stream in real time: operators, the switcher director, sound and tech support."
                        },
                        {
                            title: "Recording & report",
                            text: "We deliver the stream recording, viewer stats and footage for future use."
                        }
                    ]
                },
                {
                    title: "Editing & post-production",
                    steps: [
                        {
                            title: "Reviewing footage",
                            text: "We pick the strongest takes, organize the material and outline the video structure."
                        },
                        {
                            title: "Rough cut",
                            text: "We assemble a draft: chronology, rhythm, key moments. Approved with the client."
                        },
                        {
                            title: "Color & sound",
                            text: "Color grading, audio cleanup and mixing, music and sound effects selection."
                        },
                        {
                            title: "Graphics & titles",
                            text: "We add graphics, titles, logos and motion elements in the brand style."
                        },
                        {
                            title: "Final cut",
                            text: "We export in required formats and adapts, and hand over the project files."
                        }
                    ]
                }
            ]
        },
        setReel: {
            title1: "On-set",
            title2: "showreel",
            desc: "This is how it actually looks backstage: from rigging lights to the final take. Step behind the camera.",
            photoLabel: "Photo from the set",
            items: [
                {
                    caption: "Rigging lights"
                },
                {
                    caption: "Behind the camera"
                },
                {
                    caption: "Sound on set"
                },
                {
                    caption: "Director's monitor"
                },
                {
                    caption: "Shooting day"
                },
                {
                    caption: "Live broadcast"
                }
            ]
        },
        benefits: {
            kicker: "Benefits",
            title: "What the client gets",
            items: [
                {
                    title: "Quality sound",
                    desc: "Clean recording and mixing — perfect sound in any venue."
                },
                {
                    title: "Presentation-ready",
                    desc: "Materials ready to show on screen at any conference or event."
                },
                {
                    title: "Thought-out framing",
                    desc: "Every angle is precise: composition, light and camera movement."
                },
                {
                    title: "Unified broadcast",
                    desc: "Switching, graphics and sound merge into one polished product."
                },
                {
                    title: "Own equipment",
                    desc: "Cameras, lighting and sound — no extra gear to rent."
                },
                {
                    title: "Full cycle",
                    desc: "From idea to final file — one provider for every stage."
                }
            ]
        }
    },
    showreel: {
        kicker: "Showreel",
        title1: "Our",
        title2: "works",
        desc: "This section is being updated. Videos and photos of the studio's best projects will appear here.",
        photoKicker: "Photo works",
        videoSoon: "Video soon",
        photoSoon: "Photo soon",
        videos: [
            {
                label: "Commercial",
                tag: "Video production"
            },
            {
                label: "Corporate film",
                tag: "Post-production"
            },
            {
                label: "Live stream",
                tag: "Live streaming"
            },
            {
                label: "Documentary project",
                tag: "Video production"
            }
        ],
        photos: [
            {
                label: "Studio shooting",
                tag: "Photo"
            },
            {
                label: "Event photography",
                tag: "Photo"
            },
            {
                label: "Portrait shooting",
                tag: "Photo"
            }
        ],
        ctaTitle: "Want to become part of our portfolio?",
        cta: "Discuss a project",
        close: "Close"
    },
    partners: {
        kicker: "Partners",
        title1: "Our",
        title2: "partners",
        desc: "Brands and companies we work with.",
        logoPlaceholder: "Logo"
    },
    faq: {
        kicker: "FAQ",
        title1: "Frequently asked",
        title2: "questions",
        items: [
            {
                q: "What services does the studio provide?",
                a: "Full-cycle video production — from idea and script to editing and post-production, as well as live streaming and professional photography."
            },
            {
                q: "How much does a video cost?",
                a: "The price depends on format, length, number of shooting days and post-production complexity. After a brief we prepare a quote and offer several options."
            },
            {
                q: "How does a project work?",
                a: "First a brief and idea discussion, then a script and quote. Then shooting, editing and approval. Finally you receive source files and adapts for different platforms."
            },
            {
                q: "How long does a project take?",
                a: "A commercial usually takes 2–4 weeks from the approved brief. Complex corporate and documentary projects take longer. Deadlines are fixed in the contract."
            },
            {
                q: "Do you have your own equipment?",
                a: "Yes, we have our own fleet of cameras, lighting and sound, plus reliable venues for studio shooting and broadcasts."
            },
            {
                q: "Do you work with individuals?",
                a: "Yes, we work with both brands and private clients using the same flow: brief, quote, contract and a result delivered on time."
            }
        ]
    },
    contact: {
        kicker: "Contacts",
        title1: "Let's",
        title2: "create",
        title3: "together",
        email: "Email",
        phone: "Phone",
        address: "Address",
        addressValue: "Moscow, Poryadkovy lane, 21",
        hours: "Working hours",
        hoursValue1: "Mon – Fri: 10:00 — 19:00",
        hoursValue2: "Sat: by appointment",
        social: "Follow us",
        copy: "Copy address",
        copied: "Copied",
        form: {
            kicker: "Contact form",
            name: "Name *",
            namePh: "John Smith",
            email: "Email *",
            emailPh: "john@example.com",
            phone: "Phone",
            phonePh: "+7 (999) 000-00-00",
            service: "Service",
            servicePh: "Select a service",
            message: "Message",
            messagePh: "Tell us about your project...",
            submit: "Send request",
            sending: "Sending...",
            successTitle: "Message sent",
            successDesc: "Thank you for reaching out! We will get back to you within a business day.",
            sendAnother: "Send another",
            services: [
                "Video production",
                "Live streaming",
                "Editing & post-production",
                "Photography",
                "Full-service project"
            ]
        }
    },
    footer: {
        copyright: "16/9 CREATIVE STUDIO",
        privacy: "Privacy Policy",
        offer: "Offer agreement",
        credits: "Coded by"
    },
    notFound: {
        kicker: "404 · Error",
        desc: "Page not found. Looks like this frame was left in the editing room.",
        cta: "Back home"
    }
};
const translations = {
    ru,
    en
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12m5w8p._.js.map