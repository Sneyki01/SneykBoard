import {
    RotateCcw,
    SlidersHorizontal,
} from "lucide-react";

import Select from "../ui/Select";
import Button from "../ui/Button";

function formatOptionLabel(value) {
    return String(value)
        .toLowerCase()
        .replace(/[_-]+/g, " ")
        .replace(/\b\w/g, (character) =>
            character.toUpperCase()
        );
}

function getUniqueValues(projects, property) {
    return [
        ...new Set(
            projects
                .map((project) => project[property])
                .filter(Boolean)
        ),
    ].sort();
}

function ProjectFilters({
    projects = [],
    filters,
    onChange,
    onClear,
}) {
    const statusOptions = [
        {
            value: "ALL",
            label: "All Status",
        },
        ...getUniqueValues(projects, "status").map(
            (status) => ({
                value: status,
                label: formatOptionLabel(status),
            })
        ),
    ];

    const priorityOptions = [
        {
            value: "ALL",
            label: "All Priority",
        },
        ...getUniqueValues(projects, "priority").map(
            (priority) => ({
                value: priority,
                label: formatOptionLabel(priority),
            })
        ),
    ];

    const typeOptions = [
        {
            value: "ALL",
            label: "All Types",
        },
        ...getUniqueValues(projects, "type").map(
            (type) => ({
                value: type,
                label: formatOptionLabel(type),
            })
        ),
    ];

    const hasActiveFilters =
        filters.status !== "ALL" ||
        filters.priority !== "ALL" ||
        filters.type !== "ALL";

    return (
        <div className="flex flex-wrap items-center gap-2 lg:flex-nowrap">
            <div
                className="
                    mr-1
                    flex
                    shrink-0
                    items-center
                    gap-2
                    font-display
                    text-xs
                    uppercase
                    tracking-[0.16em]
                    text-text-secondary
                "
            >
                <SlidersHorizontal
                    size={16}
                    aria-hidden="true"
                />

                <span>Filters</span>
            </div>

            <Select
                value={filters.status}
                onChange={(event) =>
                    onChange("status", event.target.value)
                }
                options={statusOptions}
                placeholder={null}
                aria-label="Filter projects by status"
                className="w-32 shrink-0"
            />

            <Select
                value={filters.priority}
                onChange={(event) =>
                    onChange("priority", event.target.value)
                }
                options={priorityOptions}
                placeholder={null}
                aria-label="Filter projects by priority"
                className="w-36 shrink-0"
            />

            <Select
                value={filters.type}
                onChange={(event) =>
                    onChange("type", event.target.value)
                }
                options={typeOptions}
                placeholder={null}
                aria-label="Filter projects by type"
                className="w-32 shrink-0"
            />

            {hasActiveFilters && (
                <Button
                    type="button"
                    variant="ghost"
                    size="md"
                    onClick={onClear}
                    className="shrink-0 gap-2"
                >
                    <RotateCcw
                        size={15}
                        aria-hidden="true"
                    />

                    Clear
                </Button>
            )}
        </div>
    );
}

export default ProjectFilters;