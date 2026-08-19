import { RotateCcw, SlidersHorizontal } from "lucide-react";

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
    projects,
    filters,
    onChange,
    onClear,
}) {
    const statusOptions = getUniqueValues(
        projects,
        "status"
    );

    const priorityOptions = getUniqueValues(
        projects,
        "priority"
    );

    const typeOptions = getUniqueValues(
        projects,
        "type"
    );

    const hasActiveFilters =
        filters.status !== "ALL" ||
        filters.priority !== "ALL" ||
        filters.type !== "ALL";

    return (
        <div className="mt-3 flex flex-wrap items-center justify-end gap-2">

            <div className="mr-1 flex items-center gap-2 text-xs text-text-secondary">
                <SlidersHorizontal
                    size={16}
                    aria-hidden="true"
                />

                <span>Filters</span>
            </div>

            {/* Status */}
            <select
                value={filters.status}
                onChange={(event) =>
                    onChange(
                        "status",
                        event.target.value
                    )
                }
                aria-label="Filter projects by status"
                className="
                    rounded-lg
                    border border-border
                    bg-surface
                    px-3 py-2
                    text-sm text-text-primary
                    outline-none
                    transition
                    hover:border-primary/60
                    focus:border-primary
                "
            >
                <option value="ALL">
                    All Status
                </option>

                {statusOptions.map((status) => (
                    <option
                        key={status}
                        value={status}
                    >
                        {formatOptionLabel(status)}
                    </option>
                ))}
            </select>


            {/* Priority */}
            <select
                value={filters.priority}
                onChange={(event) =>
                    onChange(
                        "priority",
                        event.target.value
                    )
                }
                aria-label="Filter projects by priority"
                className="
                    rounded-lg
                    border border-border
                    bg-surface
                    px-3 py-2
                    text-sm text-text-primary
                    outline-none
                    transition
                    hover:border-primary/60
                    focus:border-primary
                "
            >
                <option value="ALL">
                    All Priority
                </option>

                {priorityOptions.map((priority) => (
                    <option
                        key={priority}
                        value={priority}
                    >
                        {formatOptionLabel(priority)}
                    </option>
                ))}
            </select>


            {/* Type */}
            <select
                value={filters.type}
                onChange={(event) =>
                    onChange(
                        "type",
                        event.target.value
                    )
                }
                aria-label="Filter projects by type"
                className="
                    rounded-lg
                    border border-border
                    bg-surface
                    px-3 py-2
                    text-sm text-text-primary
                    outline-none
                    transition
                    hover:border-primary/60
                    focus:border-primary
                "
            >
                <option value="ALL">
                    All Types
                </option>

                {typeOptions.map((type) => (
                    <option
                        key={type}
                        value={type}
                    >
                        {formatOptionLabel(type)}
                    </option>
                ))}
            </select>


            {/* Clear Filters */}
            {hasActiveFilters && (
                <button
                    type="button"
                    onClick={onClear}
                    className="
                        inline-flex items-center gap-2
                        rounded-lg
                        px-3 py-2
                        text-sm text-text-secondary
                        transition
                        hover:bg-primary/10
                        hover:text-primary
                    "
                >
                    <RotateCcw
                        size={15}
                        aria-hidden="true"
                    />

                    Clear
                </button>
            )}
        </div>
    );
}

export default ProjectFilters;