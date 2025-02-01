import Link from "next/link"
const CustomImage = ({ src, alt, href, className, ...props }) => {
    if (href) {
        return <Link href={href}>
            <div className={`${className}`}>
                <img src={src} alt={alt} className="w-full h-full object-contain" />
            </div>
        </Link>
    }
    return (
        <div className={`${className}`}>
            <img src={src} alt={alt} className="w-full h-full object-contain" />
        </div>
    )
}

export { CustomImage }