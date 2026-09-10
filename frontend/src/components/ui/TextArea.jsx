function TextArea({
    label,
    id,
    error,
    className = '',
    textareaClassName = '',
    rows = 5,
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
                <textarea
                id={id}
                rows={rows}
                aria-invalid={Boolean(error)}
                aria-describedby={errorId}
                className={`w-full resize-y rounded-sneyk-md border bg-background px-4 py-3 text-sm leading-6 text-text-primary caret-primary outline-none transition-all duration-300 placeholder:text-text-secondary/60 disabled:cursor-not-allowed disabled:resize-none disabled:bg-surface disabled:opacity-50
                    ${
                    error
                    ? 'border-danger focus:border-danger focus:ring-2 focus:ring-danger/30'
                    : 'border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/30'
                
                }
                ${textareaClassName}
                `}
                {...props}
                />

                {error && (
                    <p 
                    id={errorId}
                    className="mt-2 text-sm text-danger"
                    >
                    {error}
                    </p>
                )}
        </div>
    )
}

export default TextArea