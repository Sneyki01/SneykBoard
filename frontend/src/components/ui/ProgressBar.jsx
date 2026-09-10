function ProgressBar({
    value = 0,
    label = "Progress",
    showLabel = true,
    variant = "primary",
    className = '',
}) {

    const numericValue = Number(value);

    const safeValue = Number.isFinite(numericValue)
        ? Math.min(Math.max(numericValue, 0), 100)
        : 0;

    const displayValue = Math.round(safeValue)

    const variants = {
        primary: 'bg-primary',
        success: 'bg-success',
        warning: 'bg-warning',
        danger: 'bg-danger',
        info: 'bg-info',
    };

    const variantClasses =
        variants[variant] ?? variants.primary;

    return (
        <div className={className}>
            {showLabel && (
                <div 
                    className="mb-2 flex items-center justify-between font-display text-xs uppercase tracking-[0.16em] text-text-secondary"
                    >
                    <span>{label}</span>
                    <span className="text-text-primary">{displayValue}%</span>
                    </div>
            )}

            <div
                role = "progressbar"
                aria-label={label}
                aria-valuenow={safeValue}
                aria-valuemin={0}
                aria-valuemax={100}
                className="h-3 overflow-hidden rounded-full border border-border bg-background">
                    <div
                    className={`h-full rounded-full transition-[wifth] duration-700 ease-out ${variantClasses}`}
                    style={{ width: `${safeValue}%` }}
                    />
            </div>
        </div>
    )
}

export default ProgressBar