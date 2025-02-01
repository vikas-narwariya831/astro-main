import { CheckList } from "./Checklist";
import { Code } from "./Code";
import { Heading } from "./Heading";
import { Img } from "./Image";
import { List } from "./List";
import { Paragraph } from "./Paragraph";
import { Quote } from "./Quote";

export const EditorDataDisplay = ({ data }) => {

    return <div className="space-y-6 blogContainer">
        {data?.content?.blocks?.map(({ id, type, data }) => {
            if (type === "header") {
                return <Heading key={id} {...data} />;
            }

            if (type === "paragraph") {
                return <Paragraph key={id} {...data} />;
            }

            if (type === "code") {
                return <Code key={id} {...data} />;
            }

            if (type === "list") {
                return <List key={id} {...data} />;
            }

            if (type === "checklist") {
                return <CheckList key={id} {...data} />;
            }

            if (type === "quote") {
                return <Quote key={id} {...data} />;
            }

            if (type == 'image') {
                return <Img key={id} {...data} />
            }
        })}
    </div>
}
