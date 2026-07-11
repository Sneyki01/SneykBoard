import Card from "../ui/Card";
import Button from "../ui/Button";
import StatusBadge from "../common/StatusBadge";

function AtRiskProjects({ projects = [] }) {
    const safeProjects = Array.isArray(projects) ? projects : []

    console.log(projects)
    console.log(Array.isArray(projects))
    console.log(projects.length)
    
    if (projects.length === 0) {
        return (
            <Card>
                <p className="font-display text-xs uppercase tracking-[0.22em] text-text-muted">
                    At Risk Projects
                </p>

                <h2 className="mt-4 font-display text-2xl text-text-primary">
                    No projects at risk
                </h2>

                <p className="mt-3 text-sm text-text-secondary">
                    Everything looks stable. Suspiciously stable, but stable.
                </p>
            </Card>
        )
    }

    return (
        <Card variant="danger" className="relative overflow-hidden">
            <div className="absolute right-[-80px] top-[-80px] h-44 w-44 rounded-full bg-danger/20 blur-3xl"/>

            <div className="relative">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-danger">
                    At Risk Projects
                </p>

                <h2 className="mt-4 font-display text-2xl text-text-primary">
                    Projects needing attention
                </h2>

                <div className="mt-6 space-y-4">
                    {safeProjects.map((project) => (
                        <div
                        key={project.projectId}
                        className="rounded-sneyk-lg border border-danger/40 bg-background/70 p-4 shadow-danger-glow transition-all duration-300 hover:scale-[1.01]"
                        >
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                            <div>
                                <h3 className="font-display text-lg text-text-primary">
                                    {project.projectTitle}
                                </h3>

                                <p className="mt-2 text-sm text-text-secondary">
                                    {project.daysWithoutUpdate} days without updates
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <StatusBadge status={project.status}/>

                                <span className="rounded-full border border-danger/50 bg-danger/10 px-3 py-1 font-display text-xs uppercase tracking-[0.16em] text-danger">
                                    {project.riskLevel}
                                </span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <Button size="sm" variant="danger">
                                Review Project
                            </Button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </Card>
    )
}

export default AtRiskProjects