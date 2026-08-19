import { useMemo } from "react";

function useProjectFilters(projects, filters) {
    return useMemo(() => {
        return projects.filter((project) => {
            const matchesStatus = 
            filters.status === "ALL" ||
            project.status === filters.status;

            const matchesPriority = 
            filters.priority === "ALL" ||
            project.priority === filters.priority;

            const matchesType =
            filters.type === "ALL" ||
            project.type === filters.type;

            return (
                matchesStatus &&
                matchesPriority &&
                matchesType
            );
        });
    }, [
        projects,
        filters.status,
        filters.priority,
        filters.type,
    ]);
}

export default useProjectFilters;