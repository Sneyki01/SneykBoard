import Toast from "./Toast";

function ToastContainer({ toasts, onClose }) {
    return(
        <div
        className="
        pointer-events-none
        fixed right-5 top-5 z-100
        flex w-[calc(100%-2.5rem)]
        max-w-sm flex-col gap-3
        "
        aria-live="polite"
        aria-relevant="additions removals"
        >
            {toasts.map((toast) => (
                <Toast
                key={toast.id}
                {...toast}
                onClose={onClose}
                />
            ))}
        </div>
    );
}

export default ToastContainer;