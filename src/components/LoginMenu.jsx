"use client";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { FaAngleDown } from "react-icons/fa6";
import { ChevronRight, ExternalLink, LogOut, MoveRight, User } from "lucide-react";
import { useSession } from "@/hooks/useSession.hook";
import { useEffect, useState, forwardRef } from "react";
import { setSessionCookie } from "@/api/session";
import { useTimer } from "@/hooks/useTimer.hook";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { toast } from "sonner";

import countries from "../constants/countries.json";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Logo } from "./Logo";
import { useFormatCurrency } from "@/hooks/useFormatCurrency";


const LoggedInList = {
    astrologer: [
        {
            label: 'Manage Profile',
            href: `${process.env.NEXT_PUBLIC_ASTROLOGER_PLATFORM}/profile`
        },
        {
            label: 'Inbox',
            href: `${process.env.NEXT_PUBLIC_ASTROLOGER_PLATFORM}/inbox`
        },
        {
            label: 'History',
            href: `${process.env.NEXT_PUBLIC_ASTROLOGER_PLATFORM}/history`
        },
        {
            label: 'Support',
            href: `${process.env.NEXT_PUBLIC_ASTROLOGER_PLATFORM}/support`
        },
    ],

    user: [
        {
            label: 'Manage Profile',
            href: `${process.env.NEXT_PUBLIC_USER_PLATFORM}/profile`
        },
        {
            label: 'History',
            href: `${process.env.NEXT_PUBLIC_USER_PLATFORM}/history`
        },
        {
            label: 'Support',
            href: `${process.env.NEXT_PUBLIC_USER_PLATFORM}/support`
        },
    ]
}


