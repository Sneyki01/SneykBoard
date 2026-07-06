import Badge from "../ui/Badge";

const priorityVariants = {
    LOW: 'default',
    MEDIUM: 'primary',
    HIGH: 'warning',
    CRITICAL: 'danger',
}

const priorityLabels = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    CRITICAL: 'Critical',
}

function PriorityBadge({ priority }) {
    const variant = priorityVariants[priority] || 'default'
    const label = priorityLabels[priority] || priority

    return <Badge variant={variant}>{label}</Badge>
}

export default PriorityBadge