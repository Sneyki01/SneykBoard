import { X } from "lucide-react"

function Modal({ isOpen, title, children, onClose }) {
    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-background/80 px-4 py-6 backdrop-blur-sm">
            <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sneyk-2xl border border-primary/60 bg-surface p-6 shadow-primary-glow">
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/30 blur-2xl" />

                <div className="relative flex items-start justify-between gap-4">
                    <div>
                        <p className="font-display text-xs uppercase tracking-[0.28em] text-primary-soft">
                            SneykBoard Action
                        </p>

                        <h2 className="mt-3 font-display text-2xl text-text-primary">
                            {title}
                        </h2>
                    </div>

                    <button type="button" onClick={onClose} aria-label="Close modal" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sneyk-md border border-border bg-background/40 text-text-secondary transition-colors duration-200 hover:border-primary/60 hover:bg-surface-hover hover:text-text-primary">
                        <X
                        size={18}
                        aria-hidden="true"
                        />
                    </button>
                </div>

                <div className="relative mt-6">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Modal;