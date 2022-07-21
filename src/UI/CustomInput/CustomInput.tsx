import React, {DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';
import st from './CustomIput.module.css'
type DefaultInputPropsTypes = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type CustomInputPropsTypes = DefaultInputPropsTypes & {
    error?: string

}
export const CustomInput:React.FC<CustomInputPropsTypes> = (
    {
        type, onChange,
        onKeyDown, className,
        error, ...rest
    }
) => {
    const onChangeCallBack =(e:React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyDown && onKeyDown(e);
    }

    const finalInputClassName =
        !error ?
            className ? className : ''
        :
            st.error

    return (
        <>
            <input
            type={type}
            onChange={onChangeCallBack}
            onKeyDown={onKeyPressCallback}
            className={finalInputClassName}

            {...rest}
            />
        </>
    );
};
