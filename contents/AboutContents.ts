import { SupportedLanguages } from "./supportedLanguagesData"


export type AboutContents = Record<SupportedLanguages,{
    hero: {
        headline: string,
        subheading: string,
        description: string,
        imgSrc: string
    },
}>

export const aboutContents: AboutContents = {
    "en": {
        hero: {
            headline: "Independent web developer based in hong kong",
            subheading: "I’m committed to developing websites that deliver memorable digital experiences through clean, reusable code.",
            description: "As a web developer, I'm obsessed with creative animations, and I'm here to share my passion with you. Let's transform websites into dynamic experiences—far beyond just static text and images.",
            imgSrc: "/assets/pexels-soheilkmp-27413969.jpg"
        },
    },
    
    "zh": {
        hero: {
            headline: "Independent web developer based in hong kong",
            subheading: "我致力於開發令人難忘數字體驗的網站. 井且使用簡潔且可重複再用的代碼, 減低日後更新的成本.",
            description: "作為一名網頁開發者, 我熱愛於很有創意動畫, 並願與您分享我的熱情, 讓我們把網頁轉變為充滿動態體驗的空間, 不再只是靜態的文字和圖像。",
            imgSrc: "/assets/pexels-soheilkmp-27413969.jpg"
        },
    }
} as const