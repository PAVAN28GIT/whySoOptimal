import React from 'react';
interface ButtonProps {
    text: string; // Specify the type of 'text' prop as string
}

const Button: React.FC<ButtonProps> = ({ text }) => {

    return (
        <div className='btn btn-neutral'>
            {text}
        </div>
    );
};

export default Button;
