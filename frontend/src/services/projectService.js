import request from "./apiClient";

export function getProjects(filters = {}) {
    const params = new URLSearchParams()

    Object.entries(filters).forEach(([key, value]) => {
        if (value) {
            params.append(key, value)
        }
    })

    const queryString = params.toString()

    return request(`/projects ${queryString ? `?${queryString}` : ''}`)
}

export function getProjectById(id) {
    return request(`/projects/${id}`)
}

export function createProject(project) {
    return request(`/projects`, {
        method: 'POST',
        body: JSON.stringify(project),
    })
}

export function updateProject(id, project) {
    return request(`/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify(project),
    })
}

export function updateProjectStatus(id, status) {
    return request(`/projects/${id}/status`, {
        METHOD: 'PATCH',
        body: JSON.stringify({ status }),
    })
}

export function archiveProject(id) {
    return request(`/projects/${id}/archive`, {
        method: 'PATCH',
    })
}

export function restoreProject(id) {
    return request(`/projects/${id}/restore`, {
        method: 'PATCH',
    })
}

export function getArchivedProjects() {
    return request(`/projects/archived`)
}
