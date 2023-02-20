import axios from "axios";
import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWJmZWI4MWE1NTE5NmMzMWRkMmVjZTljYWQ1YWRiYyIsInN1YiI6IjYzZWY1N2UwZWE4NGM3MDA5NmVmOGI4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UV3eedazXs6xwCLDT66R2QqIYF2uaPMpzK4FySyWyf0';

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export {axiosService}