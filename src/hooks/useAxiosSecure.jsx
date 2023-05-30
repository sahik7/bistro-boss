import { useEffect } from "react"
import { Navigate } from "react-router-dom"

const axiosSecure = axios.create({
    baseURL: "",
});

useEffect(() => {
    axiosSecure.interceptors.response.use((config) => {
        const token = localStorage.getItem("access-token")
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    })
    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await logOut()
                Navigate("/login")
            }
            return Promise.reject(error)
        }
    )
}, [logOut, navigate, axiosSecure]);