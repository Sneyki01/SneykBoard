function Button({
    children,
    variant = 'primary',
    size = 'md',
    type = 'button',
    className = '',
    ...props
}) {
    const baseClasses =
    'inline-flex items-center justify-center rounded-sneyk-md font-display uppercase tracking-[0.18em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-50'

    const variants = {
        primary:
        'bg-primary text-text-primary shadow-primary-soft hover:bg-primary-soft hover:shadow-primary-glow',
        secondary:
        'border border-border bg-surface text-text-secondary hover:border-primary/60 hover:text-text=primary hover:shadow-primary-soft',
        ghost:
        'text-text-secondary hover:bg-surface-hover hover:text-text=primary',
        danger:
        'bg-danger text-text-primary shadow-danger-glow hover:brightness-110',
    }

    const sizes = {
        sm: 'px-4 py-2 text-xs',
        md: 'px-5 py-3 text-sm',
        lg: 'px-6 py-4 text-base',
    }

    return (
        <button
        type={type}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
        >
        {children}
        </button>
    )
}

export default Button