import Toast from "./Toast";

function ToastContainer({ toasts, onClose }) {
    return(
        <div
        className="
        pointer-events-none
        fixed 
        left-5 
        right-5 
        top-5 
        z-100
        flex 
        flex-col
        gap-3
        sm:left-auto
        sm:w-full
        sm:max-w-sm
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