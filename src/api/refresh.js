'use server'

const { revalidatePath } = require('next/cache');

export const refresh = () => {
    revalidatePath('/')
}