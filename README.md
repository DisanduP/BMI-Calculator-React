# BMI Calculator — React (Parcel)

This repository contains a compact, focused BMI (Body Mass Index) Calculator implemented in React and styled with SASS. It's intentionally minimal so you can drop it into a larger project or use it as a learning example.

Why this repo is legendary
- Tiny, dependency-light React app (Parcel for bundling).
- Clear separation: `src/BMI.js` (component) + `src/BMI.sass` (styles).
- Ready to run locally and ready to be extended for production.

Features
- Calculate BMI from weight (kg) and height (cm).
- Categorize results as Underweight / Normal / Overweight / Obese.
- Responsive layout and accessible form controls.

Quick start (local)
1. Clone the repo:

```bash
git clone https://github.com/DisanduP/BMI-Calculator-React.git
cd BMI-Calculator-React
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server (Parcel):

```bash
npm start
```

Open http://localhost:3000 in your browser.

Build for production

```bash
npm run build
```

The production output will be in `dist/`.

Project structure

```
.
├─ public/
│  ├─ index.html       # App entry
│  └─ 404.html
├─ src/
│  ├─ index.js         # React bootstrap
│  ├─ App.js           # Minimal app wrapper
│  ├─ BMI.js           # BMI component (logic + markup)
│  └─ BMI.sass         # SASS styles
├─ package.json
└─ README.md
```

Design notes
- The UI mirrors the original static implementation and uses React hooks for form state and computations.
- Styling is provided as SASS (indentation-style `.sass`) but works with the `sass` package used by Parcel.

Extending the app (ideas)
- Add unit tests (Jest + React Testing Library).
- Add TypeScript for stronger typing.
- Add CI (GitHub Actions) to run tests and build.
- Persist user's last result to localStorage.
- Add shareable links or export results.

Contributing
- Pull requests are welcome. Keep changes focused and add tests for new logic.

License
- This project is provided as-is. Add a LICENSE file if you intend to publish it with a specific license.

Contact
- Open an issue or PR on the GitHub repository: https://github.com/DisanduP/BMI-Calculator-React

Enjoy — and keep building legendary things.
