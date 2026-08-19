export function normalizeSearchValue(value) {
    return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[_-]+/g, "")
    .replace(/\s+/g, "")
    .trim()
    .toLowerCase();
}