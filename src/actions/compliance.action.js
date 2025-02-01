import { Axios } from "@/configs/axios.config";

export const getComplianceData = async (slug) => {
    try {
        let { data } = await Axios.get(`${process.env.NEXT_PUBLIC_SERVER}/compliances/${slug}`);
        return data;
    } catch (error) {
        return { data: {} };
    }
};