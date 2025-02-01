import Link from "next/link"
import { BlogCard } from "../cards/BlogCard"
import { TextDecorate } from "../TextDecorate"
import { Button } from "../ui/button"

export const BlogsSection = ({ data }) => {
    return (
        <div className="space-y-16 py-10 w-[90%] lg:w-[80%] m-auto max-w-7xl">
            <div className="text-center space-y-6 px-4 max-w-3xl m-auto">
                <h2 className="text-3xl lg:text-4xl font-georgia-bold text-primary font-semibold">Latest <TextDecorate>Articles</TextDecorate></h2>
                <p className="text-primary">Stay updated with our latest articles, offering insights on astrology, wellness, and life guidance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {data?.map((item) => <BlogCard key={item?._id} {...item} />)}
            </div>

            <Link href={'/blogs'}>
                <Button size="lg" className="m-auto block text-center" variant="outline">
                    See More
                </Button>
            </Link>
        </div >
    )
}
