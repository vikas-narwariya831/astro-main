'use client';
import { LifeBuoy } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { MdFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";



const Footer = ({ footerItems }) => {

    const pathname = usePathname();

    return !pathname.includes('onboard') && (
        <footer className="py-16">
            <div className="w-[90%] m-auto max-w-7xl space-y-10">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Logo color="purple" className="w-36 h-36" />
                    {
                        footerItems?.map(({ heading, children }) => <ul className="space-y-3 whitespace-nowrap" key={heading}>
                            <h3 className="text-primary font-semibold">{heading}</h3>
                            {children?.map(({ label, href }) => <li className="text-primary opacity-80" key={label}>
                                <Link href={href}>{label}</Link>
                            </li>)}
                        </ul>)
                    }
                </div>

                {/* Bottom Part */}
                <div className="space-y-2 lg:px-6">
                    {/* Contact and Social Links */}
                    <div className="flex items-center justify-end">
                        {/* <p className="flex text-primary opacity-80 font-medium items-center gap-2">
                            <LifeBuoy strokeWidth={1.5} />
                            <Link href="/contact-us">
                                Contact Us
                            </Link>
                        </p> */}

                        <div className="flex items-center text-primary opacity-80 gap-6">
                            <MdFacebook className="w-7 h-7" />
                            <FaInstagram className="w-7 h-7" />
                        </div>
                    </div>
                    <hr />

                    <p className="text-xs text-primary opacity-80">Copyright © 2024 Astrovoice, All rights reserved</p>
                    <p className="text-xs text-primary opacity-80">
                        We use cookies and similar technologies to enhance your interactions with our website and Services, including when you reach out to us on chat.
                        This comprises traffic analysis, delivering personalized content, and supporting our marketing efforts. By accessing our website, interacting with our Services, you agree to let us and our partners employ cookies and related technologies on your computer or devices. Click the Cookies Policy to check how you can control the use of cookies through your device.
                        To understand how we process your data, including through cookies, and interactions with us, please read our Privacy Policy.
                    </p>
                </div>


            </div>
        </footer>
    )
}

export { Footer };