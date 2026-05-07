/** @jsxImportSource @emotion/react */
import * as s from "./button.style";

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    type?: 'button' | 'submit';
    onClick?: () => void;
}

const Button = ({ children, variant = 'primary', type = 'button' }: ButtonProps) => {
    const selectStyle = variant === 'primary' ? s.primaryButtonStyle : s.secondaryButtonStyle;

    return (
        <button 
            type={type} 
            css={selectStyle}
        >
            {children}
        </button>
    );
};

export default Button;