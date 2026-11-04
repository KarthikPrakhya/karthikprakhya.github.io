# Karthik Prakhya — Academic Website

A minimal, responsive, static academic website prepared for GitHub Pages. It uses plain HTML, CSS, and JavaScript; no build tools, package installation, or Jekyll configuration are required.

## Deploy to GitHub Pages

1. Sign in to GitHub as `KarthikPrakhya`.
2. Create a **public** repository named exactly `karthikprakhya.github.io` (or use that repository if it already exists).
3. Upload the **contents** of this folder to the repository root, preserving the folder structure. Alternatively, extract the ZIP and push the files with Git.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/ (root)`, then save. (If the repository already uses a GitHub Actions Pages workflow, keep that workflow instead.)
6. Wait for the Pages deployment to complete. The site should appear at `https://karthikprakhya.github.io/`.

## Institutional profile

The homepage links to the official Umeå University staff profile at https://www.umu.se/en/staff/karthik-prakhya/. The biography identifies the doctoral-student role and Mathematical Programming research-group membership shown on that page. Two earlier Federated Frank-Wolfe publications listed in the university profile are included as additional publication records, linked to DiVA.

## Profile photograph

The homepage includes the supplied professional portrait at `assets/img/profile.jpg`. To replace it, overwrite that file with another portrait image, keeping the filename, or update the image path and alt text in `index.html`.

## Update content

- Edit biography and research interests in `index.html`.
- Edit publication details, status, abstracts, links, and BibTeX in the Publications section of `index.html`.
- Replace PDFs in `assets/papers/` if you upload revised versions; keep the filenames or update their links in `index.html`.
- Add a CV by placing `CV.pdf` in `assets/` and adding a link in the hero or navigation.

## Publication metadata notes

- ICLR 2025 paper is marked published.
- The linear-network paper is linked to arXiv:2605.17692.
- The adaptive-subgradient paper is identified as an OPT2026 workshop paper; no arXiv/DOI link was supplied in the uploaded manuscript, so only the PDF and code link are included.
- The inexact-PDHG paper is linked to arXiv:2610.37998.

Check publication status, author order, and any new DOI or proceedings links before making further changes. This site does not claim that preprints or workshop papers are journal publications.

## Local preview

Open `index.html` in a browser. No local server is required for basic previewing.


## Conference presentations

The Conferences section lists the events and presentation titles supplied in the November 2026 doctoral reference-group slides. It uses year and venue rather than exact dates because some date ranges in the slides appear inconsistent or duplicated. Please verify event dates and official event naming before adding them.

## Entrepreneurship

The Entrepreneurship section briefly describes the user's co-founder and Chief Data Scientist role at OptiML Data Analysis AB and links to https://www.optimldataanalysis.se/. It is deliberately placed after academic software and conference activity so the website remains primarily an academic profile.


## Recent profile updates
- Current research visit: WASP Stint Abroad with the LIONS group at EPFL, Lausanne, Switzerland (September 2026–January 2027).
- Research focus during the visit: non-Euclidean gradient methods for semidefinite programming.
- Added conference and workshop activity from the latest doctoral reference-group meeting slides.
- Includes an Entrepreneurship section for OptiML Data Analysis AB, secondary to the academic profile.
