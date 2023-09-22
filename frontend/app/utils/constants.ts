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
    {
        title: 'Inventory',
        path: '/inventory',
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

export type ProductDetails = {
    title: string;
    ratings: number;
    price: number;
    images: string[];
    description: string;
    category: string;
}

export type ProductField = {
    name: string;
    type: string;
    placeholder: string;
}

export const productFields: ProductField[] = [
    {
        name: 'title',
        type: 'text',
        placeholder: 'Enter product title',
    },
    {
        name: 'price',
        type: 'number',
        placeholder: 'Enter product price',
    },
    {
        name: 'description',
        type: 'text',
        placeholder: 'Enter product description',
    },
    {
        name: 'category',
        type: 'text',
        placeholder: 'Enter product category',
    },
]
