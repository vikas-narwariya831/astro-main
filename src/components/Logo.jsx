import Link from "next/link"

const Logo = ({ color, href, ...props }) => {

    if (href) return (
        <Link href={href}>
            <img className="w-20 h-20"
                src={color === 'purple' ? `${process.env.CDN}/brand-assets/logo-purple.webp` :
                    color === 'golden' ? `${process.env.CDN}/brand-assets/logo-golden.webp` :
                        `${process.env.CDN}/brand-assets/logo-white.webp`}
                {...props}
            />
        </Link>
    )

    return <img className="w-20 h-20"
        src={color === 'purple' ? `${process.env.CDN}/brand-assets/logo-purple.webp` :
            color === 'golden' ? `${process.env.CDN}/brand-assets/logo-golden.webp` :
                `${process.env.CDN}/brand-assets/logo-white.webp`}
        {...props}
    />
}

export { Logo }