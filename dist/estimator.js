import { estimateJourney, exampleRates } from './pricing.js';
const { createElement: h, createRoot, useState } = window.wp.element;
const money = (cents) => new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(cents / 100);
function JourneyEstimator() {
    const [guests, setGuests] = useState(2);
    const [includeExtra, setIncludeExtra] = useState(false);
    const [duration, setDuration] = useState('half-day');
    const quote = estimateJourney({ guests, includeExtra, duration });
    return h("div", { className: "kcc-estimator-controls" },
        h("label", null,
            "Journey duration",
            ' ',
            h("select", { value: duration, onChange: (event) => {
                    const selected = event.currentTarget.value;
                    if (selected === 'half-day' || selected === 'full-day') {
                        setDuration(selected);
                    }
                } },
                h("option", { value: "half-day" }, "Half day"),
                h("option", { value: "full-day" }, "Full day"))),
        h("label", null,
            "Number of guests",
            ' ',
            h("select", { value: guests, onChange: (e) => setGuests(Number(e.currentTarget.value)) }, [1, 2, 3, 4].map(n => h("option", { key: n, value: n }, n)))),
        h("label", null,
            h("input", { type: "checkbox", checked: includeExtra, onChange: (e) => setIncludeExtra(e.currentTarget.checked) }),
            ' ',
            "Include sample extra (",
            money(exampleRates.extraPerGuest),
            " per guest)"),
        h("div", { "aria-live": "polite", "aria-atomic": "true" },
            h("p", null,
                "Private group: ",
                money(quote.base),
                " \u00B7 Extras: ",
                money(quote.extras)),
            h("strong", null,
                "Example total: ",
                money(quote.total),
                " AUD")));
}
export function mount(node) {
    createRoot(node).render(h(JourneyEstimator, null));
}
