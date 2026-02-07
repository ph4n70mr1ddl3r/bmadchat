import { sum } from '../src/index';

describe('sum', () => {
    test('adds two positive numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds two negative numbers', () => {
        expect(sum(-1, -2)).toBe(-3);
    });

    test('adds positive and negative numbers', () => {
        expect(sum(5, -3)).toBe(2);
    });

    test('adds zero', () => {
        expect(sum(0, 5)).toBe(5);
        expect(sum(5, 0)).toBe(5);
    });

    test('adds floating point numbers', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('adds large numbers', () => {
        expect(sum(1000000, 2000000)).toBe(3000000);
    });

    test('handles NaN input', () => {
        expect(sum(NaN, 5)).toBeNaN();
        expect(sum(5, NaN)).toBeNaN();
    });

    test('handles Infinity', () => {
        expect(sum(Infinity, 5)).toBe(Infinity);
        expect(sum(-Infinity, 5)).toBe(-Infinity);
        expect(sum(Infinity, -Infinity)).toBeNaN();
    });

    test('handles MAX_SAFE_INTEGER', () => {
        expect(sum(Number.MAX_SAFE_INTEGER, 0)).toBe(Number.MAX_SAFE_INTEGER);
        expect(sum(Number.MAX_SAFE_INTEGER, -1)).toBe(Number.MAX_SAFE_INTEGER - 1);
    });
});
