import { Axios } from "@/configs/axios.config"

export const postMessage = async (payload) => {
    try {
        let data = await Axios.post('/message', payload)
        return data;
    } catch ({ response }) {
        const message = response?.data?.message || 'Something went wrong!';
        throw new Error(message);
    }
}