# GTW Job Builder — Field Guide

Internal SOP and demo walkthrough for the GTW Job Builder: field capture,
the export bundle, the OneDrive hand-off from the device, and building the
SingleOps proposal at the office.

**Published (private) walkthrough:**
https://claude.ai/code/artifact/b443075e-eb65-450f-ba00-ba2453de7f5b

## Not for the public site

This folder is excluded from the GitHub Pages build (see `../_config.yml`).
The published Pages site is reachable by anyone even while this repository is
private, and this guide contains RTEC pricing, the deposit rule, SingleOps
catalog group codes and photos of client properties. Keep it excluded.

Open `index.html` locally to read it, or use the artifact link above to share
it with staff.

## Contents

| Path | What it is |
|---|---|
| `index.html` | The walkthrough, standalone — opens in any browser, no server needed. |
| `img/` | 25 screenshots and 3 screen recordings (GIF), captured from the live app. |
| `example-bundle/` | The real export bundle for the worked demo job, unpacked. |

### Screen recordings
- `img/gtw-four-steps.gif` — the four-step flow, Client → Trees → Logistics → Generate
- `img/gtw-photo-markup.gif` — expanding a photo, drawing arrows and a circle, saving
- `img/gtw-gps-finetune.gif` — the satellite pin placer, GPS accuracy ring, drag-to-trunk

### Worked example
Demo job "Harrington, Dale — SingleOps #48217", Arlington VA, 28 Oct 2026.
Three trees, eight priced lines, grand total $10,585.00. The client is
fictional; the street is a real one in Arlington so the satellite site map is
genuine. Source photos are from past RTEC jobs with their burned-in captions
(client names, prices, ISA number) cropped off.

## Updating

`index.html` is the source of truth. To refresh the shared artifact, copy this
folder's contents into the Claude Code working directory and republish
`index.html` to the artifact URL above — publishing without that URL creates a
separate artifact instead of updating this one.

Re-record the GIFs or screenshots whenever the app's screens change; the guide
documents a specific build of `../index.html`.
