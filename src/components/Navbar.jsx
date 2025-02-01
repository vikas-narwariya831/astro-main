"use client";
import Link from "next/link";
import { CustomImage } from "./CustomImage";
import { forwardRef, useEffect, useRef } from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { LoginMenu } from "./LoginMenu";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname, useSearchParams } from "next/navigation";
import { useSession } from "@/hooks/useSession.hook";

const origins = {
    astrologer: {
        label: 'Talk To Clients',
        href: process.env.NEXT_PUBLIC_ASTROLOGER_PLATFORM
    },

    user: {
        label: 'Talk With Astrologers',
        href: process.env.NEXT_PUBLIC_USER_PLATFORM
    }
}

const Navbar = ({ navItems }) => {

    const session = useSession();
    const dialogRef = useRef();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const origin = searchParams.get('origin');
        if (origin !== 'user' && origin !== 'astrologer') return;
        if (session) return;
        dialogRef?.current?.click();
    }, []);

    return (
        <header className={`w-full ${!pathname.includes('onboard') ? 'block' : 'block md:hidden'}  px-2 h-[80px] shadow-sm sticky top-0 z-50 bg-white`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <CustomImage src={'/logo.jpg'} alt={'logo'} href={'/'} className={'w-16 py-2'} />
                <NavItems navItems={navItems} />
                <div className="hidden md:flex items-center justify-center gap-8" key={pathname}>
                    {/* <Link href={'/astrologer'} className="border-x border-primary flex justify-between px-7 items-center gap-2 h-[80px]">
                        <CustomImage src={'/Icons/be-astrologer.png'} alt={'be-astrologer'} className={'w-6'} />
                        <p className="text-base font-[500] bg-purple-gradient text-transparent bg-clip-text">Be An Astrologer</p>
                    </Link> */}
                    <LoginMenu ref={dialogRef} />
                    <div className="lg:hidden">
                        <MobileNav navItems={navItems} />
                    </div>
                </div>

                <div className="flex md:hidden items-center gap-4">
                    <LoginMenu ref={dialogRef} />
                    <MobileNav navItems={navItems} />
                </div>
            </div>
        </header>
    );
};

const NavItems = ({ navItems }) => {

    const session = useSession();
    const platform = origins[session?.origin || "user"]

    return (
        <nav className="hidden lg:flex gap-14 list-none text-primary font-poppins text-base relative">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href={platform?.href} legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                {platform?.label}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {navItems?.map((item) =>
                        !item?.children.length && item?.isVisible ? (
                            <NavigationMenuItem key={item?.name}>
                                <Link href={item?.href} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {item?.name}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ) : item?.children?.length && item?.isVisible ? (
                            <NavigationMenuItem key={`${item?.name}-${item?.href}`}>
                                <NavigationMenuTrigger>{item?.name}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="flex flex-col min-w-[200px] gap-3 p-4">
                                        {item?.children.map((component) => (
                                            <ListItem
                                                key={`${component.name}-${component.href}`}
                                                title={component.name}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        ) : null
                    )}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
};

const ListItem = forwardRef(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

const MobileNav = ({ navItems }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <HiOutlineMenuAlt1 size={30} color="#210E5B" cursor={'pointer'} />
            </SheetTrigger>
            <SheetContent side={'top'}>
                <SheetHeader>
                    <CustomImage src={'/logo.jpg'} alt={'logo'} href={'/'} className={'w-12 -mt-4'} />
                </SheetHeader>
                <div className="w-full mt-5 flex flex-col">
                    {navItems?.map(({ name, children, href, isVisible }) =>
                        isVisible && !children?.length ? (
                            <SheetClose key={name} asChild>
                                <Link href={href} className="cursor-pointer text-primary font-[500] py-4 text-sm md:text-base border-y">{name}</Link>
                            </SheetClose>
                        ) : isVisible && children?.length ? (
                            <Accordion type="single" collapsible className="pt-0" key={name}>
                                <AccordionItem value={name}>
                                    <AccordionTrigger className="border-t hover:no-underline text-primary font-[500] text-sm md:text-base">{name}</AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-5 pl-4">
                                        {children?.map(({ name: childName, href: childHref, isVisible }) =>
                                            isVisible ? (
                                                <SheetClose key={`${childName}-${childHref}`} asChild>
                                                    <Link href={childHref} className="text-muted font-[500] text-[13px] md:text-sm">{childName}</Link>
                                                </SheetClose>
                                            ) : null
                                        )}
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        ) : null
                    )}

                    <SheetClose asChild className="md:hidden">
                        <Link href={'/astrologer'} className="flex border-t pt-4 items-center gap-2">
                            <CustomImage src={'/Icons/be-astrologer.png'} alt={'be-astrologer'} className={'w-6'} />
                            <p className="text-base font-[500] bg-purple-gradient text-transparent bg-clip-text">Be An Astrologer</p>
                        </Link>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export { Navbar };
