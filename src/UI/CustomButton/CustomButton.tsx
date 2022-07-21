import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsTypes = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type CustomButtonPropsTypes = DefaultButtonPropsTypes & {}
export const CustomButton: React.FC<CustomButtonPropsTypes> = (
    {
        children, className, ...rest
    }
) => <button className={className} {...rest}>{children}</button>