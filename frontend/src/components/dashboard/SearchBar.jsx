import { Search, X } from "lucide-react";

function SearchBar({ value, onChange, resultCount }) {
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
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
                />
                <input
                    type="text"
                    inputMode="search"
                    value={value}
                    onChange={handleChange}
                    placeholder="Search by title, status, priority..."
                    aria-label="Search projects"
                    className="
                        w-full rounded-xl
                        border border-primary/60
                        bg-surface py-3.5 pl-12 pr-14
                        text-text-primary
                        outline-none
                        transition
                        placeholder:text-text-secondary
                        hover:border-primary
                        focus:border-primary
                        focus:shadow-[0_0_20px_rgba(118,38,218,0.35)]
                    "
                />
                {value && (
                    <button
                        type="button"
                        onClick={handleClear}
                        aria-label="Clear project search"
                        className="
                            absolute right-4 top-1/2 z-10
                            -translate-y-1/2
                            rounded-md p-1
                            text-text-secondary
                            transition
                            hover:bg-primary/10
                            hover:text-primary
                            focus:outline-none
                            focus:ring-2
                            focus:ring-primary
                        "
                    >
                        <X size={18} aria-hidden="true" />
                    </button>
                )}
            </div>
            {value && (
                <p className="mt-2 text-right text-xs text-text-secondary">
                    {resultCount} {resultCount === 1 ? 'project found' : 'projects found'}
                </p>
            )}
        </div>
    );
}

export default SearchBar;