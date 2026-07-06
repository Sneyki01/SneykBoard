# 🚀 SneykBoard

**SneykBoard** is a personal Dev & QA Mission Control built as part of the **SneykDev** ecosystem.

Its purpose is to centralize software development, QA automation, learning, deployment and personal projects into a single modern dashboard inspired by futuristic operating systems.

---

# Vision

SneykBoard helps organize and visualize:

- Pending projects
- Planned projects
- Projects in progress
- Blocked projects
- Completed projects
- Archived projects
- Projects at risk of abandonment
- Priority levels
- Progress tracking
- Recommended next actions

---

# Tech Stack

## Backend

- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- PostgreSQL
- Maven
- Lombok
- Jakarta Validation

## Frontend

- React
- Vite
- Tailwind CSS

## Database

- PostgreSQL

---

# Planned Deployment

| Layer | Platform |
|--------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | Supabase / Neon |

---

# Project Structure

```text
SneykBoard/
├── backend/
│   └── Spring Boot REST API
│
├── frontend/
│   └── React + Tailwind Application
│
├── docs/
│   ├── roadmap.md
│   ├── api-documentation.md
│   └── design-system.md
│
└── README.md
```

---

# Backend MVP

✅ Project CRUD

✅ Soft delete through project archiving

✅ Restore archived projects

✅ Dynamic filtering using Spring Data JPA Specifications

✅ Dashboard Summary endpoint

✅ Dashboard Recommendation endpoint

✅ At Risk Projects endpoint

✅ Custom Exception Handling

✅ Validation Error Handling

✅ PostgreSQL persistence

---

# Frontend MVP

✅ React + Vite setup

✅ Tailwind CSS integration

✅ Design System

✅ Dashboard Layout

✅ UI Kit

- Card
- Button
- Badge
- ProgressBar

✅ Dashboard Components

- SummaryCard
- RecommendationCard
- ProjectCard
- AtRiskProjects

✅ Service Layer

- apiClient
- dashboardService
- projectService

✅ Mock Data integration

---

# API Documentation

API contract available at:

```text
docs/api-documentation.md
```

---

# Main Backend Endpoints

## Projects

```http
GET    /api/projects
GET    /api/projects/{id}
POST   /api/projects
PUT    /api/projects/{id}
PATCH  /api/projects/{id}/status
PATCH  /api/projects/{id}/archive
PATCH  /api/projects/{id}/restore
GET    /api/projects/archived
```

## Dashboard

```http
GET    /api/dashboard/summary
GET    /api/dashboard/recommendation
GET    /api/dashboard/at-risk
```

---

# Project Status

```text
✅ Backend MVP
✅ Frontend MVP
⬜ Backend + Frontend Integration
⬜ Authentication
⬜ Project CRUD UI
⬜ Deployment
⬜ CI/CD
```

---

# Visual Identity

**SneykOS**

Dark Neon • CyberQA • Gaming Dashboard

SneykBoard is designed to feel like a personal Mission Control Center for software development and QA automation.

The visual language follows the official SneykDev Design System.

---

# Local Backend Setup

Go to the backend folder:

```bash
cd backend
```

Run the application:

```bash
./mvnw spring-boot:run
```

Default local URL:

```text
http://localhost:8080
```

---

# Environment Variables

The backend expects PostgreSQL configuration through environment variables:

```text
DB_HOST
DB_NAME
DB_USER
DB_PASSWORD
```

Example datasource configuration:

```properties
spring.datasource.url=jdbc:postgresql://${DB_HOST:localhost}:5432/${DB_NAME:sneykboard}
spring.datasource.username=${DB_USER:postgres}
spring.datasource.password=${DB_PASSWORD}
```

---

# Roadmap

Project roadmap available at:

```text
docs/roadmap.md
```

---

# Current Version

```text
v0.2.0

✔ Backend MVP Complete
✔ Frontend MVP Complete

Next Milestone:
Backend ↔ Frontend Integration
```