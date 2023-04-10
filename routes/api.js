require('../logger')// logger for error
const axios = require('axios')
const express = require('express')
const router = express.Router()



// asupan
router.get('/asupan/bocil', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/asupan/bocil.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/asupan/geayubi', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/asupan/geayubi.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/asupan/gheayubi', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/asupan/gheayubi.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/asupan/hijaber', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/asupan/hijaber.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/asupan/random', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/asupan/random.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/asupan/rikagusriani', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/asupan/rikagusriani.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/asupan/santuy', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/asupan/santuy.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/asupan/ukhty', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/asupan/ukhty.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
// cecan
router.get('/cecan/china', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/cecan/china.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/cecan/hijaber', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/cecan/hijaber.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/cecan/indonesia', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/cecan/indonesia.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/cecan/japan', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/cecan/japan.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/cecan/malaysia', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/cecan/malaysia.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/cecan/random', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/cecan/random.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/cecan/thailand', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/cecan/thailand.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/cecan/vietnam', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/cecan/vietnam.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
//cogan
router.get('/cogan/random', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/cogan/random.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
// random image
router.get('/image/cogan', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/cogan.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/cogan', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/cogan.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/aesthetic', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/aesthetic.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/anjing', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/anjing.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/antiwork', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/antiwork.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/blackpink', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/blackpink.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/boneka', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/boneka.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/cecan', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/cecan.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/cosplay', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/cosplay.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/dadu', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/dadu.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/justina', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/justina.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/kayes', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/kayes.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/kpop', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/kpop.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/kucing', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/kucing.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/mobil', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/mobil.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/montor', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/montor.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/notnot', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/notnot.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/ppcouple', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/ppcouple.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/profil', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/profil.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/rose', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/rose.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/ryujin', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/ryujin.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/wallhp', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/boneka.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/image/wallml', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/random_image/boneka.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
// random sfw
router.get('/sfw/milf', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/sfw/milf.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/sfw/loli', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/sfw/loli.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/sfw/neko', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/sfw/neko.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/sfw/hubsu', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/sfw/hubsu.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/sfw/shota', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/sfw/shota.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/sfw/waifu', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/sfw/waifu.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: hasil
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
// Islamic
router.get('/islamic/image', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/islamic/random_img.json')
        .then((result) => {
            const items = result.data
            const hasil = items[Math.floor(Math.random() * items.length)];

            res.status(200).json({
                code: 200,
                creator,
                result: {
                    url: hasil
                }
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/islamic/al-quran', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/islamic/quran.json')
        .then((result) => {
            const items = result.data

            res.status(200).json({
                code: 200,
                creator,
                result: items
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/islamic/al-quran/:surah', async (req, res) => {
    var surah = req.params.surah
    var isnumber = Number(surah)

    if (!isnumber) {
        res.status(404).json({
            code: 404,
            creator,
            msg: 'Number Surah Not Found!'
        })
        return
    }
    if (isnumber > 114) {
        res.status(504).json({
            code: 504,
            creator,
            msg: 'Number Surah Max 114!'
        })
        return
    }

    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/islamic/quran.json')
        .then((result) => {
            const items = result.data
            const rest = items.find(({ number_of_surah }) => number_of_surah === isnumber);
            res.status(200).json({
                code: 200,
                creator,
                result: rest
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/islamic/asmaul_husna', async (req, res) => {
    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/islamic/asmaul_husna.json')
        .then((result) => {
            const items = result.data

            res.status(200).json({
                code: 200,
                creator,
                result: items
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})
router.get('/islamic/asmaul_husna/:number', async (req, res) => {
    const number = Number(req.params.number)

    if (!number) {
        res.status(404).json({
            code: 404,
            creator,
            msg: 'Id Surah Not Found!'
        })
        return
    }
    if (number > 99) {
        res.status(504).json({
            code: 504,
            creator,
            msg: 'Number Max 99!'
        })
        return
    }

    await axios.get('https://raw.githubusercontent.com/HardToo/resourcesv2/main/islamic/asmaul_husna.json')
        .then((result) => {
            const items = result.data

            const rest = items.find(({ number }) => number === number);
            res.status(200).json({
                code: 200,
                creator,
                result: rest
            })
        })
        .catch(err => {
            res.status(503).json(logger.error)
        })
})

module.exports = router