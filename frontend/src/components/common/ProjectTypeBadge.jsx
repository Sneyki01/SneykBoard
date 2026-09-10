import Badge from "../ui/Badge";

const projectTypeVariants = {
    BACKEND: 'primary',
    FRONTEND: 'default',
    FULLSTACK: 'primary',
    QA: 'default',
    AUTOMATION: 'primary',
    PERSONAL: 'default',
}

const projectTypeLabels = {
    BACKEND: 'Backend',
    FRONTEND: 'Frontend',
    FULLSTACK: 'Fullstack',
    QA: 'QA',
    AUTOMATION: 'Automation',
    PERSONAL: 'Personal',
}

function ProjectTypeBadge({ type }) {
    const variant = projectTypeVariants[type] ?? 'default'
    const label = projectTypeLabels[type] ?? type ?? 'Unknown';

    return <Badge variant={variant}>{label}</Badge>
}

export default ProjectTypeBadge