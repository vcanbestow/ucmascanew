import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'ucmas_red_btn_outline' | 'ucmas_red_btn' | 'unset' | 'header_ucmas_white_btn_outline' | 'header_ucmas_red_btn' | 'header_ucmas_sky_btn' | 'yellow_btn' | 'outline' | 'ghost' | 'glass' | 'ucmasPrimary';
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    href?: string;
}

export default function Button({
    children,
    variant = 'ucmas_red_btn_outline',
    icon,
    iconPosition = 'left',
    href,
    className = '',
    ...props
}: ButtonProps & { className?: string }) {

    const baseStyle = "rounded-[.45rem] w-max transition-all duration-300 flex items-center justify-center gap-2";

    const variants = {
        ucmas_red_btn_outline: "px-8 py-2 border border-ucmas-red hover:bg-ucmas-red hover:text-white hover:-translate-y-[0.125rem] text-ucmas-red group font-semibold",
        unset: "px-4 py-2  transition-colors focus:outline-none",
        header_ucmas_red_btn: "px-4 py-2 bg-ucmas-red border border-ucmas-red hover:-translate-y-[0.125rem] hover:shadow text-white group text-sm hover:shadow-[0_0.625rem_0.9375rem_-0.1875rem_rgba(239,51,64,0.3)]",
        header_ucmas_sky_btn: "px-[1rem] py-[0.5rem] bg-ucmas-sky border border-ucmas-sky hover:-translate-y-[0.125rem] text-white group text-sm hover:shadow-[0_0.625rem_0.9375rem_-0.1875rem_rgba(0,174,239,0.3)]",
        header_ucmas_white_btn_outline: "px-4 py-2 bg-white border border-ucmas-headerbtn text-ucmas-headerbtn hover:-translate-y-[0.125rem] hover:shadow  group text-sm hover:shadow-[rgba(239, 51, 64, 0.3) 0px 10px 15px -3px;]",
        ucmas_red_btn: "px-8 py-2 border border-ucmas-red bg-ucmas-red hover:border-ucmas-blue hover:bg-ucmas-blue hover:-translate-y-[0.125rem] hover:text-white text-white group font-semibold",
        yellow_btn: "px-6 py-2 bg-ucmas-counter-franchise-yellow hover:-translate-y-[0.125rem] text-ucmas-blue group font-semibold",
        outline: "border border-white/20 text-gray-300 hover:text-white hover:border-white/50 hover:bg-white/5",
        ghost: "text-gray-400 hover:text-white hover:bg-white/10",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(255,255,255,0.1)]",
        ucmasPrimary: "bg-ucmas-red text-white hover:bg-ucmas-red/90",
    };

    // Check agar variant me 'header_ucmas' shamil hai
    const disableIconHover = variant.includes('header_ucmas');

    const content = (
        <>
            {icon && iconPosition === 'left' && (
                <span className={`flex items-center justify-center transition-transform duration-300 button_svgicon ${disableIconHover ? '' : 'group-hover:-translate-x-1'}`}>
                    {icon}
                </span>
            )}

            <span>{children}</span>

            {icon && iconPosition === 'right' && (
                <span className={`flex items-center justify-center transition-transform duration-300 button_svgicon ${disableIconHover ? '' : 'group-hover:translate-x-1'}`}>
                    {icon}
                </span>
            )}
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={`${baseStyle} ${variants[variant]} ${className}`}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {content}
        </button>
    );
}