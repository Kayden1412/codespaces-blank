
export function match(param) {
    return /^(?!0$)\d+$/.test(param);
}