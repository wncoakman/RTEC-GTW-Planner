# GTW Job Builder — Field Guide

Internal SOP and demo walkthrough for the GTW Job Builder: field capture, the
export bundle, the OneDrive hand-off from the device, and building the
SingleOps proposal at the office.

**Published (private) walkthrough:**
https://claude.ai/code/artifact/916e5454-c479-48fc-bcd7-87efbf48439e

## Not for the public site

This folder is excluded from the GitHub Pages build (see `../_config.yml`).
The published Pages site is reachable by anyone, and this guide contains RTEC
pricing, the deposit rule, SingleOps catalog group codes and photos of client
properties. Keep it excluded, and don't add a `.nojekyll` file.

**The exclusion only protects the Pages site, not the repository.** While
`wncoakman/RTEC-GTW-Planner` is public, everything in this folder is readable
by anyone at github.com. Keep the repository private, or keep this folder out
of any pushed branch.

Open `index.html` locally to read it, or use the artifact link above to share
it with staff.

## Contents

| Path | What it is |
|---|---|
| `index.html` | The walkthrough, standalone — opens in any browser, no server needed. |
| `media/` | Seven screen recordings with poster frames, plus preview images of every exported file. |
| `previous-version/` | The earlier static-screenshot guide, kept for reference. See its own README. |

### Screen recordings
Click-to-play in the page; each one is the live app driven end to end.

- `media/01-client-site.gif` — the seven Client & Site fields
- `media/02-tree-gps.gif` — tree photo, then the 15-second GPS average
- `media/03-markup.gif` — photo markup: ellipse, arrow, text label, save
- `media/04-tasks.gif` — work tasks 1a/1b, hours, price, proposal status
- `media/05-satellite.gif` — the satellite pin placer and accuracy ring
- `media/06-logistics.gif` — equipment, work plan, safety, access & permits
- `media/07-generate.gif` — Generate & Download ZIP Bundle

### Worked example
Demo job "Whitfield, Dana — SingleOps #41827", Takoma Park MD, 28 Oct 2026:
four inventory entries (three trees plus a boxwood hedge), seven priced lines,
grand total $6,875.00, with task 3b split to visit `41827-2`. The client is
fictional and the phone and email are 555/example.com placeholders; the
coordinates are a real Takoma Park block so the satellite site map is genuine.
Photos are from past RTEC jobs.

The real 8 MB export bundle for this job is **not** in the repository — it
lives in the shared OneDrive folder as the reference sample. The page shows
previews of every file in it.

## Updating

`index.html` is the source of truth. To refresh the shared artifact, republish
`index.html` to the artifact URL above — publishing without that URL creates a
separate artifact instead of updating this one.

Re-record the GIFs whenever the app's screens change; the guide documents app
build 2026-10-16 of `../index.html`.
