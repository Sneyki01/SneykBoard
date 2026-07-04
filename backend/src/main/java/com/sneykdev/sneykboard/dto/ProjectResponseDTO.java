package com.sneykdev.sneykboard.dto;

import com.sneykdev.sneykboard.enums.ProjectPriority;
import com.sneykdev.sneykboard.enums.ProjectStatus;
import com.sneykdev.sneykboard.enums.ProjectType;

import java.time.LocalDate;
import java.time.LocalDateTime;

public record ProjectResponseDTO(

        Long id,

        String title,

        String description,

        ProjectType type,

        ProjectPriority priority,

        ProjectStatus status,

        Integer progress,

        LocalDate dueDate,

        String githubUrl,

        String deployUrl,

        String documentationUrl,

        String notes,

        Boolean archived,

        LocalDateTime createdAt,

        LocalDateTime updatedAt
) {
}
