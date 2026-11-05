# KCC Journey Estimator — first React and TypeScript exercise

Install the ZIP through Plugins → Add Plugin → Upload Plugin on the local blocks site. Insert **KCC Journey Estimator** on a new draft page and open the front-end preview. The build is included; Node is not needed to try it.

All rates are invented for the exercise. A group of 1–4 guests has one example base price, with an optional per-guest extra. No requests are sent, and nothing is saved.

## Follow the data
1. Read src/pricing.ts: JourneySelection describes a valid input shape. The function checks the guest limit at runtime and returns a breakdown in cents.
2. Read src/estimator.tsx: changing a control updates React state. React calls the calculation on the next render, then updates the output.
3. Predict the price for three guests with the extra, then check it in the front-end preview.

## Develop
Open the installed plugin directory in your editor. With Node and npm installed, run `npm install`, then `npm run watch`. Keep the watcher running while editing and reload the preview after saving. Run `npm test` to build and test the pricing rules. Run `npm run build` for a one-off build. Keep dist with the plugin. WordPress supplies the React runtime; you do not install a second copy of React.

First small exercise: change extraPerGuest from 2500 to 3000, predict the new four-person total, update the test expectation and verify both the test and browser. Restore the illustrative rates or replace them with confirmed business rules before considering any public use.

