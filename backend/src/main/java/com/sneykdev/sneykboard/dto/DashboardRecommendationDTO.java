package com.sneykdev.sneykboard.dto;

public record DashboardRecommendationDTO(
        Long projectId,
        String projectTitle,
        String message,
        String reason
) {
}
