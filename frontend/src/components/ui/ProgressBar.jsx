function ProgressBar({
    value = 0,
    showLabel = true,
    variant = 'primary',
    className = '',
}) {
    const safeValue = Math.min(Math.max(value, 0), 100)

    const variants = {
        primary: 'bg-primary shadow-primary-glow',
        success: 'bg-success shadow-success-glow',
        warning: 'bg-warning',
        danger: 'bg-danger shadow-danger-glow',
    }

    return (
        <div className={className}>
            {showLabel && (
                <div className="mb-2 flex items-center justify-between font-display text-xs uppercase tracking-[0.16em] text-text-secondary">
                    <span>Progress</span>
                    <span className="text-text-primary">{safeValue}%</span>
                    </div>
            )}

            <div className="h-3 overflow-hidden rounded-full border border-border bg-background">
                <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${variants[variant]}`}
                style={{ width: `${safeValue}%` }}
                />
            </div>
        </div>
    )
}

export default ProgressBar