const LoginMenu = forwardRef((_, ref) => {

    const searchParams = useSearchParams();

    const session = useSession();
    const { formatCurrency } = useFormatCurrency()

    const [isSending, setIsSending] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const [mobileNumber, setMobileNumber] = useState('');
    const [telCode, setTelCode] = useState(91)

    const { startTimer, isRunning, states } = useTimer(60);

    const [isSent, setIsSent] = useState(false);
    const [modalOriginator, setModalOriginator] = useState('user');

    const onResetStates = () => {
        setIsSent(false);
        setMobileNumber('');
        setIsLoading(false);
    }

    const sendOtp = async () => {

        if (isRunning) return;

        if (!mobileNumber) {
            toast('Please a enter mobile number');
            return;
        }

        setIsSending(true);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER}/otp/send`,
                {
                    method: 'POST',
                    body: JSON.stringify({ mobileNumber, telCode }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )

            const { message } = await response.json();

            if (response.ok) {
                setIsSent(true);
                startTimer();
                toast('OTP sent', { description: message });
            } else {
                toast(message);
            }

        } catch (error) {
            toast(error.message);
        }

        setIsSending(false);
    }

    const signIn = async (otp) => {

        if (otp?.length !== 4) return

        setIsLoading(true);

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER}/auth/signin/${modalOriginator}`,
                {
                    method: 'POST',
                    body: JSON.stringify({ mobileNumber }),
                    headers: {
                        'Content-Type': 'application/json',
                        'X-ASTRO-OTP': otp
                    }
                }
            )

            const { message } = await response.json();

            if (response.ok) {
                await setSessionCookie(response.headers.get('X-ASTRO-TOKEN'), modalOriginator);
                toast(message);
            } else {
                toast(message);
            }

        } catch (error) {
            toast(error?.message);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        const origin = searchParams.get('origin');
        if (origin !== 'user' && origin !== 'astrologer') return;
        setModalOriginator(origin);
    }, []);

    return (
        <Dialog onOpenChange={(isOpen) => !isOpen && onResetStates()}>
            <DialogTrigger id="loginModal" ref={ref} className="hidden" />
            <Popover>
                {session ? (
                    <>
                        <PopoverTrigger asChild>
                            <Avatar>
                                <AvatarImage src={session?.avatar} />
                                <AvatarFallback>
                                    <Button variant="gradientPurple" className="size-10 rounded-full">
                                        <User />
                                    </Button>
                                </AvatarFallback>
                            </Avatar>

                        </PopoverTrigger>
                        <PopoverContent className="w-[220px] space-y-4 rounded-xl border-0 border-t-4 border-purple-700">
                            {session?.name && <div className="flex gap-2 items-center">
                                <Avatar>
                                    <AvatarImage src={session?.avatar} />
                                    <AvatarFallback>
                                        <Button variant="gradientPurple" className="size-10 rounded-full">
                                            <User />
                                        </Button>
                                    </AvatarFallback>
                                </Avatar>

                                <div className="whitespace-nowrap">
                                    <p className="capitalize font-semibold text-primary">{session?.name}</p>
                                    <p className="text-primary opacity-70 text-sm">+{session?.mobileNumber?.telCode} {session?.mobileNumber?.number}</p>
                                </div>

                            </div>}

                            <div>
                                <ol className="space-y-3">
                                    {
                                        LoggedInList[session?.origin]?.map(({ label, href }) => <Link className="flex text-primary items-center w-full justify-between whitespace-nowrap text-sm" key={label} href={href}>
                                            {label}
                                            <ChevronRight size={18} />
                                        </Link>)
                                    }
                                    <Link className="flex text-primary items-center w-full justify-between whitespace-nowrap text-sm" href={session?.origin == 'user' ? `${process.env.NEXT_PUBLIC_USER_PLATFORM}/wallet` : `${process.env.NEXT_PUBLIC_ASTROLOGER_PLATFORM}/wallet`}>
                                        Wallet ({formatCurrency(session?.wallet?.balance)})
                                        <ChevronRight size={18} />
                                    </Link>
                                </ol>
                            </div>

                            <Link className="block" href={session?.origin == 'user' ? process.env.NEXT_PUBLIC_USER_PLATFORM : process.env.NEXT_PUBLIC_ASTROLOGER_PLATFORM}>
                                <Button className="w-full" variant="gradientPurple">Launch <ExternalLink size={32} /> </Button>
                            </Link>

                            <hr />

                            <form action={`${process.env.NEXT_PUBLIC_SERVER}/auth/signout/${session?.origin}`} method="POST">
                                <Button className="text-purple-gradient text-base" variant="link">
                                    <LogOut size={32} className="text-primary" />
                                    Logout
                                </Button>
                            </form>
                        </PopoverContent>
                    </>
                ) : (
                    <>
                        <PopoverTrigger asChild>
                            <Button variant="gradientPurple">
                                Login
                                <FaAngleDown />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[220px] rounded-xl border-0 border-t-4 border-purple-700">

                            <div className="mb-4">
                                <div className="flex gap-2 items-center">
                                    <User className="text-primary" />
                                    <p className="text-[14px] font-[500] text-primary">For Users</p>
                                </div>
                                <p className="font-[400] mt-2 mb-3 text-[12px] text-muted">Seeking for an astrology session? Get started today.</p>
                                <DialogTrigger
                                    className="font-[500] text-base bg-purple-gradient text-transparent bg-clip-text cursor-pointer"
                                    onClick={() => setModalOriginator('user')}
                                >
                                    Login &rarr;
                                </DialogTrigger>
                            </div>
                            <hr />
                            <div className="mt-4">
                                <div className="flex gap-2 items-center">
                                    <img src="/logo.jpg" alt="astrologer" className="w-6" />
                                    <p className="text-[14px] font-[500] text-primary">For Astrologers</p>
                                </div>
                                <p className="font-[400] mt-2 mb-3 text-[12px] text-muted">Wants to join the community. Get started today.</p>
                                <DialogTrigger
                                    className="font-[500] text-base bg-purple-gradient text-transparent bg-clip-text cursor-pointer"
                                    onClick={() => setModalOriginator('astrologer')}>
                                    Login &rarr;
                                </DialogTrigger>
                            </div>
                        </PopoverContent>
                    </>
                )}
            </Popover>

            <DialogContent onInteractOutside={(e) => e.preventDefault()} className='p-4 sm:p-8 focus-visible:outline-none w-[94%] max-w-96'>
                <DialogHeader>
                    <DialogTitle className={'my-6 font-medium text-center'}>
                        {isSent ? (
                            <span >
                                OTP has been sent to <span className="text-base bg-purple-gradient text-transparent bg-clip-text cursor-pointer"> +{telCode} {mobileNumber} </span>
                            </span>
                        ) : (
                            <span>
                                Login as <span className="font-[500] text-base bg-purple-gradient text-transparent bg-clip-text cursor-pointer"> {modalOriginator} </span>
                            </span>
                        )}
                    </DialogTitle>
                    <DialogDescription>
                        {isSent ? (
                            <div className="flex flex-col items-center gap-2">
                                <div>
                                    <InputOTP
                                        disabled={isLoading}
                                        pattern={/^\d+$/}
                                        maxLength={4}
                                        onChange={signIn}
                                    >
                                        <InputOTPGroup>
                                            <InputOTPSlot className={'size-10 md:size-12'} index={0} />
                                            <InputOTPSlot className={'size-10 md:size-12'} index={1} />
                                            <InputOTPSlot className={'size-10 md:size-12'} index={2} />
                                            <InputOTPSlot className={'size-10 md:size-12'} index={3} />
                                        </InputOTPGroup>
                                    </InputOTP>

                                    {isLoading && (
                                        <div className="flex items-center gap-2 mt-2" >
                                            <div class="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                            <p> Verifiying... </p>
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6 font-medium" >
                                    {isSending ? (
                                        <div className="flex items-center gap-2" >
                                            <div class="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                            <p> Sending... </p>
                                        </div>
                                    ) : (
                                        <p className={`${(isRunning || isLoading) ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}>
                                            {isRunning ? (
                                                <span> Resend in {states.seconds}s </span>
                                            ) : (
                                                <span onClick={sendOtp} className="bg-purple-gradient text-transparent bg-clip-text" > Resend OTP &rarr; </span>
                                            )}
                                        </p>
                                    )}
                                </div>

                                <p className="mt-6" > Incorrect number? <span className="bg-purple-gradient text-transparent bg-clip-text cursor-pointer" onClick={onResetStates}> Change </span> </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-8">
                                <div className="flex rounded-xl overflow-hidden px-2 border border-input">
                                    <select className="w-12 h-14 focus:outline-none bg-white cursor-pointer" value={telCode} onChange={({ target: { value } }) => setTelCode(value)}>
                                        {countries.map(({ name, prefix }) => (<option key={name} value={prefix}> +{prefix} &nbsp; ({name}) </option>))}
                                    </select>
                                    <Input
                                        className={'h-14 w-full border-none'}
                                        placeholder={'Mobile Number'}
                                        inputMode="numeric"
                                        value={mobileNumber}
                                        onChange={({ target: { value } }) => value ? /^\d+$/.test(value) && setMobileNumber(value) : setMobileNumber(value)}
                                    />
                                </div>
                                <Button
                                    className={'h-12 rounded-xl'}
                                    onClick={sendOtp}
                                    disabled={isRunning || isSending}
                                >
                                    {isSending ? (
                                        <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <p> {isRunning ? `Please Wait for ${states.seconds}s` : `Get OTP`} </p>
                                    )}
                                </Button>

                                {modalOriginator === 'astrologer' && (
                                    <p className="text-center">
                                        Don't have an account? <Link className="font-medium bg-purple-gradient text-transparent bg-clip-text" href={'/astrologer/onboard'}> Join Now </Link>
                                    </p>
                                )}

                            </div>
                        )}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
})

export { LoginMenu };