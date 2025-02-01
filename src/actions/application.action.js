import { Axios } from "@/configs/axios.config";

export const postApplication = async (payload) => {

    try {
        let data = await Axios.post('/applications', payload)
        return data;
    } catch ({ response }) {
        const message = response?.data?.message || 'Something went wrong!';
        throw new Error(message);
    }
}

export const patchApplication = async (id, payload) => {
    try {
        let data = await Axios.patch(`/applications/${id}`, payload)
        return data;
    } catch ({ response }) {
        const message = response?.data?.message || 'Something went wrong!';
        throw new Error(message);
    }
}

export const getApplicationById = async (id) => {
    try {
        let data = await Axios.get(`/applications/${id}`)
        return data;
    } catch ({ response }) {
        return { data: {} }
    }
}