# SneykBoard

**SneykBoard** is a personal Dev & QA project control center built as part of the **SneykDev** ecosystem.

The goal is to organize development, QA automation, deployment, learning and personal projects in one visual dashboard with a modern **Dark Neon / CyberQA / Gaming Dashboard** identity.

## Vision

SneykBoard is designed to help track:

- Pending projects
- Projects in progress
- Blocked projects
- Completed projects
- Archived projects
- Projects at risk of abandonment
- Priority levels
- Due dates
- General progress
- Recommended next actions

## Tech Stack

### Backend

- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- PostgreSQL
- Maven
- Lombok
- Jakarta Validation

### Frontend

- React
- Tailwind CSS

### Database

- PostgreSQL

### Planned Deployment

- Frontend: Vercel
- Backend: Render
- Database: Supabase or Neon

## Project Structure

```text
SneykBoard/
├── backend/
│   └── Spring Boot API
├── frontend/
│   └── React + Tailwind app
├── docs/
│   ├── roadmap.md
│   └── api-documentation.md
└── README.md
```

## Backend MVP features
* Project CRUD
* soft delete through project archiving
* Restore archived projects
* Dynamic filtering with Spring Data JPA Specifications
* Dashboard summary endpoint
* Dashboard recommendation endpoint
* At-risk project detection
* Custom exception handling
* Validation error handling
* PostgreSQL persistence

### API Documentation

API contract available at:
```text
docs/api-documentation.md
```

### Main Backend endpoints

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

```http
GET    /api/dashboard/summary
GET    /api/dashboard/recommendation
GET    /api/dashboard/at-risk
```

## Project Status

```text
Backend MVP: stable
Frontend: Pending
Deployment: Pending
```

## Visual Identity

Dark Neon / CyberQA / Gaming Dashboard. 

SneykBoard is meant to feel like a personal mission ontrol center for Dev and QA projects.

## Local Backend Setup

go to the backend folder: 

```bash
cd backend
```

run the application:

```bash
./mvnw spring-boot:run
```

default local URL: 

```text
http:///localhost:8080
```

## Environment Variables

The backend expects PostgreSQL configuration through environment variables: 

```text
DB_HOST
DB_NAME
DB_USER
DB_PASSWORD
```

example local datasource configuration: 

```properties
spring.datasource.url=jdbc:postgresql://${DB_HOST:localhost}:5432/${DB_NAME:sneykboard}
spring.datasource.username=${DB_USER:postgres}
spring.datasource.password=${DB_PASSWORD}
```

## RoadMap

Roadmap available at: 

```text
docs/roadmap.md
```