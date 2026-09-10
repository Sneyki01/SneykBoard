function Card({ children, variant = 'default', className = ''}) {
    const baseClasses =
    'rounded-sneyk-xl border bg-surface p-6 transition-all duration-300'

    const variants = {
    default:
        'border-border',
    glow:
        'border-primary/60 shadow-primary-glow',
    danger:
        'border-danger/60 shadow-danger-glow',
    success:
        'border-success/50 shadow-success-glow',
    warning:
        'border-warning/50 shadow-warning-glow',
    info:
        'border-info/50 shadow-info-glow',
}

const variantClasses = 
    variants[variant] ?? variants.default;


    return (
    <div 
        className={`
            ${baseClasses} 
            ${variants[variant]} 
            ${className}
        `}
    >
        {children}
    </div>
    );
}
export default Card