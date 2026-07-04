package com.sneykdev.sneykboard.dto;

import com.sneykdev.sneykboard.enums.ProjectPriority;
import com.sneykdev.sneykboard.enums.ProjectStatus;
import com.sneykdev.sneykboard.enums.ProjectType;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record ProjectRequestDTO(

        @NotBlank
        String title,

        String description,

        @NotNull
        ProjectType type,

        @NotNull
        ProjectPriority priority,

        ProjectStatus status,

        @Min(0)
        @Max(100)
        Integer progress,

        LocalDate dueDate,

        String githubUrl,

        String deployUrl,

        String documentationUrl,

        String notes
) {
}
