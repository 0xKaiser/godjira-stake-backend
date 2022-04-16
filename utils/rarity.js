const axios = require('axios');

const GEN_BASE_URL = 'https://godjira-metadata-bucket.s3.ap-south-1.amazonaws.com/'
const GEN2_BASE_URL = 'https://godjiragen2-metadata.s3.ap-south-1.amazonaws.com/'

const getRarityGen = async (tokenId) => {
    try {
        const { data } = await axios.get(`${GEN_BASE_URL}${tokenId}`)
        console.log(data["attributes"][data["attributes"].length - 1]['value'])
        if (data["attributes"][data["attributes"].length - 1]['trait_type'] == 'LEGENDARY') {
            if (data["attributes"][data["attributes"].length - 1]['value'] == 'Legendary') {
                return 2
            }
            else {
                return 1
            }
        }
        else {
            return false
        }
    }
    catch (error) {
        console.log(error.message)
        return false
    }

}

const getRarityGen2 = async (tokenId) => {
    try {
        const { data } = await axios.get(`${GEN2_BASE_URL}${tokenId}`)
        console.log(data["attributes"][0]['value'])
        if (data["attributes"][0]['trait_type']=='Type') {
            if(data["attributes"][0]['value']=='Legendary'){
                return 3
            }
            else if(data["attributes"][0]['value']=='Rare'){
                return 2
            }
            else{
                return 1
            }

        }
        else {
            return false
        }
    }
    catch (error) {
        console.log(error.message)
        return false
    }

}

const getRarityGen2array = async (tokenIds) => {
    const return_list=[]
    for (let i = 0; i < tokenIds.length; i++){
        try {
            const { data } = await axios.get(`${GEN2_BASE_URL}${tokenIds[i]}`)
            console.log(data["attributes"][0]['value'])
            if (data["attributes"][0]['trait_type']=='Type') {
                if(data["attributes"][0]['value']=='Legendary'){
                    return_list.push(3)
                }
                else if(data["attributes"][0]['value']=='Rare'){
                    return_list.push(2)
                }
                else{
                    return_list.push(1)
                }
    
            }
            else {
                return_list.push(false)
            }
        }
        catch (error) {
            console.log(error.message)
            return_list.push(false)
        }
    }
    return return_list

}


const getRarityGenarray = async (tokenIds) => {
    const return_list=[]
    for (let i = 0; i < tokenIds.length; i++){
        try {
            const { data } = await axios.get(`${GEN_BASE_URL}${tokenIds[i]}`)
            console.log(data["attributes"][data["attributes"].length - 1]['value'])
            if (data["attributes"][data["attributes"].length - 1]['trait_type'] == 'LEGENDARY') {
                if (data["attributes"][data["attributes"].length - 1]['value'] == 'Legendary') {
                    return_list.push(2)
                }
                else {
                    return_list.push(1)
                }
            }
            else {
                return_list.push(false)
            }
        }
        catch (error) {
            console.log(error.message)
            return_list.push(false)
        }
    }
    return return_list

}

const test = async () => {
    console.log(await getRarityGen(2))
}


module.exports = {getRarityGen,getRarityGen2,getRarityGen2array,getRarityGenarray}


