package com.sneykdev.sneykboard.dto;

public record DashboardSummaryDTO(
        long totalProjects,
        long inProgress,
        long blocked,
        long completed,
        long abandoned,
        long archived,
        long atRisk,
        double averageProgress
) {
}
