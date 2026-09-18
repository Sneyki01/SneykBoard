import { Search, X } from "lucide-react";
import Input from "../ui/Input";

function SearchBar({
    value,
    onChange,
    resultCount,
}) {
    function handleChange(event) {
        onChange(event.target.value);
    }

    function handleClear() {
        onChange("");
    }
    
    return (
        <div className="w-full">
            <div className="relative">
                <Search
                    size={20}
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        z-10
                        -translate-y-1/2
                        text-text-secondary
                    "
                />

                <Input
                    type="text"
                    inputMode="search"
                    value={value}
                    onChange={handleChange}
                    placeholder="Search by title, status, priority..."
                    aria-label="Search projects"
                    inputClassName="
                        pl-12
                        pr-12
                    "
                />

                {value && (
                    <button
                        type="button"
                        onClick={handleClear}
                        aria-label="Clear project search"
                        className="
                            absolute
                            right-2
                            top-1/2
                            z-10
                            inline-flex
                            h-8
                            w-8
                            -translate-y-1/2
                            items-center
                            justify-center
                            rounded-sneyk-md
                            text-text-secondary
                            transition-colors
                            duration-200
                            hover:bg-surface-hover
                            hover:text-text-primary
                            focus-visible:outline-none
                            focus-visible:ring-2
                            focus-visible:ring-primary/60
                        "
                    >
                        <X
                            size={18}
                            aria-hidden="true"
                        />
                    </button>
                )}
            </div>

            {value && (
                <p className="mt-2 text-right text-xs text-text-secondary">
                    {resultCount}{" "}
                    {resultCount === 1
                        ? "project found"
                        : "projects found"}
                </p>
            )}
        </div>
    );
}

export default SearchBar;