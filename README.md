# 🚀 SneykBoard

### Personal Dev & QA Mission Control

![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=openjdk)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.5-6DB33F?style=for-the-badge&logo=springboot)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-4169E1?style=for-the-badge&logo=postgresql)
![Maven](https://img.shields.io/badge/Maven-Build-C71A36?style=for-the-badge&logo=apachemaven)
![License](https://img.shields.io/badge/License-Personal-purple?style=for-the-badge)

---

> Personal Mission Control for Developers & QA Engineers.
>
> Built with Spring Boot, React and the SneykOS Design System.



**SneykBoard** is a Full Stack personal software project management platform built as part of the **SneykDev** ecosystem.

It centralizes software development, QA automation, learning, deployments and personal projects into a single Mission Control dashboard inspired by futuristic operating systems.

---

# Vision

SneykBoard helps organize and visualize:

- Pending projects
- Planned projects
- Projects in progress
- Blocked projects
- Completed projects
- Archived projects
- Projects at risk
- Priority levels
- Progress tracking
- Dashboard analytics
- Recommended next actions

---

| Status | Version |
|--------|---------|
| 🟢 Active Development | v0.3.0 |
| Backend | ✅ Stable |
| Frontend | ✅ Stable |
| Integration | ✅ Complete |

---

# Current Features

SneykBoard currently supports:

- Full Stack architecture (Spring Boot + React)
- PostgreSQL persistence
- Dynamic dashboard
- Live dashboard statistics
- Project creation
- Project archiving
- Dashboard recommendation engine
- At Risk project detection
- Reusable UI component library
- Reusable project forms

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

# Architecture

## Backend

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
PostgreSQL
```

## Frontend

```text
Pages
    ↓
Components
    ↓
UI Library
    ↓
Service Layer
    ↓
REST API
```

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

# Backend Features

✅ Project CRUD

✅ Soft Delete (Archive)

✅ Restore Archived Projects

✅ Dynamic Filtering (Spring Data JPA Specifications)

✅ Dashboard Summary

✅ Dashboard Recommendation

✅ At Risk Projects Detection

✅ Validation Error Handling

✅ Custom Exception Handling

✅ PostgreSQL Persistence

---

# Frontend Features

## Foundation

✅ React + Vite

✅ Tailwind CSS

✅ SneykOS Design System

---

## UI Library

- Card
- Button
- Badge
- ProgressBar
- Modal
- Input
- TextArea
- Select

---

## Dashboard Components

- SummaryCard
- RecommendationCard
- ProjectCard
- AtRiskProjects

---

## Forms

- ProjectForm (Reusable)

---

## Service Layer

- apiClient
- dashboardService
- projectService

---

## Current Functionality

✅ Dashboard connected to Spring Boot API

✅ Live Dashboard Summary

✅ Live Recommendation Engine

✅ Live At Risk Projects

✅ Create Project

✅ Archive Project

✅ Automatic Dashboard Refresh

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
✅ Full Stack Integration

🟨 Project CRUD UI (In Progress)

⬜ Edit Project
⬜ Restore Project
⬜ Authentication
⬜ Deployment
⬜ CI/CD
```

---

# Visual Identity

## SneykOS

Dark Neon • CyberQA • Gaming Dashboard

SneykBoard is designed to feel like a personal Mission Control Center for developers and QA engineers.

The visual language follows the official **SneykOS Design System**, providing a futuristic interface with reusable UI components.

---

# Design Philosophy

SneykBoard follows a clean layered architecture focused on:

- Reusable Components
- Separation of Responsibilities
- Scalable Architecture
- Clean Code
- Developer Experience
- Modern UI Design

The goal is to build a production-ready Full Stack application rather than a tutorial project.

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

# Project Goals

SneykBoard is being developed as:

- Personal Mission Control
- Portfolio Project
- Spring Boot learning platform
- React architecture playground
- QA Dashboard
- Future SaaS foundation

---

# Current Version

```text
v0.3.0

✔ Backend MVP Complete

✔ Frontend MVP Complete

✔ First Full Stack Integration

Current Features

✔ Live Dashboard

✔ Dashboard Summary

✔ Recommendation Engine

✔ At Risk Detection

✔ Project Creation

✔ Project Archiving

✔ Reusable UI Library

✔ Reusable Project Form

Next Milestone

Project CRUD UI Completion

- Edit Project
- Restore Project
- Project Details
```

---

# License

Personal project developed as part of the **SneykDev Ecosystem**.