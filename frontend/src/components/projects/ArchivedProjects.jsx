import Button from "../ui/Button";
import Card from "../ui/Card";
import StatusBadge from "../common/StatusBadge"

function ArchivedProjects({
    projects = [],
    onRestore,
    restoringProjectId,
}) {
    if (projects.length === 0) {
        return (
            <div className="py-10 text-center">
                <p className="font-display text-sm text-text-primary">
                    No archived projects found.
                </p>

                <p className="mt-2 text-sm text-text-secondary/70">
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
                    <Card key={project.id}
                        className="relative"
                    >

                        <div className="flex items-center justify-between gap-4">
                            <div className="min-w-0 flex-1">
                                <h3 className="truncate font-display text-xl text-text-primary">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-text-secondary">
                                    {project.description || 'No description available.'}
                                </p>

                                <div className="mt-3">
                                    <StatusBadge
                                        status={project.status}
                                    />
                                </div>
                            </div>

                            <Button
                            variant="primary"
                            size="sm"
                            disabled={isRestoring}
                            onClick={() => onRestore(project.id)}
                            className="shrink-0"
                            >
                            {isRestoring ? 'Restoring...' : 'Restore'}
                            </Button>
                        </div>
                    </Card>
                );
            })}
        </div>
    )
}

export default ArchivedProjects