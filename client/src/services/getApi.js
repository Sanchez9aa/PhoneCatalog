import axios from "axios"
import apiUrl from "./config"

const getAllPhones = async (setPhones) => {
    const res = await axios.get(apiUrl)
    .then(res => {
        setPhones(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const getPhoneById = async (phone, setData) => {
    const res = await axios.get(`${apiUrl}/${phone}`)
    .then(res => {
        setData(res.data[0])
    }).catch(err =>{
        console.log(err)
    })
}

const getPhoneByName = async (phone, setData) => {
    const res = await axios.get(`${apiUrl}?name=${phone}`)
    .then(res => {
        setData(res.data[0])
    }).catch(err =>{
        console.log(err)
    })
}

const updatePhone = async (country, setData) => {
    const res = await axios.get(`${apiUrl}/alpha?codes=${country}`)
    .then(res => {
        const name = res.data[0].name.common 
        setData(name)
    }).catch(err =>{
        console.log(err)
    })
}

const deletePhone = async (country, setData) => {
    const res = await axios.get(`${apiUrl}/alpha?codes=${country}`)
    .then(res => {
        const name = res.data[0].name.common 
        setData(name)
    }).catch(err =>{
        console.log(err)
    })
}

export default {getAllPhones, getPhoneById, updatePhone, deletePhone, getPhoneByName }