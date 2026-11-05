// Illustrative rates only. Store money as integer cents, not floating-point dollars.
export type JourneyDuration = 'half-day' | 'full-day';

export const exampleRates = {
  groupBase: {
    'half-day': 20000,
    'full-day': 35000,
  },
  extraPerGuest: 3000
} as const;


export interface JourneySelection {
  guests: number;
  duration: JourneyDuration;
  includeExtra: boolean;
}

export function estimateJourney({ guests, includeExtra, duration }: JourneySelection) {
  if (!Number.isInteger(guests) || guests < 1 || guests > 4) {
    throw new RangeError('Choose between one and four guests.');
  }

  const base = exampleRates.groupBase[duration];

  const extras = includeExtra ? guests * exampleRates.extraPerGuest : 0;
  return { base, extras, total: base + extras };
}

