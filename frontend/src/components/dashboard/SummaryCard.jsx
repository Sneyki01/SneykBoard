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
            <div className="absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-primary/20 blur-3xl" />

            <p className="relative font-display text-xs uppercase tracking-[0.22em] text-text-muted">
                {label}
            </p>

            <p className="relative mt-5 font-display text-5xl font-black text-text-primary">
                {displayValue}
                <span className="text-3xl text-primary">{suffix}</span>
            </p>

            {helperText && (
                <p className="relative mt-4 text-sm text-text-secondary">
                {helperText}
                </p>
            )}
        </Card>
    )
}

export default SummaryCard