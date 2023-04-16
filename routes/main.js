require('../logger') // Logger
const express = require('express')
const router = express.Router()


list = [
    {
        name: "Asupan",
        features: [
            {
                name: "bocil",
                url: "/api/asupan/Bocil"
            },
            {
                name: "geayubi",
                url: "/api/asupan/geayubi"
            },
            {
                name: "gheayubi",
                url: "/api/asupan/gheayubi"
            },
            {
                name: "hijaber",
                url: "/api/asupan/hijaber"
            },
            {
                name: "santuy",
                url: "/api/asupan/santuy"
            },
            {
                name: "rikagusriani",
                url: "/api/asupan/rikagusriani"
            },
            {
                name: "random",
                url: "/api/asupan/random"
            }
        ]
    },
    {
        name: "Random Image",
        features: [
            {
                name: "cogan",
                url: "/api/random/cogan"
            },
            {
                name: "cecan",
                url: "/api/random/cecan"
            },
            {
                name: "aesthetic",
                url: "/api/random/aesthetic"
            },
            {
                name: "anjing",
                url: "/api/random/anjing"
            },
            {
                name: "antiwork",
                url: "/api/random/antiwork"
            },
            {
                name: "blackpink",
                url: "/api/random/blackpink"
            },
            {
                name: "boneka",
                url: "/api/random/boneka"
            },
            {
                name: "cecan",
                url: "/api/random/cecan"
            },
            {
                name: "cosplay",
                url: "/api/random/cosplay"
            },
            {
                name: "dadu",
                url: "/api/random/dadu"
            },
            {
                name: "justina",
                url: "/api/random/justina"
            },
            {
                name: "kayes",
                url: "/api/random/kayes"
            },
            {
                name: "kpop",
                url: "/api/random/kpop"
            },
            {
                name: "kucing",
                url: "/api/random/kucing"
            },
            {
                name: "mobil",
                url: "/api/random/mobil"
            },
            {
                name: "notnot",
                url: "/api/random/notnot"
            },
            {
                name: "profil",
                url: "/api/random/profil"
            },
            {
                name: "rose",
                url: "/api/random/rose"
            },
            {
                name: "ryujin",
                url: "/api/random/ryujin"
            },
            {
                name: "wallhp",
                url: "/api/random/wallhp"
            },
            {
                name: "wallml",
                url: "/api/random/wallml"
            }
        ]
    },
    {
        name: "Sfw Image",
        features: [
            {
                name: "milf",
                url: "/api/sfw/milf"
            },
            {
                name: "loli",
                url: "/api/sfw/loli"
            },
            {
                name: "neko",
                url: "/api/sfw/neko"
            },
            {
                name: "hubsu",
                url: "/api/sfw/hubsu"
            },
            {
                name: "shota",
                url: "/api/sfw/shota"
            },
            {
                name: "waifu",
                url: "/api/sfw/waifu"
            }
        ]
    },
    {
        name: "Islamic",
        features: [
            {
                name: "al-quran",
                url: "/api/islamic/al-quran"
            },
            {
                name: "al-quran",
                desc: "params ayat 1-114",
                url: "/api/islamic/al-quran/1"
            },
            {
                name: "asmaul husna",
                desc: "params ayat 1-99",
                url: "/api/islamic/asmaul_husna"
            },
            {
                name: "kisah nabi",
                desc: "params nama nabi adam-muhammad",
                url: "/api/islamic/kisahnabi"
            }
        ]
    },
    {
        name: "Edukasi",
        features: [
            {
                name: "covidworld",
                url: "/api/edukasi/covidworld"
            },
            {
                name: "infogempa",
                url: "/api/edukasi/infogempa/"
            }
        ]
    },
    {
        name: "Tools",
        features: [
            {
                name: "Ip",
                url: "/api/tools/ip"
            },
            {
                name: "Ip Lookup",
                desc: "params ip ex: 8.8.8.8",
                url: "/api/tools/ip/8.8.8.8"
            },
            {
                name: "stalk ff",
                desc: "query id ex: 2637837475",
                url: "/api/tools/stalkff?id=2637837475"
            }
        ]
    }
]



router.get('/', (req, res) => {
    res.status(200).send(list)
})
// router.get('/asupan', (req, res) => {
//     res.status(200).sendFile(basepath+'/views/docs/asupan.html')
// })


module.exports = router