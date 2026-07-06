function Badge({ children, variant = 'default', className = ''}) {
    const baseClasses = 
    'inline-flex items-center rounded-full border px-3 py-1 font-display text-xs uppercase tracking-[0.16em]'

    const variants = {
        default:
            'border-border bg-surface text-text-secondary',
        primary:
            'border-primary/60 bg-primary-dark/40 text-primary shadow-primary-soft',
        success:
            'border-success/50 bg-success/10 text-success',
        warning:
            'border-warning/50 bg-warning/10 text-warning',
        danger:
            'border-danger/50 bg-danger/10 text-danger shadow-danger-glow',
    }

    return (
        <span className={`${baseClasses} ${variants[variant]} ${className}`}>
            {children}
        </span>
    )
}

export default Badge