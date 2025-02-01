import { Axios } from "@/configs/axios.config";


export const getLandingContext = async () => {
    try {
        let { data } = await Axios.get(`/contexts/landing`)
        return data;
    } catch ({ response }) {
        return { data: {} }
    }
}

export const getNavbarContext = async () => {
    try {
        let { data } = await Axios.get(`/contexts/navbar`)
        return data;
    } catch ({ response }) {
        return { data: [] }
    }
}

export const getFooterContext = async () => {
    try {
        let { data } = await Axios.get(`/contexts/footer`)
        return data;
    } catch ({ response }) {
        return { data: [] }
    }
}

