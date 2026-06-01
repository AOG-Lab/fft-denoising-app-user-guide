# CalciumInsights Detailed User Guide Website

This folder contains a detailed static user guide for **CalciumInsights for Calcium Transient Analysis**.

## Files

```text
index.html
fft-guide.html
wavelet-guide.html
style.css
script.js
README.md
assets/baseline-sensitivity-fft.png
```

## What changed in this detailed version

- Expanded mathematical notation for calcium transient metrics.
- Detailed explanations of FFT smoothing, Fourier reconstruction, residuals, periodogram, and FFT selection criteria.
- Detailed explanation of Baseline Sensitivity Analysis and each metric shown in the faceted plot.
- Detailed explanation of Wavelet Ridgewalking, including CWT amplitude, scale, ridge length, event status, event AUC, and global AUC.
- Tables explaining how to interpret each output table and graph.
- MathJax support for readable mathematical notation.

## Baseline naming rule

Both modules use the same visible baseline names:

- Standard definition
- Low-fluorescence region baseline
- Rolling percentile baseline
- Event-specific baseline: left-right FFT minima
- Median signal (legacy)
- Mean signal (legacy)
- Min

## How to update GitHub Pages

Replace the files in the root of the GitHub Pages repository with:

```text
index.html
fft-guide.html
wavelet-guide.html
style.css
script.js
README.md
```

If you use the example screenshot included in the FFT guide, also upload:

```text
assets/baseline-sensitivity-fft.png
```

Then commit and push to GitHub.

If the page still looks old, refresh the browser cache using `Shift + Reload` or open the page in an incognito/private window.

## Note about MathJax

The guide uses MathJax from a CDN to render formulas such as `\( AUC = \int \max(x(t)-b(t),0)dt \)`. GitHub Pages will load it normally when the browser has internet access.
