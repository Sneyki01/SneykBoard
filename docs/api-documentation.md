# SneykBoard API Documentation

Base URL local:

```text
http://localhost:8080
```

## Project Endpoints

### get active projectso

```http
GET /api/projects
```
Optional query params:
```text
status
priority
type
```

examples: 

```http
GET /api/projects
GET /api/projects?status=IN_PROGRESS
GET /api/projects?priority=HIGH
GET /api/projects?type=FULLSTACK
GET /api/projects?status=IN_PROGRESS&priority=HIGH&type=FULLSTACK
```

---

### Get Proyect By ID

```http
GET /api/projects/{id}
```

---

### Create Proyect

```http
POST /apo/projects
```

request body:
```json
{
  "title": "SneykBoard Backend MVP",
  "description": "Backend MVP for SneykBoard.",
  "type": "FULLSTACK",
  "priority": "HIGH",
  "status": "IN_PROGRESS",
  "progress": 25,
  "dueDate": "2026-07-20",
  "githubUrl": "https://github.com/Sneyki01/SneykBoard",
  "deployUrl": null,
  "documentationUrl": null,
  "notes": "Initial project created from the API."
}
```
---

### Update Project

```http
PUT /api/projects/{id}
```
*uses the same body as project creation.

---

### Update project status

```HTTP
PATCH /api/projects/{id}/status
```

request body:

```json
{
  "status": "COMPLETED"
}
```

---
### Archive Project

```http
PATCH /api/projects/{id}/archive
```

*soft delete behavior. The project is not removed from the database.

---

### Get archived projects

```http
GET /api/projects/archived
```

---

## Dashboard Endpoints

### Get dashboard summary

```http
GET /api/dashboard/summary
```

example response:

```json
{
  "totalProjects": 5,
  "inProgress": 2,
  "blocked": 1,
  "completed": 1,
  "abandoned": 1,
  "archived": 1,
  "averageProgress": 48.5
}
```

---
### get Dashboard recommendation

```http
GET /api/dashboard/recommendation
```

example response:

```json
{
  "projectId": 1,
  "projectTitle": "SneykBoard Backend MVP",
  "message": "This project is almost done. It is a good candidate to finish next.",
  "reason": "HIGH_PROGRESS"
}
```

possible reasons:
```text
BLOCKED_PROJECT
HIGH_PROGRESS
DUE_SOON
HIGH_PRIORITY
NO_RECOMMENDATION
```

---

### Get at-risk projects

```http
GET /api/dashboard/at-risk
```

Rules: 

```text
14+ days without update = AT_RISK
30+ days without update = ABANDONED
```

example response: 

```json
[
  {
    "projectId": 1,
    "projectTitle": "SneykBoard Backend MVP",
    "status": "IN_PROGRESS",
    "daysWithoutUpdate": 15,
    "riskLevel": "AT_RISK"
  }
]
```

---

## Enums

### ProjectStatus

```text
IDEA
PLANNED
IN_PROGRESS
BLOCKED
COMPLETED
ABANDONNED
```

### ProjectPriority

```text
LOW
MEDIUM
HIGH
CRITICAL
```

### ProjectType

```text
BACKEND
FRONTEND
FULLSTACK
QA
AUTOMATION
PERSONAL
```

### ProjectRiskLevel
```text
AT_RISK
ABANDONED
```

---

## Error Response Format

```json
{
  "timestamp": "2026-07-04T12:00:00",
  "status": 404,
  "error": "Project Not Found",
  "message": "Project with id 999 was not found.",
  "path": "/api/projects/999",
  "details": []
}
```

Common errors:

```text
400 Validation Error
400 Malformed JSON Request
404 Project Not Found
500 Internal Server Error
```

