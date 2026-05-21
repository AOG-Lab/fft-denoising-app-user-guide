# CalciumInsights for Calcium Transient Analysis — User Guide Website

This repository contains the static user guide website for **CalciumInsights**, an interactive Shiny application for calcium transient analysis.

The guide documents the two active analysis modules of the app:

1. **FFT + Baseline Analysis**
2. **Wavelet Ridgewalking**

The website is designed so that the numbering in the guide matches the numbering visible inside the Shiny app modules. For example, if the guide refers to **1. SummaryData**, the app tab should also appear as **1. SummaryData** in the corresponding module.

---

## Main purpose

The purpose of this website is to provide reviewers and end users with a clear, reproducible, and app-aligned guide for using CalciumInsights.

The guide explains:

- How to load example data or upload user data.
- How to select a region of interest (ROI).
- How to use the **FFT + Baseline Analysis** module.
- How to use the **Wavelet Ridgewalking** module.
- How the same baseline definitions are used across both modules.
- How to interpret baseline sensitivity analysis.
- How to interpret event-level, trace-level, FFT-derived, and wavelet-derived metrics.
- How to export results and troubleshoot common issues.

---

## Numbered app sections

### FFT + Baseline Analysis

The FFT module should use the following visible tab names:

1. **SummaryData**
2. **Peaks**
3. **Metrics**
4. **Metric plots**
5. **Fourier analysis**
6. **Baseline sensitivity analysis**
7. **FFT selection criteria**

### Wavelet Ridgewalking

The Wavelet module should use the following visible tab names:

1. **SummaryData**
2. **Peaks**
3. **Baseline sensitivity analysis**
4. **Metrics**
5. **Metric plots**
6. **Wavelet analysis**

---

## Files included

This website is composed of three main files:

```text
index.html
style.css
script.js
```

Recommended replacement files from this update:

```text
index_updated_two_modules_numbered.html  -> rename to index.html
style_updated.css                        -> rename to style.css
script.js                                -> keep as script.js
README_updated_two_modules.md            -> rename to README.md
```

---

## Deployment on GitHub Pages

1. Replace the current `index.html` with the updated `index.html`.
2. Replace the current `style.css` with the updated `style.css`.
3. Keep or replace `script.js` with the provided `script.js`.
4. Commit and push changes to the GitHub repository.
5. GitHub Pages will update the public guide after the repository is rebuilt.

---

## Notes

This guide no longer presents the application as an FFT-only tool. It now reflects the current CalciumInsights structure with two main workflows: FFT-based peak detection and wavelet ridgewalking.
