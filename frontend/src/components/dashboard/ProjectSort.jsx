import { ArrowUpDown } from "lucide-react";

function ProjectSort({value, onChange}) {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-xs text-text-secondary">
                <ArrowUpDown
                size={16}
                aria-hidden="true"
                />

                <span>Sort</span>
            </div>

            <select
            value={value}
            onChange={(event) =>
                onChange(event.target.value)
            }
            aria-label="Sort projects"
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
                <option value="DEFAULT">
                    Default
                </option>

                <option value="NEWEST">
                    Newest
                </option>

                <option value="OLDEST">
                    Oldest
                </option>
                
                <option value="TITLE_ASC">
                    Title A-Z
                </option>

                <option value="TITLE_DESC">
                    Title Z-A
                </option>

                <option value="PROGRESS_DESC">
                    Progress: High to Low
                </option>

                <option value="PROGRESS_ASC">
                    Progress: Low to High
                </option>

                <option value="PRIORITY_DESC">
                    Priority: High to Low
                </option>

                <option value="DUE_DATE_ASC">
                    Due Date: Soonest
                </option>
            </select>
        </div>
    );
}

export default ProjectSort;