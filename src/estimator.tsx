import { estimateJourney, exampleRates } from './pricing.js';
import type { JourneyDuration } from './pricing.js';

const { createElement: h, createRoot, useState } = window.wp.element;
const money = (cents: number) =>
  new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(cents / 100);

function JourneyEstimator() {
  const [guests, setGuests] = useState(2);
  const [includeExtra, setIncludeExtra] = useState(false);
  const [duration, setDuration] = useState<JourneyDuration>('half-day');
  const quote = estimateJourney({ guests, includeExtra, duration });

  return <div className="kcc-estimator-controls">
    <label>
      Journey duration{' '}
      <select
        value={duration}
        onChange={(event: { currentTarget: HTMLSelectElement }) => {
          const selected = event.currentTarget.value;

          if (selected === 'half-day' || selected === 'full-day') {
            setDuration(selected);
          }
        }}
      >
        <option value="half-day">Half day</option>
        <option value="full-day">Full day</option>
      </select>
    </label>
    <label>Number of guests{' '}
      <select value={guests} onChange={(e: { currentTarget: HTMLSelectElement }) => setGuests(Number(e.currentTarget.value))}>
        {[1, 2, 3, 4].map(n => <option key={n} value={n}>{n}</option>)}
      </select>
    </label>
    <label><input type="checkbox" checked={includeExtra}
      onChange={(e: { currentTarget: HTMLInputElement }) => setIncludeExtra(e.currentTarget.checked)} />
      {' '}Include sample extra ({money(exampleRates.extraPerGuest)} per guest)
    </label>
    <div aria-live="polite" aria-atomic="true">
      <p>Private group: {money(quote.base)} · Extras: {money(quote.extras)}</p>
      <strong>Example total: {money(quote.total)} AUD</strong>
    </div>
  </div>;
}

export function mount(node: HTMLElement) {
  createRoot(node).render(<JourneyEstimator />);
}
