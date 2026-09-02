import { createContext, useCallback, useState } from "react";
import ToastContainer from "../components/ui/ToastContainer";

export const ToastContext = createContext(null);

const DEFAULT_DURATION = {
    success: 4000,
    info: 4000,
    warning: 5000,
    error: 6000,
};

function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const removeToast = useCallback((toastId) => {
        setToasts((currentToasts) =>
        currentToasts.filter(
            (toast) => toast.id !== toastId
        )
    );
    }, []);

    const showToast = useCallback(({
        type = "info",
        title,
        message,
        duration,
    }) => {
        const toast = {
            id: crypto.randomUUID(),
            type,
            title,
            message,
            duration:
            duration ??
            DEFAULT_DURATION[type] ??
            4000,
        };

        setToasts((currentToasts) => 
        [toast, ...currentToasts].slice(0,4)
    );
    }, []);

    return (
        <ToastContext.Provider
        value={{
            showToast,
            removeToast,
        }}
        >
            {children}

            <ToastContainer 
            toasts={toasts}
            onClose={removeToast}
            />
        </ToastContext.Provider>
    );
}

export default ToastProvider;