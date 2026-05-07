/** @jsxImportSource @emotion/react */
import * as s from "./input.style";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type = 'text', placeholder, value, label, onChange }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div css={s.wrapperStyle}>
            <label css={s.labelStyle}>{label}</label>
            <div css={s.inputWrapperStyle}>
            <input
                type={type === 'password' && showPassword ? 'text' : type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                css={s.inputStyle}
            />
            {type === 'password' && (
                <button
                    type="button"
                    css={s.toggleButtonStyle}
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
            )}
            </div>
        </div>
    );
};

export default Input;