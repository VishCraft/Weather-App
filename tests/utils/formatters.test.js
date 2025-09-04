import { describe, it, expect } from 'vitest';
import { formatTemperature, convertTemperature } from '../../src/utils/formatters/temperatureFormatter';

describe('temperatureFormatter', () => {
  it('formats temperature with unit', () => {
    expect(formatTemperature(21.6)).toBe('22°C');
  });

  it('converts C to F', () => {
    expect(Math.round(convertTemperature(0, 'C', 'F'))).toBe(32);
  });
});
