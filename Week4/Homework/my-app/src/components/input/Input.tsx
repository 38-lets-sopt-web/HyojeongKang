/** @jsxImportSource @emotion/react */
import * as s from "./input.style";

interface InputProps {
    type?: string;
    placeholder?: string;
    value?: string;
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type = 'text', placeholder, value, label, onChange }: InputProps) => {
    return (
        <div css={s.wrapperStyle}>
            {label && <label css={s.labelStyle}>{label}</label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                css={s.inputStyle} 
            />
        </div>
    );
};

export default Input;