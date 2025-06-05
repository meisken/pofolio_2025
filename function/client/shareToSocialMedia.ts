import { openShareDialog } from "./windowOpen";


export type SocialMediaNames = "facebook" | "facebookMessenger" | "whatsapp" | "line" | "linkedin" | "pinterest" | "reddit" | "telegram" | "tumblr" | "twitter";

export interface ShareLinkParameters{
    facebook: {
        u: string,
        quote?: string,
        // hashtag?: string
    },
    facebookMessenger: {
        link: string,
        redirect_url?: string,
        app_id: string,
        to?: string
    }
    whatsapp: {
        text: string
    },
    line: {
        url: string,
        text?: string
    },
    linkedin: {
        url: string,
        // title?: string,
        // summary?: string,
        // source?: string
    },
    pinterest: {
        url: string,
        media: string,
        description?: string
    },
    reddit: {
        url: string,
        title?: string
    },
    telegram: {
        url: string,
        title?: string
    },
    tumblr:{
        canonicalUrl: string,
        title?: string,
        caption?: string,
        tags?: string,
        posttype?: "link" | string
    },
    twitter: {
        url: string,
        text?: string,
        via?: string,
        hashtags?: string,
        related?: string
    }
}


function objectToGetParams(object: {
    [key: string]: string | number | undefined | null;
}) {
    const params = Object.entries(object)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  
    return params.length > 0 ? `?${params.join('&')}` : '';
}


function isMobileOrTablet() {
    return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
  }




export const shareToSocialMedia = <T extends SocialMediaNames>(shareLinkType: T, parameters: ShareLinkParameters[T],onShareWindowClose?: () => void) => {
    const socialMediaShareLinks: {
        [key: string]: (parameters: ShareLinkParameters[T]) => string
    } = {
        facebook: (params: ShareLinkParameters[T]) => {
            const {
                u,
                quote,
                // hashtag
            } = params as ShareLinkParameters["facebook"];
            const urlParams = objectToGetParams({
                u,
                quote,
                // hashtag
            })
            return 'https://www.facebook.com/sharer/sharer.php' + urlParams
        },
        facebookMessenger: (params: ShareLinkParameters[T]) => {
            const {
                link,
                app_id,
                redirect_url,
                to
            } = params as ShareLinkParameters["facebookMessenger"];
            const urlParams = objectToGetParams({
                link,
                redirect_uri: redirect_url || link,
                app_id,
                to,
            })  
            return 'https://www.facebook.com/dialog/send' + urlParams
        },
        whatsapp: (params: ShareLinkParameters[T]) => {
            const {
                text
            } = params as ShareLinkParameters["whatsapp"];
            const urlParams = objectToGetParams({text})
            return 'https://' +  (isMobileOrTablet() ? 'api' : 'web') + '.whatsapp.com/send' + urlParams    
          
        },
        line: (params: ShareLinkParameters[T]) => {
            const {
                url,
                text
            } = params as ShareLinkParameters["line"];
            const urlParams = objectToGetParams({url,text})
            return 'https://social-plugins.line.me/lineit/share' + urlParams
        },
        linkedin: (params: ShareLinkParameters[T]) => {
            const {
                url,
            } = params as ShareLinkParameters["linkedin"];
            const urlParams = objectToGetParams({ url })
            return 'https://linkedin.com/shareArticle' + urlParams
        },
        pinterest: (params: ShareLinkParameters[T]) => {
            const {
                url,
                media,
                description
            } = params as ShareLinkParameters["pinterest"];
            const urlParams = objectToGetParams({ url, media, description,})
            return 'https://pinterest.com/pin/create/button/' + urlParams
        },
        reddit: (params: ShareLinkParameters[T]) => {
            const {
                url,
                title
            } = params as ShareLinkParameters["reddit"];
            const urlParams = objectToGetParams({url,title})
            return 'https://www.reddit.com/submit' + urlParams
        },
        telegram: (params: ShareLinkParameters[T]) => {
            const {
                url,
                title
            } = params as ShareLinkParameters["telegram"];
            const urlParams = objectToGetParams({url,text: title})
            return 'https://telegram.me/share/url' + urlParams
        },
        tumblr: (params: ShareLinkParameters[T]) => {
            const {
                canonicalUrl,
                caption,
                tags,
                title,
                posttype = "link"
            } = params as ShareLinkParameters["tumblr"];
            const urlParams =  objectToGetParams({
                canonicalUrl,
                title,
                caption,
                tags,
                posttype,
            })
            
            return 'https://www.tumblr.com/widgets/share/tool'  + urlParams
        },
        twitter: (params: ShareLinkParameters[T]) => {
            const {
                url,
                hashtags,
                related,
                text,
                via
            } = params as ShareLinkParameters["twitter"];
            const urlParams = objectToGetParams({  
                url,
                hashtags,
                related,
                text,
                via
            })
            return 'https://twitter.com/share' + urlParams
        },
    }
    openShareDialog(socialMediaShareLinks[shareLinkType](parameters),{onShareWindowClose});
}