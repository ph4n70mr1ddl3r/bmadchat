import { sum } from '../src/index';

describe('sum', () => {
    test('adds two numbers', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
