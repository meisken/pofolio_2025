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
            subheading: "I’m committed to developing websites that deliver memorable digital experiences through clean, reusable code.",
            description: "As a web developer, I'm obsessed with creative animations, and I'm here to share my passion with you. Let's transform websites into dynamic experiences—far beyond just static text and images.",
            imgSrc: "/assets/pexels-soheilkmp-27413969.jpg"
        },
    }
} as const