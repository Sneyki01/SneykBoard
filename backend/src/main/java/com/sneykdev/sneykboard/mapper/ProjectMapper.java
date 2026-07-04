package com.sneykdev.sneykboard.mapper;

import com.sneykdev.sneykboard.dto.ProjectRequestDTO;
import com.sneykdev.sneykboard.dto.ProjectResponseDTO;
import com.sneykdev.sneykboard.entity.Project;
import org.springframework.stereotype.Component;

@Component
public class ProjectMapper {

    public Project toEntity(ProjectRequestDTO dto) {
        if (dto == null) {
            return null;
        }

        return Project.builder()
                .title(dto.title())
                .description(dto.description())
                .type(dto.type())
                .priority(dto.priority())
                .status(dto.status())
                .progress(dto.progress())
                .dueDate(dto.dueDate())
                .githubUrl(dto.githubUrl())
                .deployUrl(dto.deployUrl())
                .documentationUrl(dto.documentationUrl())
                .notes(dto.notes())
                .build();
    }

    public ProjectResponseDTO toResponseDTO(Project project) {
        if (project == null) {
            return null;
        }

        return new ProjectResponseDTO(
                project.getId(),
                project.getTitle(),
                project.getDescription(),
                project.getType(),
                project.getPriority(),
                project.getStatus(),
                project.getProgress(),
                project.getDueDate(),
                project.getGithubUrl(),
                project.getDeployUrl(),
                project.getDocumentationUrl(),
                project.getNotes(),
                project.getArchived(),
                project.getCreatedAt(),
                project.getUpdatedAt()
        );
    }

    public void updateEntityFromDTO(ProjectRequestDTO dto, Project project) {
        if (dto == null || project == null  ){
            return;
        }

        project.setTitle(dto.title());
        project.setDescription(dto.description());
        project.setType(dto.type());
        project.setPriority(dto.priority());
        project.setStatus(dto.status());
        project.setProgress(dto.progress());
        project.setDueDate(dto.dueDate());
        project.setGithubUrl(dto.githubUrl());
        project.setDeployUrl(dto.deployUrl());
        project.setDocumentationUrl(dto.documentationUrl());
        project.setNotes(dto.notes());
    }
}
