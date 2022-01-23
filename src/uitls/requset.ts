import axios from "axios";

const service = axios.create({
    baseURL: import.meta.env.BASE_URL
})

service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code !== 2000) {

        }
        return res
    }
)

export default service