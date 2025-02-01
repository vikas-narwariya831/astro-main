import { useDateFormat } from '@/hooks/useDateFormat.hook'
import Link from 'next/link'

export const BlogCard = ({ banner, param, createdAt, _id, title }) => {
    const { formatDate } = useDateFormat();
    return <Link key={_id} href={`/blogs/${param}`}>
        <div
            style={{ backgroundImage: `url(${banner})` }}
            className="relative bg-no-repeat bg-center bg-cover h-96 md:h-72 lg:h-96 rounded-xl flex flex-col justify-end text-white"
        >
            <div className="relative md:text-sm lg:text-base p-4 z-10 bg-gradient-to-t from-black to-transparent rounded-b-xl w-full">
                <p className="text-golden-gradient">{formatDate(createdAt)}</p>
                <h2 className="font-medium line-clamp-3">{title}</h2>
            </div>
        </div>
    </Link>
}
