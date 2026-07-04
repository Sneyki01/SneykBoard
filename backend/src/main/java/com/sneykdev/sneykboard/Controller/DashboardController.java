package com.sneykdev.sneykboard.Controller;

import com.sneykdev.sneykboard.dto.AtRiskProjectDTO;
import com.sneykdev.sneykboard.dto.DashboardRecommendationDTO;
import com.sneykdev.sneykboard.dto.DashboardSummaryDTO;
import com.sneykdev.sneykboard.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping("/summary")
    public DashboardSummaryDTO getSummary() {
        return dashboardService.getSummary();
    }

    @GetMapping("/recommendation")
    public DashboardRecommendationDTO getRecommendation() {
        return dashboardService.getRecommendation();
    }

    @GetMapping("/at-risk")
    public List<AtRiskProjectDTO> getAtRiskProjects() {
        return dashboardService.getAtRiskProjects();
    }
}
