import { SupportedLanguages } from "./supportedLanguagesData"


export type LandingContents = Record<SupportedLanguages,{
        hero: {
            headline: [string,string,string],
            description: string,
            backgroundVideo: {
                videoSrc: string
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
        "custom-mouse": {
            "scroll": string,
            "hover": string
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
            description: "I’m Ken, a web developer and designer who build modern, visually appealing and clean websites.",
            backgroundVideo: {
                videoSrc: "/assets/background.mp4"
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
        "custom-mouse": {
            "scroll": "scroll down",
            "hover": "hover me"
        },
        "lets-talk-button": {
            name: "Let’s Talk",
            link: "https://www.upwork.com/freelancers/~01698d1c0db877b32d"
        }
    },
    
    "zh": {
        hero: {
            headline: ["modern","aesthetics","asd"],
            description: "I’m a web developer and designer transform ideas into stunning digital experiences, build modern, visually appealing, clean websites.",
            backgroundVideo: {
                videoSrc: "/assets/background.mp4"
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
                caption: "There are many more techniques I can develop, such as parallax scrolling.",
                description: "Parallax scrolling a trending web design technique   to add depth and visual interest to the design. It creates a dynamic experience that keeps users engaged.",
                imgSrcs: ["/assets/lennon-cheng-yAeUPmbyS-0-unsplash.jpg","/assets/pexels-nicholas-garman-2492577-4107723.jpg","/assets/pexels-iriser-1083807.jpg"],
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
                    videoSrc: "/assets/hall_of_fame.mp4",
                    description: "Here’s a historical website with a 3D animation. And 4 unique pages for each hero stories with a lot of scroll animations.",
                    projectLink: "https://hall.meisken.dev/"
                },
                {
                    caption: "Portfolio V1",
                    videoSrc: "/assets/hall_of_fame.mp4",
                    description: "Here’s a simple, clean and fast portfolio website I created in a long time ago. There’s some basic design and a bit animation.",
                    projectLink: "https://portfolio.meisken.dev/"
                },
                {
                    caption: "How moons slow retreat earth",
                    videoSrc: "/assets/hall_of_fame.mp4",
                    description: "Here's the project I worked for South China Morning Post: HK, a storytelling page with image sequence and a mobile first design.",
                    projectLink: "https://multimedia.scmp.com/native/infographics/article/3131059/how-moons-slow-retreat-earth/"
                },
                {
                    caption: "Todo calendar web app",
                    videoSrc: "/assets/hall_of_fame.mp4",
                    description: "Here’s a demo web app that designed for time management with clean, Intuitive user experience, user friendly design.",
                    projectLink: "https://todo.meisken.dev/"
                },
                {
                    caption: "chinese text converter",
                    videoSrc: "/assets/hall_of_fame.mp4",
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
                },
                
            ],
            "hand-image-src": "/assets/hand.PNG"
        },
        "custom-mouse": {
            "scroll": "scroll down",
            "hover": "hover me"
        },
        "lets-talk-button": {
            name: "Let’s Talk",
            link: "https://www.upwork.com/freelancers/~01698d1c0db877b32d"
        }
    }
} as const