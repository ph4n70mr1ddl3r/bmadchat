"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
describe('sum', () => {
    test('adds two numbers', () => {
        expect((0, index_1.sum)(1, 2)).toBe(3);
    });
});
