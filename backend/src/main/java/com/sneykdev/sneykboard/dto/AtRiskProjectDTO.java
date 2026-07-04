package com.sneykdev.sneykboard.dto;

import com.sneykdev.sneykboard.enums.ProjectRiskLevel;
import com.sneykdev.sneykboard.enums.ProjectStatus;

public record AtRiskProjectDTO(

        Long projectId,
        String projectTitle,
        ProjectStatus status,
        int daysWithoutUpdate,
        ProjectRiskLevel riskLevel

) {
}
