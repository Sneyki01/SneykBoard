import Badge from "../ui/Badge";

const statusVariants = {
    IDEA: 'default',
    PLANNED: 'primary',
    IN_PROGRESS: 'primary',
    BLOCKED: 'danger',
    COMPLETED: 'success',
    ABANDONED: 'warning',
}

const statusLabels = {
    IDEA: 'Idea',
    PLANNED: 'Planned',
    IN_PROGRESS: 'In Progress',
    BLOCKED: 'Blocked',
    COMPLETED: 'Completed',
    ABANDONED: 'Abandoned',
}

function StatusBadge({ status }) {
    const variant = statusVariants[status] || 'default'
    const label = statusLabels[status] || status

    return <Badge variant={variant}>{label}</Badge>
}

export default StatusBadge