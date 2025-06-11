import { Metadata } from "next";

export const metadataTags: Metadata = {
    title: "Ken Tang's portfolio 2025",
    description: "I am a web developer and designer who crafts dynamic websites that deliver interactive experiences far beyond mere static text and images.",
    keywords: ["web developer","web designer","web development","parallax","scroll animation","animation","freelance","visual appeal","minimalist","landing page","portfolio", "interactive experiences", "smooth animations"],
    publisher: "Ken Tang",
    authors: [{name: "Ken Tang",url: "https://www.upwork.com/freelancers/~01698d1c0db877b32d"}],
    robots:"index, follow",
    icons: {
        icon: "/assets/icon.png",
        apple: "/assets/icon.png"
    },
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "https://www.meisken.dev",
        languages: {
            en: "en-US",
            zh: "zh-HK"
        }
    },
    category: 'portfolio',
    metadataBase: new URL('https://www.meisken.dev'),
    openGraph: {
        siteName: "Ken Tang's portfolio 2025",
        type: "website",
        title: "Ken Tang's portfolio 2025",
        description: 'I am a web developer and designer who crafts dynamic websites that deliver interactive experiences far beyond mere static text and images.',
        images: [{
            url: "/assets/thumbnail.png",
            type: "image/png",
            width: "1920",
            height: "1080",
        }],
        url: "https://www.meisken.dev",
        locale: "Hong Kong",
        emails: "meiskena999@gmail.com",
        phoneNumbers: "+85292053876",
    },
    twitter: {
        site: "@Ken Tang",
        creator: "@Ken Tang",
        card: 'summary_large_image',
        title: "Ken Tang's portfolio 2025",
        description: "I am a web developer and designer who crafts dynamic websites that deliver interactive experiences far beyond mere static text and images.",
        images: "/assets/thumbnail.png",
    }
};