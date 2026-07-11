package com.sneykdev.sneykboard.service;

import com.sneykdev.sneykboard.dto.AtRiskProjectDTO;
import com.sneykdev.sneykboard.dto.DashboardRecommendationDTO;
import com.sneykdev.sneykboard.dto.DashboardSummaryDTO;
import com.sneykdev.sneykboard.entity.Project;
import com.sneykdev.sneykboard.enums.ProjectPriority;
import com.sneykdev.sneykboard.enums.ProjectRiskLevel;
import com.sneykdev.sneykboard.enums.ProjectStatus;
import com.sneykdev.sneykboard.repository.ProjectRepository;
import com.sneykdev.sneykboard.specification.ProjectSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class DashboardService {

    private final ProjectRepository projectRepository;

    //Logica para dashboardPrincipal
    public DashboardSummaryDTO getSummary() {
        List<Project> activeProjects = projectRepository.findAll(ProjectSpecification.isNotArchived());
        List<Project> archivedProjects = projectRepository.findAll(ProjectSpecification.isArchived());
        LocalDateTime now = LocalDateTime.now();

        long totalProjects = activeProjects.size();

        long inProgress = countByStatus(activeProjects, ProjectStatus.IN_PROGRESS);
        long blocked = countByStatus(activeProjects, ProjectStatus.BLOCKED);
        long completed = countByStatus(activeProjects, ProjectStatus.COMPLETED);
        long abandoned = countByStatus(activeProjects, ProjectStatus.ABANDONED);
        long archived = archivedProjects.size();
        long atRisk = activeProjects.stream()
                .filter(project -> project.getStatus() != ProjectStatus.COMPLETED)
                .filter(project -> project.getUpdatedAt() != null)
                .filter(project -> Duration.between(project.getUpdatedAt(), now).toDays() >= 14)
                .count();

        double averageProgress = activeProjects.stream()
                .mapToInt(Project::getProgress)
                .average()
                .orElse(0.0);

        return new DashboardSummaryDTO(
                totalProjects,
                inProgress,
                blocked,
                completed,
                abandoned,
                archived,
                atRisk,
                averageProgress
        );
    }

    //Logica para las recomendaciones
    public DashboardRecommendationDTO getRecommendation() {
        List<Project> activeProjects = projectRepository.findAll(ProjectSpecification.isNotArchived());

        Optional<Project> blockedProject = activeProjects.stream()
                .filter(project -> project.getStatus() == ProjectStatus.BLOCKED)
                .findFirst();

        if (blockedProject.isPresent()) {
            Project project = blockedProject.get();

            return new DashboardRecommendationDTO(
                    project.getId(),
                    project.getTitle(),
                    "This project is currently blocked. Review what is stopping progress.",
                    "BLOCKED_PROJECT"
            );
        }

        Optional<Project> almostDoneProject = activeProjects.stream()
                .filter(project -> project.getProgress() != null)
                .filter(project -> project.getProgress() >= 80)
                .filter(project -> project.getStatus() != ProjectStatus.COMPLETED)
                .max(Comparator.comparing(Project::getProgress));

        if (almostDoneProject.isPresent()) {
            Project project = almostDoneProject.get();

            return new DashboardRecommendationDTO(
                    project.getId(),
                    project.getTitle(),
                    "This project is almost done. It is a good candidate to finish next.",
                    "HIGH_PROGRESS"
            );
        }

        LocalDate today = LocalDate.now();
        LocalDate nextSevenDays = today.plusDays(7);

        Optional<Project> dueSoonProject = activeProjects.stream()
                .filter(project -> project.getDueDate() != null)
                .filter(project -> !project.getDueDate().isBefore(today))
                .filter(project -> !project.getDueDate().isAfter(nextSevenDays))
                .min(Comparator.comparing(Project::getDueDate));

        if (dueSoonProject.isPresent()) {
            Project project = dueSoonProject.get();

            return new DashboardRecommendationDTO(
                    project.getId(),
                    project.getTitle(),
                    "This project has a due date coming soon. it deserves attention",
                    "DUE_SOON"
            );
        }

        Optional<Project> highPriorityProject = activeProjects.stream()
                .filter(project -> project.getPriority() == ProjectPriority.CRITICAL || project.getPriority() == ProjectPriority.HIGH)
                .max(Comparator.comparing(Project::getUpdatedAt));

        if (highPriorityProject.isPresent()) {
            Project project = highPriorityProject.get();

            return new DashboardRecommendationDTO(
                    project.getId(),
                    project.getTitle(),
                    "This is a high priority project. move it forward before it becomes digital decoration.",
                    "HIGH_PRIORITY"
            );
        }

        return new DashboardRecommendationDTO(
                null,
                null,
                "No urgent recommendation for now. Pick a project and move it forward.",
                "NO_RECOMMENDATION"
        );
    }

    //Logica para Riesgo de abandono
    public List<AtRiskProjectDTO> getAtRiskProjects() {
        LocalDateTime now = LocalDateTime.now();

        return projectRepository.findAll(ProjectSpecification.isNotArchived())
                .stream()
                .filter(project -> project.getStatus() != ProjectStatus.COMPLETED)
                .filter(project -> project.getUpdatedAt() != null)
                .map(project -> {
                    int daysWithoutUpdate = (int) Duration.between(project.getUpdatedAt(), now).toDays();

                    ProjectRiskLevel riskLevel = daysWithoutUpdate >= 30
                            ? ProjectRiskLevel.ABANDONED
                            : ProjectRiskLevel.AT_RISK;

                    return new AtRiskProjectDTO(
                            project.getId(),
                            project.getTitle(),
                            project.getStatus(),
                            daysWithoutUpdate,
                            riskLevel
                    );
                })
                .filter(project -> project.daysWithoutUpdate() >= 14)
                .sorted((a, b) -> Integer.compare(b.daysWithoutUpdate(), a.daysWithoutUpdate()))
                .toList();
    }

    private long countByStatus(List<Project> projects, ProjectStatus status) {
        return projects.stream()
                .filter(project -> project.getStatus() == status)
                .count();
    }
}
