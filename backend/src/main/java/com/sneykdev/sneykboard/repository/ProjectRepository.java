package com.sneykdev.sneykboard.repository;

import com.sneykdev.sneykboard.entity.Project;
import com.sneykdev.sneykboard.enums.ProjectPriority;
import com.sneykdev.sneykboard.enums.ProjectStatus;
import com.sneykdev.sneykboard.enums.ProjectType;
import org.antlr.v4.runtime.ListTokenSource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long>, JpaSpecificationExecutor<Project> {

    List<Project> findByArchivedFalse();

    List<Project> findByArchivedTrue();

    List<Project> findByTypeAndArchivedFalse(ProjectType type);

}