package com.sneykdev.sneykboard.specification;

import com.sneykdev.sneykboard.entity.Project;
import com.sneykdev.sneykboard.enums.ProjectPriority;
import com.sneykdev.sneykboard.enums.ProjectStatus;
import com.sneykdev.sneykboard.enums.ProjectType;
import org.springframework.data.jpa.domain.Specification;

public class ProjectSpecification {

    public static Specification<Project> isNotArchived() {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.isFalse(root.get("archived"));
    }

    public static Specification<Project> isArchived() {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.isTrue(root.get("archived"));
    }

    public static Specification<Project> hasStatus(ProjectStatus status) {
        return (root, query, criteriaBuilder) ->
                status == null
        ? criteriaBuilder.conjunction()
                        :criteriaBuilder.equal(root.get("status"), status);
    }

    public static Specification<Project> hasPriority(ProjectPriority priority) {
        return (root, query, criteriaBuilder) ->
                priority == null
        ? criteriaBuilder.conjunction()
                :criteriaBuilder.equal(root.get("priority"), priority);
    }

    public static Specification<Project> hasType(ProjectType type) {
        return (root, query, criteriaBuilder) ->
                type == null
        ? criteriaBuilder.conjunction()
                : criteriaBuilder.equal(root.get("type"), type);
    }

    private ProjectSpecification() {
    }
}
