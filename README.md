# CalciumInsights User Guide Website

This repository contains the static user guide website for **CalciumInsights for Calcium Transient Analysis**.

The website is organized as a multi-page guide aligned with the two main Shiny modules:

```text
index.html
fft-guide.html
wavelet-guide.html
style.css
script.js
README.md
```

## Purpose

The documentation is designed so that the visible numbering in each guide matches the numbering inside the corresponding Shiny module. This makes it easier for users, reviewers, and instructors to follow the app step by step.

## Pages

### `index.html`

Main landing page. It now follows the same broad documentation structure as the module guides:

1. Overview
2. Website structure
3. FFT guide structure
4. Wavelet guide structure
5. Shared baseline names
6. Recommended update workflow

### `fft-guide.html`

Dedicated guide for the **FFT + Baseline Analysis** module.

The numbered guide follows the visible order used in the FFT Shiny module:

1. Example Data
2. Dataset
3. Region of Interest (ROI)
4. FFT Low-Frequency Fraction
5. Find Peaks Function Arguments
6. Baseline
7. Area Under the Curve (AUC)
8. Raw Data
9. Full Width at Half Maximum
10. Optional Sigmoid Modeling
11. Download Options
12. SummaryData
13. Peaks
14. Baseline Sensitivity Analysis
15. FFT Selection Criteria

### `wavelet-guide.html`

Dedicated guide for the **Wavelet Ridgewalking** module.

The numbered guide follows the visible order used in the Wavelet Shiny module:

1. Example Data
2. Dataset
3. Region of Interest (ROI)
4. Wavelet Ridgewalking Function Arguments
5. Baseline
6. Biological Event Filters
7. Graph Display Options
8. SummaryData
9. Peaks
10. Baseline Sensitivity Analysis
11. Metrics
12. Metric Plots
13. Wavelet Analysis

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

Example:

```bash
git add index.html fft-guide.html wavelet-guide.html style.css script.js README.md
git commit -m "Update CalciumInsights user guide structure"
git push
```

## Local preview

Open `index.html` in a browser, or use a simple local server:

```bash
python3 -m http.server 8000
```

Then open the local site in your browser.
