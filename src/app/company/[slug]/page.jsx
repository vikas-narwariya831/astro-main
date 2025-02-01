import { getComplianceData } from "@/actions/compliance.action";
import { EditorDataDisplay } from "@/components/Editorjs/EditorDataDisplay";


const compliance = async ({ params: { slug } }) => {

    const { data } = await getComplianceData(slug);

    return (
        <div className="w-[95%] md:w-[85%] mx-auto my-8">
            <EditorDataDisplay data={data} />
        </div>
    )
}

export default compliance;