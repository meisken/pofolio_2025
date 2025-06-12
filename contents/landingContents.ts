import { SupportedLanguages } from "./supportedLanguagesData"


export type LandingContents = Record<SupportedLanguages,{
        hero: {
            headline: [string,string,string],
            headlineTypingSpeed: number,
            description: string,
            backgroundVideo: {
                videoSrc: string
            },
            contact: {
                facebook: string,
                twitter: string
            }
        },
        "what-i-do": {
            heading: string,
            description: string,
            "3d-hover-card": {
                caption: string,
                imgSrc: string
            },
            "image-parallax": {
                caption: string,
                imgSrc: string
            },
            "parallax-scrolling":{
                caption: string,
                description: string,
                imgSrcs: [string,string,string],
                imgsCaptions: [string,string,string]
            }
        },
        "full-screen-transition": {
            heading: [string,string],
            imgSrcs: [string,string]
        },
        "projects": {
            heading: string,
            description: string,
            projects: [
                {
                    caption: string
                    videoSrc: string,
                    description: string,
                    projectLink: string
                },
                {
                    caption: string
                    videoSrc: string,
                    description: string,
                    projectLink: string
                },
                {
                    caption: string
                    videoSrc: string,
                    description: string,
                    projectLink: string
                },
                {
                    caption: string
                    videoSrc: string,
                    description: string,
                    projectLink: string
                },
                {
                    caption: string
                    videoSrc: string,
                    description: string,
                    projectLink: string
                }
            ],
        },
        "services": {
            heading: string,
            description: string,
            services: [
                {
                    caption: string,
                    description: string
                },
                {
                    caption: string,
                    description: string
                },
                {
                    caption: string,
                    description: string
                },
                {
                    caption: string,
                    description: string
                },
            ]
        },
        "get-in-touch": {
            heading: string,
            contacts: [
                {
                    type: string,
                    contact: string
                },
                {
                    type: string,
                    contact: string
                },
                {
                    type: string,
                    contact: string
                }
            ],
            "hand-image-src": string
        },
        "lets-talk-button": {
            name: string,
            link: string
        }
}>

