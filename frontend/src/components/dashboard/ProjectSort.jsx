import { ArrowUpDown } from "lucide-react";
import Select from "../ui/Select";

const sortOptions = [
    {
        value: "DEFAULT",
        label: "Default",
    },
    {
        value: "NEWEST",
        label: "Newest",
    },
    {
        value: "OLDEST",
        label: "Oldest",
    },
    {
        value: "TITLE_ASC",
        label: "Title A-Z",
    },
    {
        value: "TITLE_DESC",
        label: "Title Z-A",
    },
    {
        value: "PROGRESS_DESC",
        label: "Progress: High to Low",
    },
    {
        value: "PROGRESS_ASC",
        label: "Progress: Low to High",
    },
    {
        value: "PRIORITY_DESC",
        label: "Priority: High to Low",
    },
    {
        value: "DUE_DATE_ASC",
        label: "Due Date: Soonest",
    },
];

function ProjectSort({ value, onChange }) {
    return (
        <div className="flex shrink-0 items-center gap-2">
            <div
                className="
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
                <ArrowUpDown
                    size={16}
                    aria-hidden="true"
                />

                <span>Sort</span>
            </div>

            <Select
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                options={sortOptions}
                placeholder={null}
                aria-label="Sort projects"
                className="w-44 shrink-0"
            />
        </div>
    );
}

export default ProjectSort;