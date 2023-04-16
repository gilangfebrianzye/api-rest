global.creator = "GilangFebrian"
global.basepath = __dirname
global.logger = {
    error: { code: 503, message: 'Error, Service Unavaible', creator: `${creator}`
    },
    noturl: { code: 403, message: 'Error, Invlid Url', creator: `${creator}`
    },
    nottext: { code: 403, message: 'Error, Invlid Text', creator: `${creator}`
    },
    nottext1: { code: 403, message: 'Error, Invlid Text 1', creator: `${creator}`
    },
    nottext2: { code: 403, message: 'Error, Invlid Text 2', creator: `${creator}`
    },
    notnum: { message: 'Enter Num', creator: `${creator}`
    },
    notpage: { message: 'Enter Page', creator: `${creator}`
    },
    notmoji1: { code: 403, message: 'Error, Invlid Emoji 1', creator: `${creator}`
    },
    notmoji2: { code: 403, message: 'Error, Invlid Emoji 2', creator: `${creator}`
    },
    notquery: { code: 403, message: 'Error, Invlid Query', creator: `${creator}`
    },
    notapikey: { code: 403, message: 'Error, Invalid Apikey, Please Check The Apikey In Dash', creator: `${creator}`
    },
    notfound: { code: 404, message: 'Error, Not Found', creator: `${creator}`
    },
    notid: {    code: 404, message: 'Error, Invalid Id or Username', creator: `${creator}`
    },
    ready: { code: 403, message: 'Error, Already In Use', creator: `${creator}`
    }
}

// console.log(logger.ready)