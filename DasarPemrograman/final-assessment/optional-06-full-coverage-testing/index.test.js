import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Calculator', () => {
  it('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = sum(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });
    
    
    it('should throw error if string passed on sum A parameter', () => {
        //arrange
        const a = '2'
        const b = 3

        //action
        sum(a, b)
    })

    it('should throw error if string passed on sum B parameter', () => {
        //arrange
        const a = 2
        const b = '3'

        //action
        sum(a, b)
    })

});