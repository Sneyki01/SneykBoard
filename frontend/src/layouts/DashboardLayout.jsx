function DashboardLayout({ children }) {
    return (
    <main className="min-h-screen bg-background px-6 py-8 text-text-primary">
        <section className="mx-auto max-w-7xl">
            {children}
        </section>
    </main>
)
}

export default DashboardLayout