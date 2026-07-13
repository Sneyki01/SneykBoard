function Modal({ isOpen, title, children, onClose }) {
    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background/80 px-4 py-6 backdrop-blur-sm">
            <div className="relative mx-auto my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-sneyk-2xl border border-primary/60 bg-surface p-6 shadow-primary-glow">
                <div className="absolute `-right-20` `-top-20` h-48 w-48 rounded-full bg-primary/30 blur-2xl" />

                <div className="relative flex items-start justify-between gap-4">
                    <div>
                        <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">
                            SneykBoard Action
                        </p>

                        <h2 className="mt-3 font-display text-2xl text-text-primary">
                            {title}
                        </h2>
                    </div>

                    <button type="button" onClick={onClose} className="rounded-sneyk-md border border-border px-3 py-2 font-display text-xs text-text-secondary transition hover:border-primary hover:text-text-primary">
                        X
                    </button>
                </div>

                <div className="relative mt-6">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal