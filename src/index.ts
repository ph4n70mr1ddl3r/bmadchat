/**
 * Adds two numbers together.
 * @param a - The first number to add
 * @param b - The second number to add
 * @returns The sum of the two numbers
 * @example
 * ```ts
 * sum(1, 2); // 3
 * sum(-1, 5); // 4
 * ```
 */
export function sum(a: number, b: number): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }
    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new Error('Arguments cannot be NaN');
    }
    return a + b;
}
