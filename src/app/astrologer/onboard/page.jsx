import { getApplicationById } from "@/actions/application.action"
import { ApplicationForm } from "@/components/ApplicationForm"

const onboard = async ({ searchParams }) => {

    if (searchParams?.applicationId) {
        try {
            var { data } = await getApplicationById(searchParams?.applicationId);
        } catch (error) { }
    }

    return (
        <div className="p-0 md:p-5 h-screen">
            <ApplicationForm key={data} defaultValue={data?.data} />
        </div>
    )
}

export default onboard;