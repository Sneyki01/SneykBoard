import Button from "../ui/Button";
import Card from "../ui/Card";

function ArchivedProjects({
    projects = [],
    onRestore,
    restoringProjectId,
}) {
    if (projects.length === 0) {
        return (
            <div className="py-10 text-center">
                <p className="text-text-secondary">
                    No archived projects found.
                </p>

                <p className="mt-2 text-sm text-text-muted">
                    Archived projects will appear here.
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-3">
            {projects.map((project) => {
                const isRestoring = restoringProjectId === project.id

                return (
                    <Card key={project.id}>
                        <div className="flex items-center justify-between gap-4">
                            <div className="min-w-0">
                                <h3 className="truncate font-semibold text-text-primary">
                                    {project.title}
                                </h3>

                                <p className="mt-1 text-sm text-text-secondary">
                                    {project.description || 'No description available.'}
                                </p>

                                <p className="mt-2 text-xs text-text-muted">
                                    Status: {project.status}
                                </p>
                            </div>

                            <Button
                            variant="primary"
                            size="sm"
                            disabled={isRestoring}
                            onClick={() => onRestore(project.id)}
                            >
                            {isRestoring ? 'Restoring...' : 'Restore'}
                            </Button>
                        </div>
                    </Card>
                )
            })}
        </div>
    )
}

export default ArchivedProjects