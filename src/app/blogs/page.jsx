import { getBlogs } from "@/actions/blogs.action";
import { BlogsController } from "@/components/BlogController";
import { BlogCard } from "@/components/cards/BlogCard";
import { Pagination } from "@/components/Pagination";


const blogs = async ({ searchParams }) => {
    let { data, page, pageEnd } = await getBlogs(searchParams);

    return (
        <section className="my-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="space-y-5 md:text-center md:max-w-lg md:mx-auto">
                    <h1 className="text-primary text-3xl font-[600] md:text-4xl">
                        Latest blog posts
                    </h1>
                    <p className="text-gray-600">
                        Blogs that are loved by the community. Updated every hour.
                    </p>
                    <BlogsController />
                </div>
                <ul className="grid gap-x-10 gap-y-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
                    {data.map((item) => (
                        <BlogCard key={item._id} {...item} />
                    ))}
                </ul>
            </div>

            <section className="m-auto w-fit my-10">
                <Pagination pageEnd={pageEnd} searchParams={searchParams} />
            </section>
        </section>
    );
};

export default blogs;