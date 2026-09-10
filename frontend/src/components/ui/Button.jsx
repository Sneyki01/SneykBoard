function Button({
    children,
    variant = 'primary',
    size = 'md',
    type = 'button',
    className = '',
    ...props
}) {
    const baseClasses =
    `inline-flex 
    items-center 
    justify-center 
    rounded-sneyk-md 
    font-display 
    uppercase 
    tracking-[0.18em] 
    transition-all 
    duration-300
    active:scale-[0.98]
    focus-visible:outline-none 
    focus-visible:ring-2 
    focus-visible:ring-primary/60 
    disabled:cursor-not-allowed 
    disabled:opacity-50 
    disabled:pointer-events-none 
`;

    const variants = {
        primary:`
        bg-primary 
        text-text-primary 
        shadow-primary-soft 
        hover:bg-primary-soft 
        hover:shadow-primary-glow
        `,
        secondary:`
        border 
        border-border 
        bg-surface 
        text-text-secondary 
        hover:border-primary/60 
        hover:text-text-primary 
        hover:shadow-primary-soft
        `,
        ghost:`
        text-text-secondary 
        hover:bg-surface-hover 
        hover:text-text-primary
        `,
        danger:
        `bg-danger 
        text-text-primary 
        shadow-danger-glow 
        hover:brightness-110
        `,
    };

    
    const sizes = {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-base"
    };
    
    const variantClasses =
        variants[variant] ?? variants.primary;

    const sizeClasses =
        sizes[size] ?? sizes.md;
        
    return (
        <button
            type={type}
            className={`
                ${baseClasses}
                ${variantClasses}
                ${sizeClasses}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button