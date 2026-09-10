function Badge({ children, variant = 'default', className = ''}) {
    const baseClasses = 
    'inline-flex h-7 items-center justify-center rounded-full border px-3 font-display text-xs uppercase leading-none tracking-[0.16em] transition-colors duration-200'

    const variants = {
        default:
            'border-border bg-surface text-text-secondary',
        primary:
            'border-primary/60 bg-primary-dark/40 text-primary-soft',
        success:
            'border-success/50 bg-success/10 text-success',
        warning:
            'border-warning/50 bg-warning/10 text-warning',
        danger:
            'border-danger/50 bg-danger/10 text-danger',
        info:
            'border-info/50 bg-info/10 text-info',
    }

    const variantClasses = 
    variants[variant] ?? variants.default;

    return (
        <span 
            className={`
                ${baseClasses} 
                ${variants[variant]} 
                ${className}
            `}
        >
            {children}
        </span>
    )
}

export default Badge