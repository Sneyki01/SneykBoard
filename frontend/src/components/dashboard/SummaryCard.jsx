import { useEffect, useState } from "react";
import Card from "../ui/Card";

function SummaryCard({
    label, 
    value = 0,
    suffix = '',
    helperText,
    variant = 'default'
}) {
    const [displayValue, setDisplayValue] = useState(0)

    const accentVariants = {
        default: "bg-primary/15",
        glow: "bg-primary/25",
        success: "bg-success/15",
        warning: "bg-warning/15",
        danger: "bg-danger/15",
        info: "bg-info/15",
    };

    const textVariants = {
        default: "text-primary-soft",
        glow: "text-primary-soft",
        success: "text-success",
        warning: "text-warning",
        danger: "text-danger",
        info: "text-info",
    };

    const accentClass =
        accentVariants[variant] ?? accentVariants.default;

    const textClass =
        textVariants[variant] ?? textVariants.default;

    useEffect(() => {
        let start = 0
        const end = Number(value) || 0
        const duration = 700
        const stepTime = 20
        const steps = duration / stepTime
        const increment = end / steps

        const counter = setInterval(() => {
            start += increment

            if (start >= end) {
                setDisplayValue(end)
                clearInterval(counter)
            } else {
                setDisplayValue(Math.floor(start))
            }
        }, stepTime)
        return () => clearInterval(counter)
    }, [value])

    return (
        <Card variant={variant} className="relative overflow-hidden">
            <div className={`pointer-events-none absolute -right-10 top-10 h-28 w-28 rounded-full blur-3xl ${accentClass}`} />

            <p className="relative font-display text-xs uppercase tracking-[0.22em] text-text-secondary/70">
                {label}
            </p>

            <p className="relative mt-5 font-display text-5xl font-black text-text-primary">
                {displayValue}

                {suffix && (
                    <span className={`ml-1 text-3xl ${textClass}`}> 
                    {suffix} 
                    </span>
                )}
            </p>

            {helperText && (
                <p className="relative mt-4 text-sm text-text-secondary">
                {helperText}
                </p>
            )}
        </Card>
    );
}

export default SummaryCard;