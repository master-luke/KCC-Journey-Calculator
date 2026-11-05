import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estimateJourney } from '../dist/pricing.js';

test('base price is charged once per group', () => {
  for (const guests of [1, 2, 3, 4]) {
    for (const duration of ['half-day', 'full-day']) {
      const result = estimateJourney({
        guests,
        includeExtra: false,
        duration,
      });

      const expected = duration === 'half-day' ? 20000 : 35000;
      assert.equal(result.total, expected);
    }
  }
});

test('half day with three guests and extras totals $290', () => {
  const result = estimateJourney({
    guests: 3,
    includeExtra: true,
    duration: 'half-day',
  });

  assert.deepEqual(result, {
    base: 20000,
    extras: 9000,
    total: 29000,
  });
});

test('full day with three guests and extras totals $440', () => {
  const result = estimateJourney({
    guests: 3,
    includeExtra: true,
    duration: 'full-day',
  });

  assert.deepEqual(result, {
    base: 35000,
    extras: 9000,
    total: 44000,
  });
});

test('unsupported guest counts are rejected', () => {
  for (const guests of [0, 5, 1.5, NaN]) {
    assert.throws(
      () => estimateJourney({
        guests,
        includeExtra: false,
        duration: 'half-day',
      }),
      RangeError,
    );
  }
});