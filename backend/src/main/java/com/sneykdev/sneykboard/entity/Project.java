package com.sneykdev.sneykboard.entity;

import com.sneykdev.sneykboard.enums.ProjectPriority;
import com.sneykdev.sneykboard.enums.ProjectStatus;
import com.sneykdev.sneykboard.enums.ProjectType;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "projects")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank
    @Column(nullable = false, length = 120)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private ProjectType type;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private ProjectPriority priority;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 30)
    private ProjectStatus status;

    @Min(0)
    @Max(100)
    @Column(nullable = false)
    private Integer progress;

    private LocalDate dueDate;

    private String githubUrl;

    private String deployUrl;

    private String documentationUrl;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @Column
    private Boolean archived;

    @PrePersist
    protected void onCreate() {
        LocalDateTime now = LocalDateTime.now();

        createdAt = now;
        updatedAt = now;

        if (progress == null) {
            progress = 0;
        }

        if (status == null) {
            status = ProjectStatus.IDEA;
        }

        if (priority == null) {
            priority = ProjectPriority.MEDIUM;
        }

        if (type == null) {
            type = ProjectType.PERSONAL;
        }

        if (archived == null) {
            archived = false;
        }
    }
}
