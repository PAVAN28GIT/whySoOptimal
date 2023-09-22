import { Client, ID, Storage, Databases } from "appwrite";
import { ProductDetails } from "./constants";

export const uploadProductsImages = async (files: File[]) => {
    try {
        if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
            throw new Error("NEXT_PUBLIC_PROJECT_ID is not defined in your environment variables.");
        }

        const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);
        const storage = new Storage(client);

        const uploadedFiles = await Promise.all(files.map(async (imageFile) => {

            if (!process.env.NEXT_PUBLIC_PRODUCTS_BUCKET_ID) {
                throw new Error("NEXT_PUBLIC_PRODUCTS_BUCKET_ID is not defined in your environment variables.");
            }

            const result = await storage.createFile(
                process.env.NEXT_PUBLIC_PRODUCTS_BUCKET_ID,
                ID.unique(),
                imageFile,
            );

            return result.$id;
        }));

        const uploadedFileUrls = uploadedFiles.map((fileId) => {
            if (!process.env.NEXT_PUBLIC_PRODUCTS_BUCKET_ID) {
                throw new Error("NEXT_PUBLIC_PRODUCTS_BUCKET_ID is not defined in your environment variables.");
            }
            return storage.getFileView(process.env.NEXT_PUBLIC_PRODUCTS_BUCKET_ID, fileId).href
        }
        );

        return uploadedFileUrls;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const uploadProductDocument = async (productDetails: ProductDetails) => {
    try {
        if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
            throw new Error("NEXT_PUBLIC_PROJECT_ID is not defined in your environment variables.");
        }

        if (!process.env.NEXT_PUBLIC_DATABASE_ID) {
            throw new Error("NEXT_PUBLIC_PRODUCTS_BUCKET_ID is not defined in your environment variables.");
        }

        if (!process.env.NEXT_PUBLIC_PRODUCTS_COLLECTION_ID) {
            throw new Error("NEXT_PUBLIC_PRODUCTS_COLLECTION_ID is not defined in your environment variables.");
        }

        const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);
        const databases = new Databases(client);

        const result = await databases.createDocument(
            process.env.NEXT_PUBLIC_DATABASE_ID,
            process.env.NEXT_PUBLIC_PRODUCTS_COLLECTION_ID,
            ID.unique(),
            productDetails,
        );

        return result.$id;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const fetchProducts = async (setProducts) => {
    try {
        if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
            throw new Error("NEXT_PUBLIC_PROJECT_ID is not defined in your environment variables.");
        }

        if (!process.env.NEXT_PUBLIC_DATABASE_ID) {
            throw new Error("NEXT_PUBLIC_PRODUCTS_BUCKET_ID is not defined in your environment variables.");
        }

        if (!process.env.NEXT_PUBLIC_PRODUCTS_COLLECTION_ID) {
            throw new Error("NEXT_PUBLIC_PRODUCTS_COLLECTION_ID is not defined in your environment variables.");
        }

        const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);
        const databases = new Databases(client);

        const result = await databases.listDocuments(
            process.env.NEXT_PUBLIC_DATABASE_ID,
            process.env.NEXT_PUBLIC_PRODUCTS_COLLECTION_ID,
        );

        console.log(result.documents);
        setProducts(result.documents);
        return result.documents;
    }
    catch (error) {
        console.error(error);
    }
}