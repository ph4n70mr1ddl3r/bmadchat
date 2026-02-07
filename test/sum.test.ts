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
        expect(() => sum(NaN, 5)).toThrow('Both arguments must be valid numbers');
        expect(() => sum(5, NaN)).toThrow('Both arguments must be valid numbers');
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

    test('precision loss beyond MAX_SAFE_INTEGER', () => {
        const largeNum = Number.MAX_SAFE_INTEGER + 1;
        expect(sum(largeNum, 0)).toBe(largeNum);
        expect(sum(largeNum, 1)).toBe(largeNum);
    });

    test('adds two infinities of same sign', () => {
        expect(sum(Infinity, Infinity)).toBe(Infinity);
        expect(sum(-Infinity, -Infinity)).toBe(-Infinity);
    });

    test('adds very large negative numbers', () => {
        expect(sum(-1000000, -2000000)).toBe(-3000000);
    });

    test('handles negative zero', () => {
        expect(sum(-0, 5)).toBe(5);
        expect(sum(5, -0)).toBe(5);
        expect(sum(-0, -0)).toBe(-0);
    });

    test('handles very small numbers', () => {
        expect(sum(0.0000001, 0.0000001)).toBeCloseTo(0.0000002);
        expect(sum(Number.MIN_VALUE, Number.MIN_VALUE)).toBe(Number.MIN_VALUE * 2);
    });

    test('throws error for non-number types', () => {
        expect(() => sum('1' as any, 2)).toThrow('Both arguments must be valid numbers');
        expect(() => sum(1, '2' as any)).toThrow('Both arguments must be valid numbers');
        expect(() => sum(null as any, 2)).toThrow('Both arguments must be valid numbers');
        expect(() => sum(undefined as any, 2)).toThrow('Both arguments must be valid numbers');
        expect(() => sum({} as any, 2)).toThrow('Both arguments must be valid numbers');
    });
});
