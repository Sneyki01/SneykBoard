import { useMemo } from "react";

function useProjectSorting(projects, sortOption) {
    return useMemo(() => {
        const sortedProjects = [...projects];

        switch (sortOption) {
            case "NEWEST":
                return sortedProjects.sort(
                    (a, b) => 
                        new Date(b.createdAt) - new Date(a.createdAt)
                );

            case "OLDEST":
                return sortedProjects.sort(
                    (a, b) =>
                        new Date(a.createdAt) - new Date(b.createdAt)
                );
            
            case "TITLE_ASC":
                return sortedProjects.sort((a, b) =>
                (a.title ?? "").localeCompare(b.title ?? "")
            );

            case "TITLE_DESC":
                return sortedProjects.sort((a, b) =>
                (b.title ?? "").localeCompare(a.title ?? "")
            );

            case "PROGRESS_DESC":
                return sortedProjects.sort(
                    (a, b) => 
                    (b.progress ?? 0) - (a.progress ?? 0)
                );

            case "PROGRESS_ASC":
                return sortedProjects.sort(
                    (a, b) =>
                    (a.progress ?? 0) - (b.progress ?? 0)
                );

            case "PRIORITY_DESC": {
                const priorityWeight = {
                    HIGH: 3,
                    MEDIUM: 2,
                    LOW: 1,
                }

                return sortedProjects.sort(
                    (a,b) => 
                    (priorityWeight[b.priority] ?? 0) - (priorityWeight[a.priority] ?? 0)
                );
            }

            case "DUE_DATE_ASC":
                return sortedProjects.sort((a,b) => {
                    if (!a.dueDate && !b.dueDate) return 0;
                    if (!a.dueDate) return 1;
                    if (!b.dueDate) return -1;

                    return (
                        new Date(a.dueDate) - new Date(b.dueDate)
                    );
                });

            case "DEFAULT":
                default:
                    return sortedProjects;
        }
    }, [projects, sortOption]);
} 

export default useProjectSorting;