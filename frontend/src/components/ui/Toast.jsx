import { useEffect } from "react";
import { CircleCheck, CircleX, Info, TriangleAlert, X } from "lucide-react";

const toastStyles = {
    success: {
        icon: CircleCheck,
        iconClass: "text-green-400",
        borderClass: "border-green-400/40",
        glowClass: "shadow-[0_0_24px_rgba(34,197,94,0.18)]",
    },

    error: {
        icon: CircleX,
        iconClass: "text-red-400",
        borderClass: "border-red-400/40",
        glowClass: "shadow-[0_0_24px_rgba(248,113,113,0.18)]",
    },

    warning: {
        icon: TriangleAlert,
        iconClass: "text-yellow-400",
        borderClass: "border-yellow-400/40",
        glowClass: "shadow-[0_0_24px_rgba(250,204,21,0.18)]",
    },

    info: {
        icon: Info,
        iconClass: "text-blue-400",
        borderClass: "border-blue-400/40",
        glowClass: "shadow-[0_0_24px_rgba(96,165,250,0.18)]",
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
            rounded-xl
            border
            bg-surface/95
            p-4
            backdrop-blur-md
            ${style.borderClass}
            ${style.glowClass}
            `}
        >
            <div className="flex item-start gap-3">
                <icon
                size={22}
                className={`mt-0.5 shrink-0 ${style.iconClass}`}
                aria-hidden="true"
                />

                <div className="min-w-0 flex-1">
                    <p className="font-display font-semibold text-text-primary">
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
                rounded-md p-1
                text-text-secondary
                transition
                hover:bg-white/5
                hover:text-text-primary
                focus:outline-none
                focus:ring-2
                focus:ring-primary
                "
                >
                    <X size={17} aria-hidden="true" />
                </button>
            </div>
        </div>
    );
}

export default Toast;