import { type } from "os";

type NavbarData = {
    title: string;
    path: string;
}

export const navbarData: NavbarData[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Products',
        path: '/products',
    },
    {
        title: 'Craftsmen',
        path: '/craftsmen',
    },
]

export type FormField = {
    name: string;
    type: string;
    placeholder: string;
}

export const formFields: FormField[] = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Enter your name',
    },
    {
        name: 'email',
        type: 'email',
        placeholder: 'Enter your email',
    },
    {
        name: 'password',
        type: 'password',
        placeholder: 'Enter your password',
    },
]
