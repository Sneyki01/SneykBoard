package com.sneykdev.sneykboard.Controller;

import com.sneykdev.sneykboard.dto.ProjectRequestDTO;
import com.sneykdev.sneykboard.dto.ProjectResponseDTO;
import com.sneykdev.sneykboard.dto.ProjectStatusUpdateDTO;
import com.sneykdev.sneykboard.enums.ProjectPriority;
import com.sneykdev.sneykboard.enums.ProjectStatus;
import com.sneykdev.sneykboard.enums.ProjectType;
import com.sneykdev.sneykboard.service.ProjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public List<ProjectResponseDTO> getProjects(
            @RequestParam(required = false)ProjectStatus status,
            @RequestParam(required = false)ProjectPriority priority,
            @RequestParam(required = false)ProjectType type
            ) {
        return projectService.getProjects(status, priority, type);
    }

    @GetMapping("/archived")
    public List<ProjectResponseDTO> getArchivedProjects() {
        return projectService.getArchivedProjects();
    }

    @GetMapping("/{id}")
    public ProjectResponseDTO getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProjectResponseDTO createProject(@Valid @RequestBody ProjectRequestDTO requestDTO) {
        return projectService.createProject(requestDTO);
    }

    @PutMapping("/{id}")
    public ProjectResponseDTO updateProject(
            @PathVariable Long id,
            @Valid @RequestBody ProjectRequestDTO requestDTO
    ) {
        return projectService.updateProject(id, requestDTO);
    }

    @PatchMapping("/{id}/status")
    public ProjectResponseDTO updateProjectStatus(
            @PathVariable Long id,
            @Valid @RequestBody ProjectStatusUpdateDTO statusUpdateDTO
            ) {
        return projectService.updateProjectStatus(id, statusUpdateDTO);
    }

    @PatchMapping("/{id}/archive")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void archiveProject(@PathVariable Long id) {
        projectService.archiveProject(id);
    }

    @PatchMapping("/{id}/restore")
    public ProjectResponseDTO restoreProject(@PathVariable Long id) {
        return projectService.restoreProject(id);
    }



}
