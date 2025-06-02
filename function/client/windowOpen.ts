function windowOpen(
    url: string,
    { 
        height, 
        width, 
        ...configRest 
    } : { 
        height: number; 
        width: number; 
        [key: string]: string | number 
    },
    onClose?: (dialog: Window | null) => void,
) {
    const config: { [key: string]: string | number } = {
        height,
        width,
        location: 'no',
        toolbar: 'no',
        status: 'no',
        directories: 'no',
        menubar: 'no',
        scrollbars: 'yes',
        resizable: 'no',
        centerscreen: 'yes',
        chrome: 'yes',
        ...configRest,
    };

    const shareDialog = window.open(
        url,
        '',
        Object.keys(config).map(key => `${key}=${config[key]}`).join(', '),
    );

    if (onClose) {
        const interval = window.setInterval(() => {
            try {
                if (shareDialog === null || shareDialog.closed) {
                    window.clearInterval(interval);
                    onClose(shareDialog);
                }
            } catch (e) {
                /* eslint-disable no-console */
                console.error(e);
                /* eslint-enable no-console */
            }
        }, 1000);
    }

    return shareDialog;
}

interface DialogOpts{
    onShareWindowClose?: () => void,
    windowHeight?: number,
    windowPosition?: 'windowCenter' | undefined,
    windowWidth?: number,
}
export const openShareDialog = (
    link: string, 
    dialogOpts: DialogOpts = {}
) => {

    const getBoxPositionOnWindowCenter = (width: number, height: number) => ({
        left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
        top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2,
    });
    
    const getBoxPositionOnScreenCenter = (width: number, height: number) => ({
        top: (window.screen.height - height) / 2,
        left: (window.screen.width - width) / 2,
    });
      
    const {
        onShareWindowClose = undefined,
        windowHeight = 400,
        windowPosition = 'windowCenter',
        windowWidth = 550,
    } = dialogOpts;

    const windowConfig = {
        height: windowHeight,
        width: windowWidth,
        ...(windowPosition === 'windowCenter'
            ? getBoxPositionOnWindowCenter(windowWidth, windowHeight)
            : getBoxPositionOnScreenCenter(windowWidth, windowHeight)),
    };

    windowOpen(link, windowConfig, onShareWindowClose);
  };