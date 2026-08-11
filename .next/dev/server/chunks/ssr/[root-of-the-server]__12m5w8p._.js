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
        nav: [
            "Главная",
            "О студии",
            "Шоурум",
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
        imgAlt: "Камера в студии"
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
        nav: [
            "Home",
            "About",
            "Showreel",
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
        imgAlt: "Camera in the studio"
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