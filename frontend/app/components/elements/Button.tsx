import Link from 'next/link';
import React from 'react';
interface ButtonProps {
    text: string; // Specify the type of 'text' prop as string
    path: string;
}

const Button: React.FC<ButtonProps> = ({ text, path }) => {

    return (
        <Link href={path}>
            <div className='btn btn-neutral'>
                {text}
            </div>
        </Link>
    );
};

export default Button;
