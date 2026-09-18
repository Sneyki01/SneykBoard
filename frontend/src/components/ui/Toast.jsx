import { useEffect } from "react";
import { CircleCheck, CircleX, Info, TriangleAlert, X } from "lucide-react";

const toastStyles = {
    success: {
        icon: CircleCheck,
        iconClass: "text-success",
        borderClass: "border-success/40",
        glowClass: "shadow-success-glow",
    },

    error: {
        icon: CircleX,
        iconClass: "text-danger",
        borderClass: "border-danger/40",
        glowClass: "shadow-danger-glow",
    },

    warning: {
        icon: TriangleAlert,
        iconClass: "text-warning",
        borderClass: "border-warning/40",
        glowClass: "shadow-warning-glow",
    },

    info: {
        icon: Info,
        iconClass: "text-info",
        borderClass: "border-info/40",
        glowClass: "shadow-info-glow",
    },
};

function Toast({
    id,
    type = "info",
    title,
    message,
    duration,
    onClose,
}) {
    const style = toastStyles[type] ?? toastStyles.info;
    const Icon = style.icon;

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(id);
        }, duration);

        return () => clearTimeout(timer);
    }, [id, duration, onClose]);

    return (
        <div
        role={type === "error" ? "alert" : "status"}
        className={
            `pointer-events-auto
            rounded-sneyk-lg
            border
            bg-surface/95
            p-4
            backdrop-blur-md
            ${style.borderClass}
            ${style.glowClass}
            `}
        >
            <div className="flex items-start gap-3">
                <Icon
                size={22}
                className={`mt-0.5 shrink-0 ${style.iconClass}`}
                aria-hidden="true"
                />

                <div className="min-w-0 flex-1">
                    <p className="font-display text-sm font-semibold tracking-[0.06em] text-text-primary">
                        {title}
                    </p>

                    {message && (
                        <p className="mt-1 text-sm leading-5 text-text-secondary">
                            {message}
                        </p>
                    )}
                </div>

                <button
                type="button"
                onClick={() => onClose(id)}
                aria-label="Close notification"
                className="
                inline-flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-sneyk-md
                text-text-secondary
                transition-colors
                duration-200
                hover:bg-surface-hover
                hover:text-text-primary
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-primary/60
                "
                >
                    <X size={17} aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}

export default Toast;