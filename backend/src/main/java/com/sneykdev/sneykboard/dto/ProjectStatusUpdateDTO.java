package com.sneykdev.sneykboard.dto;

import com.sneykdev.sneykboard.enums.ProjectStatus;
import jakarta.validation.constraints.NotNull;

public record ProjectStatusUpdateDTO(

        @NotNull
        ProjectStatus status
) {
}
