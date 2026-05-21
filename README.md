# CalciumInsights User Guide Website

This repository contains the static user guide website for **CalciumInsights for Calcium Transient Analysis**.

The website is organized as a multi-page guide:

```text
index.html
fft-guide.html
wavelet-guide.html
style.css
script.js
README.md
```

## Pages

### `index.html`
Main landing page. It introduces the app, explains the numbering logic, and links to the two module-specific guides.

### `fft-guide.html`
Dedicated guide for the **FFT + Baseline Analysis** module.

The numbered guide follows the same visible order used in the Shiny module:

- Input controls: 1–11
- 12. SummaryData
- 13. Peaks
- 14. Baseline Sensitivity Analysis
- 15. FFT Selection Criteria

### `wavelet-guide.html`
Dedicated guide for the **Wavelet Ridgewalking** module.

The numbered guide follows the same visible order used in the Shiny module:

- Input controls: 1–7
- 8. SummaryData
- 9. Peaks
- 10. Baseline Sensitivity Analysis
- 11. Metrics
- 12. Metric Plots
- 13. Wavelet Analysis

## Baseline naming rule

Both modules should use the same visible baseline names:

- Standard definition
- Low-fluorescence region baseline
- Rolling percentile baseline
- Event-specific baseline: left-right FFT minima
- Median signal (legacy)
- Mean signal (legacy)
- Min

## How to update GitHub Pages

Replace the files in the root of the repository with the updated files:

```text
index.html
fft-guide.html
wavelet-guide.html
style.css
script.js
README.md
```

Then commit and push to GitHub.

If the page still looks old, refresh the browser cache using `Shift + Reload` or open the page in an incognito/private window.
