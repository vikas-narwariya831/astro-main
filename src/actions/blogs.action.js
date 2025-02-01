import { Axios } from "@/configs/axios.config";

export const getBlogs = async (searchParams) => {
    try {
        let { data } = await Axios.get(`/blogs`, {
            params: searchParams
        })
        return data;
    } catch ({ response }) {
        return { data: [] }
    }
}

export const getBlogsBySlug = async (slug) => {
    try {
        let { data } = await Axios.get(`/blogs/${slug}`)
        return data
    } catch ({ response }) {
        return { data: {} }
    }
}