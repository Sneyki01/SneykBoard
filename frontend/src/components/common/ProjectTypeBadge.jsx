import Badge from "../ui/Badge";

const projectTypeVariants = {
    BACKEND: 'primary',
    FRONTEND: 'success',
    FULLSTACK: 'warning',
    QA: 'default',
    AUTOMATION: 'danger',
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
    const variant = projectTypeVariants[type] || 'default'
    const label = projectTypeLabels[type] || type

    return <Badge variant={variant}>{label}</Badge>
}

export default ProjectTypeBadge