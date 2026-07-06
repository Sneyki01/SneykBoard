const API_BASE_URL = "http:localhost:8080/api"

async function request(endpoint, options = {}) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
            'Content-Type' : 'application/json',
            ...options.headers,
        },
        ...options,
    })

    if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        throw new Error(errorData?.message || 'API request failed')
    }

    if (response.status === 204) {
        return null
    }

    return response.json
}

export default request