export const dashboardSummaryMock = {
    totalProjects: 12,
    inProgress: 4,
    completed: 7,
    atRisk: 2,
}

export const demoProject = {
    title: 'SneykBoard Backend MVP',
    description:
        'Stable backend MVP with Spring Boot, PostgreSQL, dynamic filters, dashboard summary, recommendations and at-risk project detection.',
    status: 'IN_PROGRESS',
    priority: 'HIGH',
    type: 'FULLSTACK',
    progress: 72,
}

export const demoRecommendation = {
    projectId: 1,
    projectTitle: 'SneykBoard Backend MVP',
    message:
        'This project is almost done. It is a good candidate to finish next.',
    reason: 'HIGH_PROGRESS',
}

export const demoAtRiskProjects = [
    {
        projectId: 1,
        projectTitle: 'SICERT Automation',
        status: 'IN_PROGRESS',
        daysWithoutUpdate: 18,
        riskLevel: 'AT_RISK',
    },
    {
        projectId: 2,
        projectTitle: 'Old Portfolio Redesign',
        status: 'BLOCKED',
        daysWithoutUpdate: 34,
        riskLevel: 'ABANDONED',
    },
]