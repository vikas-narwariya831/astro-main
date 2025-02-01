'use server';

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getSessionCookie = async () => {
    const token = cookies().get(process.env.SESSION_KEY)?.value;
    return token;
}

export const setSessionCookie = async (token, origin) => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    cookies().set(process.env.SESSION_KEY, token, { path: '/', expires: date, domain: `${process.env.NEXT_PUBLIC_AUTHORIZED_DOMAIN}` });
    revalidatePath('/');

    if (origin) {

        if (origin === 'astrologer') {
            redirect(process.env.NEXT_PUBLIC_ASTROLOGER_PLATFORM);
        } else {
            redirect(process.env.NEXT_PUBLIC_USER_PLATFORM);
        }
    }
}
