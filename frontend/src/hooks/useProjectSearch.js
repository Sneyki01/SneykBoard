import { useMemo } from "react";
import { normalizeSearchValue } from "../utils/searchUtils"

function useProjectSearch(projects, searchQuery) {
    return useMemo(() => {
        const normalizedQuery = normalizeSearchValue(searchQuery);

        if (!normalizedQuery) {
            return projects;
        }

        const compactQuery = normalizedQuery.replace(/\s/g, "");

        return projects.filter((project) => {
            const searchableValues = [
                project.title,
                project.description,
                project.notes,
                project.status,
                project.priority,
                project.type,
            ];

            return searchableValues.some((value) => {
                const normalizedValue = normalizeSearchValue(value);
                const compactValue = normalizedValue.replace(/\s/g, "");

                return (
                    normalizedValue.includes(normalizedQuery) ||
                    compactValue.includes(compactQuery)
                );
            });
        });
    }, [projects, searchQuery]);
}

export default useProjectSearch;