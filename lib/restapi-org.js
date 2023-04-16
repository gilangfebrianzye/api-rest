require('../logger')
const axios = require('axios')

const edukasi = {
    covidDunia: async function () {
        try {
            get = await axios.get('https://covid19-api-zhirrr.vercel.app/api/world')
            return get.data
        } catch (err) {
            return logger.error
        }
    },
    infoGempa: async function () {
        try {
            get = await axios.get('https://saipulanuar.ga/api/info/gempa')
            return get.data.result
        } catch (err) {
            return logger.error
        }
    },
}

const tools = {
    getip: async function () {
        try {
            const ip = await axios.get('https://api.myip.com')
            return ip.data
        } catch (err) {
            return logger.error
        }
    },
    iplookup: async function (ip) {
        try {
            const url = 'http://ip-api.com/json/'
            const ipnya = await axios.get(url + ip)
            const { status, message, query, country, region, lat, lon, timezone, org, as, city, countryCode, zip } = ipnya.data
            if (status === 'fail' && message === 'invalid query') {
                return {
                    code: 501,
                    creator,
                    msg: `only ipv6, ${message}`
                }
            } else {
                return {
                    code: 200,
                    creator,
                    result: {
                        ip: query,
                        country: country,
                        region: region,
                        latitude: lat,
                        longtitude: lon,
                        timezone: timezone,
                        org: org,
                        as: as,
                        city: city,
                        countryCode: countryCode,
                        zip: zip,
                        maps: 'https://www.google.com/maps/@' + lat + ',' + lon
                    }
                }
            }
        } catch (err) {
            return logger.error
        }
    },
    stalkff: async function (id) {
        try {
            getid = await axios.get('https://api.ibeng.tech/api/stalk/stalkff?text=' + id + '&apikey=tamvan')

            if(getid.data.result === undefined){
                return logger.error
            } else {
                return {
                    code: 200,
                    creator,
                    result: getid.data.result
                }
            }
        } catch (err) {
            return logger.error
        }
    },
    
}

module.exports = {
    edukasi,
    tools
}