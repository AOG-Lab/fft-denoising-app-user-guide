# CalciumInsights User Guide Website

This repository contains the static user guide website for **CalciumInsights for Calcium Transient Analysis**.

The website is organized as a multi-page guide:

```text
index.html
fft-guide.html
wavelet-guide.html
style.css
script.js
```

## Pages

### `index.html`
Main landing page. It introduces the app and links to the two module-specific guides.

### `fft-guide.html`
Dedicated guide for the **FFT + Baseline Analysis** module.

The numbered guide follows the same visible tab order used in the Shiny module:

1. SummaryData  
2. Peaks  
3. Metrics  
4. Metric plots  
5. Fourier analysis  
6. Baseline sensitivity analysis  
7. FFT selection criteria  

### `wavelet-guide.html`
Dedicated guide for the **Wavelet Ridgewalking** module.

The numbered guide follows the same visible tab order used in the Shiny module:

1. SummaryData  
2. Peaks  
3. Baseline sensitivity analysis  
4. Metrics  
5. Metric plots  
6. Wavelet analysis  

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
