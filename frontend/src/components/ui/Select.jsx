import { ChevronDown } from "lucide-react";

function Select({
    label,
    id,
    error,
    options = [],
    placeholder = 'Select an option',
    className = '',
    selectClassName = '',
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

            <div className="relative">
                <select
                id={id}
                aria-invalid={Boolean(error)}
                aria-describedby={errorId}
                className={`h-11 w-full appearance-none rounded-sneyk-md border bg-background px-4 pr-10 text-sm text-text-primary outline-none transition-all duration-300 disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-50
                    ${
                        error
                        ? 'border-danger focus:border-danger focus:ring-2 focus:ring-danger/30'
                        : 'border-border hover:border-primary/50 focus:border-primary focus:ring-2 focus:ring-primary/30'
                    }
                    ${selectClassName}
                    `}
                {...props}
                >
                    {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    )}

                    {options.map((option) => (
                        <option
                        key={option.value}
                        value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    size={18}
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-text-secondary
                    "
                    />   
            </div>

            {error && (
                <p 
                    id={errorId}
                    className="mt-2 text-xs text-danger"
                    >
                    {error}
                </p>
            )}
        </div>
    )
}

export default Select