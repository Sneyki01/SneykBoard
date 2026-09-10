function Input ({
    label,
    id,
    error,
    className = '',
    inputClassName = '',
    ...props
}) {

    const errorId = 
        error && id
            ? `${id}-error`
            : undefined;


    return (
        <div className={className}>
            {label && (
                <label 
                htmlFor={id}
                className="mb-2 block font-display text-xs uppercase tracking-[0.16em] text-text-secondary"
                >
                    {label}
                </label>
            )}

            <input
            id={id}
            className={`h-11 w-full rounded-sneyk-md border bg-background px-4 text-sm text-text-primary caret-primary outline-none transition-all duration-300 placeholder:text-text-secondary/60 disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-50
                ${
                error
                ? 'border-danger focus:border-danger focus:ring-2 focus:ring-danger/30'
                : 'border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/30'
            }
            ${inputClassName}
            `}
            {...props}
            />

            {error && (
                <p 
                id={errorId}
                className="mt-2 text-sm text-danger "
                >
                {error}
                </p>
            )}
        </div>
    )
}

export default Input