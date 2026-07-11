function Select({
    label,
    id,
    error,
    options = [],
    placeholder = 'Select an option',
    className = '',
    ...props
}) {
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

            <select
            id={id}
            className={`w-full rounded-sneyk-md border bg-background px-4 py-3 text-text-primary outline-none transition duration-300 ${
                error
                ? 'border-danger focus:border-danger focus:ring-2 focus:ring-danger/30'
                : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/30'
            }`}
            {...props}
            >
                <option value="">
                    {placeholder}
                </option>

                {options.map((option) => (
                    <option
                    key={option.value}
                    value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            {error && (
                <p className="mt-2 text-sm text-danger">
                    {error}
                </p>
            )}
        </div>
    )
}

export default Select