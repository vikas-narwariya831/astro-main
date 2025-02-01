import { LoadingContext } from "@/providers/LoadingProvider";
import { useContext } from "react";


const useLoading = () => useContext(LoadingContext);

export { useLoading }