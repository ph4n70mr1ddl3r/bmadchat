import { sum } from '../src/index';

describe('sum', () => {
    test('adds two positive numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds negative numbers', () => {
        expect(sum(-1, -2)).toBe(-3);
    });

    test('adds zero', () => {
        expect(sum(0, 5)).toBe(5);
        expect(sum(5, 0)).toBe(5);
        expect(sum(0, 0)).toBe(0);
    });

    test('adds positive and negative numbers', () => {
        expect(sum(10, -3)).toBe(7);
    });

    test('handles floating-point numbers', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
});
