package com.sneykdev.sneykboard.service;

import com.sneykdev.sneykboard.dto.ProjectRequestDTO;
import com.sneykdev.sneykboard.dto.ProjectResponseDTO;
import com.sneykdev.sneykboard.dto.ProjectStatusUpdateDTO;
import com.sneykdev.sneykboard.entity.Project;
import com.sneykdev.sneykboard.enums.ProjectPriority;
import com.sneykdev.sneykboard.enums.ProjectStatus;
import com.sneykdev.sneykboard.enums.ProjectType;
import com.sneykdev.sneykboard.exception.ProjectNotFoundException;
import com.sneykdev.sneykboard.mapper.ProjectMapper;
import com.sneykdev.sneykboard.repository.ProjectRepository;
import com.sneykdev.sneykboard.specification.ProjectSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    public List<ProjectResponseDTO> getProjects(
            ProjectStatus status,
            ProjectPriority priority,
            ProjectType type
    ) {
        Specification<Project> specification = ProjectSpecification.isNotArchived()
                .and(ProjectSpecification.hasStatus(status))
                .and(ProjectSpecification.hasPriority(priority))
                .and(ProjectSpecification.hasType(type));

        return projectRepository.findAll(specification)
                .stream()
                .map(projectMapper::toResponseDTO)
                .toList();
    }

    public ProjectResponseDTO getProjectById(Long id) {
        Project project = findProjectOrThrow(id);
        return projectMapper.toResponseDTO(project);
    }

    public ProjectResponseDTO createProject(ProjectRequestDTO requestDTO) {
        Project project = projectMapper.toEntity(requestDTO);
        Project savedProject = projectRepository.save(project);

        return projectMapper.toResponseDTO(savedProject);
    }

    public ProjectResponseDTO updateProject(Long id, ProjectRequestDTO requestDTO) {
        Project existingProject = findProjectOrThrow(id);

        projectMapper.updateEntityFromDTO(requestDTO, existingProject);

        Project updatedProject = projectRepository.save(existingProject);

        return projectMapper.toResponseDTO(updatedProject);
    }

    public ProjectResponseDTO updateProjectStatus(Long id, ProjectStatusUpdateDTO statusUpdateDTO) {
        Project existingProject = findProjectOrThrow(id);

        existingProject.setStatus(statusUpdateDTO.status());

        Project updatedProject = projectRepository.save(existingProject);

        return projectMapper.toResponseDTO(updatedProject);
    }

    public void archiveProject(Long id) {
        Project existingProject = findProjectOrThrow(id);
        existingProject.setArchived(true);
        projectRepository.save(existingProject);
    }

    private Project findProjectOrThrow(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new ProjectNotFoundException(id));
    }

    public List<ProjectResponseDTO> getArchivedProjects() {
        return projectRepository.findAll(ProjectSpecification.isArchived())
                .stream()
                .map(projectMapper::toResponseDTO)
                .toList();
    }

    public ProjectResponseDTO restoreProject(Long id) {
        Project existingProject = findProjectOrThrow(id);

        existingProject.setArchived(false);

        Project restoredProject = projectRepository.save(existingProject);

        return projectMapper.toResponseDTO(restoredProject);
    }
}