export const landingContents: LandingContents = {
    "en": {
        hero: {
            headline: ["make it","creative","innovative"],
            headlineTypingSpeed: 140,
            description: "I’m Ken, a web developer and designer who build modern, visually appealing and clean websites.",
            backgroundVideo: {
                videoSrc: "/assets/background.mp4"
            },
            contact: {
                facebook: "https://m.me/ken32146",
                twitter: "https://x.com/Ken_Tang_999"
            }
        },
        "what-i-do": {
            heading: "What i do",
            description: "I creates memorable websites with smooth animations and interactive experiences.",
            "3d-hover-card": {
                caption: "3D card hover effect",
                imgSrc: "/assets/code2.png"
            },
            "image-parallax": {
                caption: "image hover parallax",
                imgSrc: "/assets/pexels-leeloothefirst-7818239.jpg"
            },
            "parallax-scrolling":{
                caption: "There are many more eye-catching techniques.",
                description: "Parallax scrolling a trending web design technique to add depth and visual interest to the design. It creates a dynamic experience that keeps users engaged.",
                imgSrcs: ["/assets/lennon-cheng-yAeUPmbyS-0-unsplash.jpg","/assets/valentin-beauvais-yVUQlyRlJSw-unsplash.jpg","/assets/joel-fulgencio-01fAtHwYqo0-unsplash.jpg"],
                imgsCaptions: ["slow", "fast","speedy"]
            }
        },
        "full-screen-transition": {
            heading: ["Full screen","transition"],
            imgSrcs: ["/assets/pexels-cottonbro-8721339.jpg","/assets/pexels-cottonbro-8721318.jpg"]
        },
        "projects": {
            heading: "Projects",
            description: "I worked on these projects as both a developer and designer, writing code to build them while designing in Figma.",
            projects: [
                {
                    caption: "HALL OF FAME",
                    videoSrc: "/assets/projectThumbnail/hall.jpg",
                    description: "Here’s a historical website with a 3D animation. And 4 unique pages for each hero stories with a lot of scroll animations.",
                    projectLink: "https://hall.meisken.dev/"
                },
                {
                    caption: "Portfolio V1",
                    videoSrc: "/assets/projectThumbnail/old_portfolio.jpg",
                    description: "Here’s a simple, clean and fast portfolio website I created in a long time ago. There’s some basic design and a bit animation.",
                    projectLink: "https://portfolio.meisken.dev/"
                },
                {
                    caption: "How moons slow retreat earth",
                    videoSrc: "/assets/projectThumbnail/moon.jpg",
                    description: "Here's the project I worked for South China Morning Post: HK, a storytelling page with image sequence and a mobile first design.",
                    projectLink: "https://multimedia.scmp.com/native/infographics/article/3131059/how-moons-slow-retreat-earth/"
                },
                {
                    caption: "Todo calendar web app",
                    videoSrc: "/assets/projectThumbnail/todo.jpg",
                    description: "Here’s a demo web app that designed for time management with clean, Intuitive user experience, user friendly design.",
                    projectLink: "https://todo.meisken.dev/"
                },
                {
                    caption: "chinese text converter",
                    videoSrc: "/assets/projectThumbnail/tools.jpg",
                    description: "It provides functions for Traditional/Simplified Chinese conversion, image-to-text conversion, capturing screenshots.",
                    projectLink: "https://chromewebstore.google.com/detail/%E6%96%87%E5%AD%97%E8%BD%89%E6%8F%9B%E5%B7%A5%E5%85%B7/efdjngbfhfhmambhgcfbnmpggjgfalpg?authuser=5&hl=zh-TW"
                }
            ],
        },
        "services": {
            heading: "Services",
            description: "I offer a range of services focused on web solutions—whether it's brand building or work automation",
            services: [
                {
                    caption: "Web Design",
                    description: "I design clean, elegant, and user-friendly websites. interfaces that feel effortless while maintaining strong visual appeal."
                },
                {
                    caption: "Web Development",
                    description: "I write clean, maintainable code using TypeScript and ESLint. With Next.js or React and Tailwind, I build reusable components for efficient development."
                },
                {
                    caption: "Chrome extension Development",
                    description: "Sometimes, you may need to perform repetitive tasks on certain websites. I'm here to automate your workflow and save you time."
                },
                {
                    caption: "Hosting & Cloudflare",
                    description: "I can host your websites on all major hosting providers and set up Cloudflare to enhance speed and security."
                },
            ]
        },
        "get-in-touch": {
            heading: "Get in touch",
            contacts: [
                {
                    type: "email",
                    contact: "meiskena999@gmail.com"
                },
                {
                    type: "whatsapp",
                    contact: "+852 92053876"
                },
                {
                    type: "upwork",
                    contact: "Ken Tang"
                }
            ],
            "hand-image-src": "/assets/hand.PNG"
        },
        "lets-talk-button": {
            name: "Let’s Talk",
            link: "https://www.upwork.com/freelancers/~01698d1c0db877b32d"
        }
    },
    
    "zh": {
        hero: {
            headline: ["就在這","讓創意飛揚","讓創新綻放"],
            headlineTypingSpeed: 200,
            description: "我是KEN, 一名網頁開發者和設計師, 專門製作現代化/簡潔/有質感的動態網頁。",
            backgroundVideo: {
                videoSrc: "/assets/background.mp4"
            },
            contact: {
                facebook: "https://m.me/ken32146",
                twitter: "https://x.com/Ken_Tang_999"
            }
        },
        "what-i-do": {
            heading: "我做什麼的",
            description: "我會用不同的動畫/互動元素, 來打造讓人難忘的體驗.",
            "3d-hover-card": {
                caption: "立體滑鼠懸停效果",
                imgSrc: "/assets/code2.png"
            },
            "image-parallax": {
                caption: "視差滑鼠懸停效果",
                imgSrc: "/assets/pexels-leeloothefirst-7818239.jpg"
            },
            "parallax-scrolling":{
                caption: "還有更多的動態效果,在等你發掘.",
                description: "視差是一種流行的網頁技術, 可為設計增添深度和視覺趣味. 它創造出更動態體驗, 不再是平平無奇的文字和照片, 增加使用者留在網頁的時間.",
                imgSrcs: ["/assets/lennon-cheng-yAeUPmbyS-0-unsplash.jpg","/assets/valentin-beauvais-yVUQlyRlJSw-unsplash.jpg","/assets/joel-fulgencio-01fAtHwYqo0-unsplash.jpg"],
                imgsCaptions: ["慢速", "極快","快速"]
            }
        },
        "full-screen-transition": {
            heading: ["全螢幕","過渡動畫"],
            imgSrcs: ["/assets/pexels-cottonbro-8721339.jpg","/assets/pexels-cottonbro-8721318.jpg"]
        },
        "projects": {
            heading: "其他作品",
            description: "這些是我過往的一些作品, 我在Figma設計, 然後寫代碼實現",
            projects: [
                {
                    caption: "歷史人物殿堂",
                    videoSrc: "/assets/projectThumbnail/hall.jpg",
                    description: "這是一個帶有 3D 動畫效果的歷史網站, 同時為每位人物提供了各具特色的頁面, 頁面上有不同的滾動動畫效果.",
                    projectLink: "https://hall.meisken.dev/"
                },
                {
                    caption: "作品集 V1",
                    videoSrc: "/assets/projectThumbnail/old_portfolio.jpg",
                    description: "這是我很久以前創建的一個簡單, 簡潔且快速的作品集網站, 裏面有一些基本設計和一點動畫效果.",
                    projectLink: "https://portfolio.meisken.dev/"
                },
                {
                    caption: "How moons slow retreat earth",
                    videoSrc: "/assets/projectThumbnail/moon.jpg",
                    description: "這是我為《南華早報：香港》製作的一個項目, 一個採用圖像序列動畫和手機優先設計的頁面. ",
                    projectLink: "https://multimedia.scmp.com/native/infographics/article/3131059/how-moons-slow-retreat-earth/"
                },
                {
                    caption: "待辦事項和日歷應用",
                    videoSrc: "/assets/projectThumbnail/todo.jpg",
                    description: "這是一個為時間管理而設計的網頁應用 demo, 擁有簡潔/直觀的用户體驗和用户友好的設計.",
                    projectLink: "https://todo.meisken.dev/"
                },
                {
                    caption: "文字轉換工具",
                    videoSrc: "/assets/projectThumbnail/tools.jpg",
                    description: "這是免費的chrome插件, 提供繁簡轉換/圖片轉文字/已選擇部份截圖/速成碼轉換的功能,可在跳出視窗/右鍵選單中使用",
                    projectLink: "https://chromewebstore.google.com/detail/%E6%96%87%E5%AD%97%E8%BD%89%E6%8F%9B%E5%B7%A5%E5%85%B7/efdjngbfhfhmambhgcfbnmpggjgfalpg?authuser=5&hl=zh-TW"
                }
            ],
        },
        "services": {
            heading: "服務",
            description: "我提供一系列服務, 主要以在網頁實現為主, 無論是品牌建設還是工作自動化.",
            services: [
                {
                    caption: "網頁設計",
                    description: "我設計簡潔、優雅且用户友好的網站和界面, 這些界面操作起來流暢, 同時具有視覺吸引力。"
                },
                {
                    caption: "網頁開發",
                    description: "我使用 TypeScript 和 ESLint 編寫整潔且易於維護的代碼, 利用 Next.js 或 React 結合 Tailwind, 我構建可複用組件以實現高效開發."
                },
                {
                    caption: "Chrome擴充功能開發",
                    description: "有時候, 你可能需要在某些網站上執行重複任務, 我在這裏幫助你自動化工作流程, 為你節省時間."
                },
                {
                    caption: "網頁託管和 Cloudflare",
                    description: "我可以在所有主流的託管服務提供商上託管您的網站, 並設置 Cloudflare 來提升速度和安全性."
                },
            ]
        },
        "get-in-touch": {
            heading: "聯絡方法",
            contacts: [
                {
                    type: "email",
                    contact: "meiskena999@gmail.com"
                },
                {
                    type: "whatsapp",
                    contact: "+852 92053876"
                },
                {
                    type: "upwork",
                    contact: "Ken Tang"
                }
            ],
            "hand-image-src": "/assets/hand.PNG"
        },
        "lets-talk-button": {
            name: "Let’s Talk",
            link: "https://www.upwork.com/freelancers/~01698d1c0db877b32d"
        }
    }
} as const