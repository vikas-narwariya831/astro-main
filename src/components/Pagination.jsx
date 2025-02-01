'use client'

import { ChevronLeft, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"
import Link from "next/link"

const Pagination = ({ pageEnd, searchParams }) => {

    const pathname = usePathname();


    const page = +searchParams?.page || 1

    return <div className="flex gap-2 items-center">
        <Link
            className={`bg-primary ${page <= 1 && 'bg-gray-400 text-gray-300 pointer-events-none'} text-primary-foreground rounded-lg p-1`}
            href={{ pathname: pathname, query: { ...searchParams, page: page - 1 } }}
        >
            <ChevronLeft />
        </Link>
        <p>
            {page || 1}
        </p>
        <Link className={`bg-primary ${page >= pageEnd && 'bg-gray-400 text-gray-300 pointer-events-none'}  text-primary-foreground rounded-lg p-1`}
            href={{ pathname: pathname, query: { ...searchParams, page: page + 1 } }}
        >
            <ChevronRight />
        </Link>
    </div>
}

export { Pagination }