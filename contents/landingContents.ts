import { SupportedLanguages } from "./supportedLanguagesData"


export type LandingContents = Record<SupportedLanguages,{
        hero: {
            headline: [string,string],
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
                imgSrcs: [string,string,string]
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
                    videoSrc: string,
                    description: string
                },
                {
                    videoSrc: string,
                    description: string
                },
                {
                    videoSrc: string,
                    description: string
                },
                {
                    videoSrc: string,
                    description: string
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
            ]
        },
        "custom-mouse": {
            "scroll": string,
            "hover": string
        },
        "lets-talk-button": string
}>

export const landingContents: LandingContents = {
    "en": {
        hero: {
            headline: ["modern","aesthetics"],
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
                caption: "image parallax",
                imgSrc: "/assets/pexels-leeloothefirst-7818239.jpg"
            },
            "parallax-scrolling":{
                caption: "There are many more techniques I can develop, such as parallax scrolling.",
                description: "Parallax scrolling a trending web design technique   to add depth and visual interest to the design. It creates a dynamic experience that keeps users engaged.",
                imgSrcs: ["/assets/lennon-cheng-yAeUPmbyS-0-unsplash.jpg","pexels-nicholas-garman-2492577-4107723.jpg","pexels-iriser-1083807.jpg"]
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
                    videoSrc: "",
                    description: "Here’s a simple, clean and fast portfolio website I created in a long time ago. There’s some basic design and a bit animation."
                },
                {
                    videoSrc: "",
                    description: "Here's the project I worked for South China Morning Post: HK. It's a storytelling page with image sequence and a mobile first design"
                },
                {
                    videoSrc: "",
                    description: "Here’s a historical website with a 3D animation, but presented with image sequence. And 4 page for each hero stories with a lot of scroll animation."
                },
                {
                    videoSrc: "",
                    description: "Here’s a demo web app that designed for time management with clean, Intuitive user experience, user friendly design "
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
            ]
        },
        "custom-mouse": {
            "scroll": "scroll down",
            "hover": "hover me"
        },
        "lets-talk-button": "Let’s Talk"
    },
    
    "zh": {
        hero: {
            headline: ["modern","aesthetics"],
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
                caption: "image parallax",
                imgSrc: "/assets/pexels-leeloothefirst-7818239.jpg"
            },
            "parallax-scrolling":{
                caption: "There are many more techniques I can develop, such as parallax scrolling.",
                description: "Parallax scrolling a trending web design technique   to add depth and visual interest to the design. It creates a dynamic experience that keeps users engaged.",
                imgSrcs: ["/assets/lennon-cheng-yAeUPmbyS-0-unsplash.jpg","pexels-nicholas-garman-2492577-4107723.jpg","pexels-iriser-1083807.jpg"]
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
                    videoSrc: "",
                    description: "Here’s a simple, clean and fast portfolio website I created in a long time ago. There’s some basic design and a bit animation."
                },
                {
                    videoSrc: "",
                    description: "Here's the project I worked for South China Morning Post: HK. It's a storytelling page with image sequence and a mobile first design"
                },
                {
                    videoSrc: "",
                    description: "Here’s a historical website with a 3D animation, but presented with image sequence. And 4 page for each hero stories with a lot of scroll animation."
                },
                {
                    videoSrc: "",
                    description: "Here’s a demo web app that designed for time management with clean, Intuitive user experience, user friendly design "
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
            ]
        },
        "custom-mouse": {
            "scroll": "scroll down",
            "hover": "hover me"
        },
        "lets-talk-button": "Let’s Talk"
    }
} as const