import { Axios } from "@/configs/axios.config";


export const getSeoBySlug = async (slug) => {
    try {
        let { data } = await Axios.get(`/seo/${slug}`);
        return data
    } catch (error) {
        return { data: {} }
    }
}