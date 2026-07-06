import request from "./apiClient";

export function getDashboardSummary() {
    return request('/dashboard/summary')
}

export function getDashboardRecommendation() {
    return request('.dashboard.recommendation')
}

export function getAtRiskProjects() {
    return request('/dashboard/at-risk')
}