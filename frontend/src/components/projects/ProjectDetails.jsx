import ProgressBar from "../ui/ProgressBar";
import StatusBadge from "../common/StatusBadge";
import PriorityBadge from "../common/PriorityBadge";
import ProjectTypeBadge from "../common/ProjectTypeBadge";
import {
    CalendarDays,
    ExternalLink,
    FileText,
    FolderGit2,
    Globe,
    Info,
    Link as LinkIcon,
    NotebookText,
    RefreshCw,
    Section,
} from "lucide-react";

function SectionTitle({ icon: Icon, children }) {
    return (
        <div className="flex items-center gap-2 text-primary">
            <Icon
            size={17}
            strokeWidth={2}
            aria-hidden="true"
            />

            <h3 className="font-display text-xs uppercase tracking-[0.18em]">
                {children}
            </h3>
        </div>
    )
}

function ProjectDetails({ project }) {

    function formatDate(date) {
        if (!date) {
            return "Not specified"
        }

        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }

    if (!project) {
        return null;
    }


    return (
        <div className="space-y-8">

            {/* Header */}
            <div>
                <h2 className="font-display text-3xl text-text-primary">
                    {project.title}
                </h2>

                <p className="mt-3 text-text-secondary">
                    {project.description || "No description available"}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                    <StatusBadge status={project.status}/>
                    <PriorityBadge priority={project.priority}/>
                    <ProjectTypeBadge type={project.type}/>
                </div>

                <ProgressBar
                    value={project.progress}
                    className="mt-6"
                />
            </div>

            {/* General information */}

            <section className="border-t border-border pt-6">
                <p className="font-display text-xs uppercase tracking-[0.18em] text-primary">
                    General information
                </p>

                <div className="mt-5">
                    <div className="rounded-xl border border-border bg-background/40 p-4">
                        <div className="flex items-start gap-3">
                            <CalendarDays
                            size={20}
                            className="mt-0.5 shrink-0 text-primary"
                            aria-hidden="true"
                            />

                            <div>
                                <p className="text-xs uppercase tracking-wider text-text-secondary">
                                    Due date
                                </p>

                                <p className="mt-2 font-medium text-text-primary">
                                    {formatDate(project.dueDate)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Links */}
            <section className="border-t border-border pt-6">
                <SectionTitle icon={LinkIcon}>
                    Project Links
                </SectionTitle>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">

                    {/* GitHub */}
                    <div className="rounded-xl border border-border bg-background/40 p-4">
                    <div className="flex items-center gap-2">

                        <FolderGit2 
                        size={18}
                        className="text-text-secondary"
                        aria-hidden="true"
                        />

                        <p className="text-xs uppercase tracking-wider text-text-secondary">
                            Source Code
                        </p>
                    </div>

                        {project.githubUrl ? (
                            <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex font-medium text-primary transition hover:opacity-80"
                            >
                                Open Repository

                                <ExternalLink
                                size={15}
                                aria-hidden="true"
                                />
                            </a>
                        ) : (
                            <p className="mt-2 text-sm text-text-secondary">
                                Not available
                            </p>
                        )}
                    </div>

                    {/* Deployment */}
                    <div className="rounded-xl border border-border bg-background/40 p-4">
                        <div className="flex items-center gap-2">
                            <Globe
                            size={18}
                            className="text-text-secondary"
                            aria-hidden="true"
                            />

                            <p className="text-xs uppercase tracking-wider text-text-secondary">
                                Deployment
                            </p>
                        </div>

                        {project.deployUrl ? (
                            <a
                            href={project.deployUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex font-medium text-primary transition hover:opacity-80"
                            >
                                Open application

                                <ExternalLink 
                                size={15}
                                aria-hidden="true"
                                />
                            </a>
                        ) : (
                            <p className="mt-2 text-sm text-text-secondary">
                                Not available
                            </p>
                        )}
                    </div>

                    {/* Documentation */}
                    <div className="rounded-xl border border-border bg-background/40 p-4">
                        <div className="flex items-center gap-2">
                            <FileText
                            size={18}
                            className="text-text-secondary"
                            aria-hidden="true"
                            />

                            <p className="text-xs uppercase tracking-wider text-text-secondary">
                                Documentation
                            </p>
                        </div>

                    {project.documentationUrl ? (
                        <a 
                        href={project.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex font-medium text-primary transition hover:opacity-80"
                        >
                            Open Documentation

                            <ExternalLink
                            size={15}
                            aria-hidden="true"
                            />
                        </a>
                    ) : (
                        <p className="mt-2 text-sm text-text-secondary">
                            Not available
                        </p>
                    )}
                    </div>
                </div>
            </section>

            {/* Notes */}
            <section className="border-t border-border pt-6">
                <SectionTitle icon={NotebookText}>
                    Notes
                </SectionTitle>

                <div className="mt-5 rounded-xl border border-border bg-background/40 p-5">
                    {project.notes ? (
                        <p className="whitespace-pre-wrap leading-7 text-text-secondary">
                            {project.notes}
                        </p>
                    ) : (
                        <p className="italic text-text-secondary">
                            No notes available.
                        </p>
                    )}
                </div>
            </section>

            {/* System information */}
            <section className="border-t border-border pt-6">
                <SectionTitle icon={RefreshCw}>
                    System Information
                </SectionTitle>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">

                    <div className="rounded-xl border border-border bg-background/40 p-4">
                        <div className="flex items-start gap-3">
                            <CalendarDays
                            size={20}
                            className="mt-0.5 shrink-0 text-primary"
                            aria-hidden="true"
                            />
                            
                            <div>

                                <p className="text-xs uppercase tracking-wider text-text-secondary">
                                    Created
                                </p>

                                <p className="mt-2 font-medium text-text-primary">
                                    {formatDate(project.createdAt)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl border border-border bg-background/40 p-4">
                        <div className="flex items-start gap-3">
                            <RefreshCw
                                size={20}
                                className="mt-0.5 shrink-0 text-primary"
                                aria-hidden="true"
                            />

                            <div>

                                <p className="text-xs uppercase tracking-wider text-text-secondary">
                                    Last Updated
                                </p>

                                <p className="mt-2 font-medium text-text-primary">
                                    {formatDate(project.updatedAt)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProjectDetails;