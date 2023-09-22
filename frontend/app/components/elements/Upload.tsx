'use client'

import { ProductDetails, productFields } from '@/app/utils/constants';
import { uploadProductDocument, uploadProductsImages } from '@/app/utils/productFunctions';
import Image from 'next/image';
import React, { useState, ChangeEvent } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const Upload = () => {
    const [productDetails, setProductDetails] = useState<ProductDetails>({
        title: '',
        ratings: 0,
        price: 0,
        images: [],
        description: '',
        category: '',
    });

    const handleProductDetails = (e: ChangeEvent<HTMLInputElement>) => {
        setProductDetails({
            ...productDetails,
            [e.target.name]: e.target.value,
        });
    };

    const checkValidity = async () => {
        if (productDetails.title.length < 5) {
            toast.error('Longer Title is required');
        } else if (productDetails.price < 0) {
            toast.error('Price must be greater than 0');
        } else if (productDetails.images.length === 0) {
            toast.error('Atleast one image is required');
        } else if (productDetails.description.length < 10) {
            toast.error('Longer Description is required');
        } else if (productDetails.category.length < 3) {
            toast.error('Longer Category is required');
        } else {
            const result = await uploadProductDocument(productDetails);
            if (result) {
                toast.success('Product uploaded successfully');
            } else {
                toast.error('Product upload failed');
            }
            setProductDetails({
                title: '',
                ratings: 0,
                price: 0,
                images: [],
                description: '',
                category: '',
            });
            document.getElementById('uploadFile')?.setAttribute('value', '');
        }
    }

    const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const result = await uploadProductsImages(Array.from(files));
            if (result.length > 0) {
                toast.success('Images uploaded successfully');
                setProductDetails({
                    ...productDetails,
                    images: result,
                });
            } else {
                toast.error('Image upload failed');
            }
        } else {
            toast.error('No file selected');
        }
    };

    return (
        <>
            <Toaster />
            <div className={`min-h-screen relative pt-20 md:pt-24 pb-10 xl:pt-16 xl:pb-0 w-full flex items-center justify-center bg-cover bg-center bg-[url("https://greenfoundationnepal.com/wp-content/uploads/2015/05/RUM06696-1.jpg")]`}>
                <div className='absolute h-full inset-0 bg-gradient-to-l from-transparent via-opacity-50 to-black'></div>
                <div className="uploadContent relative z-20 w-full lg:mx-40 flex items-center justify-center space-x-8">
                    <div className='uploadForm w-full bg-[rgba(255,255,255,0.1)] text-white flex flex-col lg:flex-row space-y-8 lg:space-y-0 rounded-xl p-4 md:p-8 backdrop-blur-2xl shadow-2xl border-[rgba(255,255,255,0.1)]'>
                        <div className="images flex items-center lg:order-2 lg:ml-8 lg:w-1/2 rounded-xl">
                            <label className='w-full cursor-pointer' htmlFor="uploadFile">
                                <Image className='w-full p-10 bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl rounded-xl' src="/images/upload.svg" alt="upload" width={100} height={100} />
                                <input onChange={handleFileUpload} className="hidden" type="file" name="uploadFile" id="uploadFile" multiple />
                            </label>
                        </div>
                        <div className='uploadForm lg:order-1 lg:w-1/2 bg-[rgba(255,255,255,0.1)] text-white flex flex-col rounded-xl space-y-8 p-8 backdrop-blur-2xl shadow-2xl border-[rgba(255,255,255,0.1)]'>
                            <h1 className='font-bold text-6xl'>Upload Product</h1>
                            {productFields.map((field, index) => (
                                <input
                                    key={index}
                                    required
                                    className='outline-none placeholder:text-white bg-transparent border-b p-2 border-[rgba(255,255,255,0.5)]'
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    name={field.name}
                                    id={field.name}
                                    onChange={handleProductDetails}
                                    value={productDetails[field.name as keyof ProductDetails]}
                                />
                            ))}
                            <button onClick={checkValidity} className="btn btn-active">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Upload;
