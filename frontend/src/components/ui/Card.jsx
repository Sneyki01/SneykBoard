function Card({ children, variant = 'default', className = ''}) {
    const baseClasses =
    'rounded-sneyk-xl border p-6 transition-all duration-300'

    const variants = {
    default:
        'border-border bg-surface shadow-primary-soft',
    glow:
        'border-primary/60 bg-surface shadow-primary-glow',
    danger:
        'border-danger/60 bg-surface shadow-danger-glow',
    success:
        'border-success/50 bg-surface shadow-success-glow',
}


    return (
    <section className={`${baseClasses} ${variants[variant]} ${className}`}>
        {children}
    </section>
    )
}
export default Card