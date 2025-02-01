import { getBlogsBySlug } from "@/actions/blogs.action";
import { CheckList } from "@/components/Editorjs/Checklist";
import { Code } from "@/components/Editorjs/Code";
import { Heading } from "@/components/Editorjs/Heading";
import { List } from "@/components/Editorjs/List";
import { Paragraph } from "@/components/Editorjs/Paragraph";
import { Quote } from "@/components/Editorjs/Quote";
import Link from "next/link";
import React from "react";
import { Table } from "@/components/Editorjs/Table";
import { useDateFormat } from "@/hooks/useDateFormat.hook";
import { Img } from "@/components/Editorjs/Image";
import { getSeoBySlug } from "@/actions/seo.action";

// export async function generateMetadata({ slug: { slug } }) {

//     try {
//         let { data } = await getSeoBySlug(slug);
//         console.log(data)
//         if (!data) {
//             return {}
//         }

//         const { title, description, keywords, openGraph } = data;

//         return {
//             title,
//             description,
//             openGraph,
//             alternates: {
//                 canonical: `${process.env.CANONICAL_URL}/blogs/${param}`
//             },
//             keywords
//         }
//     } catch (error) { }
// }

const blogView = async ({ params: { slug } }) => {

    let { data } = await getBlogsBySlug(slug);

    const { formatDate } = useDateFormat();

    return (
        <div className="mt-4 mb-10 w-[90%] m-auto space-y-6">
            <h1 className="text-2xl lg:text-4xl text-primary font-georgia-regular">{data?.title}</h1>
            <div className="flex space-x-2 items-center">
                <div className="rounded-full">
                    <img
                        src="https://cdn.astrovoice.org/brand-assets/logo-purple.webp"
                        alt="author"
                        className="w-14 h-14 rounded-full object-contain"
                    />
                </div>

                <div>
                    <p>
                        Astrovoice &nbsp;
                        <span className="text-primary">
                            <Link className="text-blue-700 font-medium" href={"https://www.linkedin.com/company/astrovoice/"}>
                                Follow us
                            </Link>
                        </span>
                    </p>
                    <p className="text-sm">{formatDate(data?.createdAt)}</p>
                </div>
            </div>

            <p className="text-balance">{data?.description}</p>

            <img src={data?.banner} className="w-full max-h-[600px] object-contain" alt={data?.title} />

            <div className="space-y-6 blogContainer">
                {data?.content?.blocks?.map(({ id, type, data }) => {
                    if (type === "header") {
                        return <Heading key={id} {...data} />
                    }

                    if (type === "paragraph") {
                        return <Paragraph key={id} {...data} />
                    }

                    if (type === "code") {
                        return <Code key={id} {...data} />
                    }

                    if (type === "list") {
                        return <List key={id} {...data} />
                    }

                    if (type === "checklist") {
                        return <CheckList key={id} {...data} />
                    }

                    if (type === "quote") {
                        return <Quote key={id} {...data} />
                    }

                    if (type === "image") {
                        return <Img key={id} {...data} />
                    }

                    if (type === 'table') {
                        return <Table key={id} {...data} />
                    }

                })}
            </div>
        </div>
    );
};

export default blogView;