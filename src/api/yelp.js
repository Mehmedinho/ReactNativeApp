import axios from 'axios'

export default axios.create({
    baseURL:  'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer P2pBV_vi8OQr0AfJz4drOVxFXEM_nZMjFisw1xPxMJALbclsD0_jMaqX6Obknpj_UXHfUNrsq1CBqQ1jdvrxYJgoqa-BR9IcMThSPgCIugm5_4O6lXiR4HS5G4VgX3Yx'
    }
})

