"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const BlogsController = () => {
    const router = useRouter();
    const pathname = usePathname();

    const onSearch = ({ key, target }) => {
        if (target.value == "") {
            router.push(pathname);
        }

        if (key == "Enter") {
            router.push(`${pathname}?q=${target.value}`);
        }
    };

    return (
        <div className="flex items-center space-x-6">
            <div className="flex border px-2 text-sm rounded-md w-full items-center space-x-4">
                <div>
                    <Search strokeWidth={1.5} className="text-gray-400" />
                </div>
                <input
                    onKeyDown={onSearch}
                    placeholder="Search Blogs"
                    type="text"
                    className=" w-full focus:outline-none p-2"
                />
            </div>
        </div>
    );
};

export { BlogsController };