import Card from "../ui/Card";
import Button from "../ui/Button";
import ProgressBar from "../ui/ProgressBar";
import StatusBadge from "../common/StatusBadge";
import PriorityBadge from "../common/PriorityBadge";
import ProjectTypeBadge from "../common/ProjectTypeBadge";

function ProjectCard({ project }) {
    return (
        <Card variant="glow" className="text-left">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="font-display text-xs uppercase tracking-[0.18em] text-primary">
                        Project
                    </p>

                    <h2 className="mt-2 font-display text-2xl text-text-primary">
                        {project.title}
                    </h2>
                </div>

                <StatusBadge status={project.status}/>
            </div>

            <p className="mt-4 text-sm leading-6 text-text-secondary">
                {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
                <PriorityBadge priority={project.priority}/>
                <ProjectTypeBadge type={project.type}/>
            </div>

            <ProgressBar value={project.progress} className="mt-6"/>

            <div className="mt-6 flex flex-wrap gap-3">
                <Button size="sm">Details</Button>
                <Button size="sm" variant="secondary">Edit</Button>
                <Button size="sm" variant="danger">Archive</Button>
            </div>
        </Card>
    )
}

export default ProjectCard