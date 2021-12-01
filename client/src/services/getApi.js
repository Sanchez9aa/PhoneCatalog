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

const getPhoneByName = async (phone, setData) => {
    const res = await axios.get(`${apiUrl}${phone}`)
    .then(res => {
        setData(res.data)
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

const deletePhone = async (phone) => {
    const res = await axios.delete(`${apiUrl}${phone}`)
    .then(res => {
        console.log(res)
    }).catch(err =>{
        console.log(err)
    })
}

const addPhone = async (phone, setData) => {
    const res = await axios.post(`${apiUrl}`, phone)
    .then(res => {
        console.log(res)
        setData("Phone added")
    }).catch(err => {
        console.log(err)
    })
}

export default {getAllPhones, updatePhone, deletePhone, getPhoneByName, addPhone }